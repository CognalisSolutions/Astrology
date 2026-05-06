import { ConsultationMode } from "@prisma/client";

type NotificationInput = {
  bookingId: string;
  userName: string;
  userPhone: string;
  mode: ConsultationMode;
  slotStartAt: Date;
  channel: "ONLINE_PAID" | "OFFLINE_BOOKED" | "UPI_PENDING";
};

function toE164Indian(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) return `+91${digits}`;
  if (digits.length === 12 && digits.startsWith("91")) return `+${digits}`;
  if (raw.startsWith("+")) return raw;
  return `+${digits}`;
}

function formatSlot(isoDate: Date): string {
  return isoDate.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function toWhatsAppDeepLink(phoneE164: string, message: string): string {
  const digits = phoneE164.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

async function sendTwilioMessage(params: {
  to: string;
  body: string;
  from: string;
}) {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  if (!sid || !token) return;

  const form = new URLSearchParams();
  form.set("To", params.to);
  form.set("From", params.from);
  form.set("Body", params.body);

  const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${sid}:${token}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: form.toString(),
  });

  const raw = await response.text();
  if (!response.ok) {
    throw new Error(`TWILIO_SEND_FAILED ${response.status}: ${raw}`);
  }
}

export async function sendBookingNotifications(input: NotificationInput) {
  const userPhone = toE164Indian(input.userPhone);
  const adminPhone = process.env.ADMIN_PHONE ? toE164Indian(process.env.ADMIN_PHONE) : null;
  const slotText = formatSlot(input.slotStartAt);
  const modeText = input.mode === ConsultationMode.ONLINE ? "Online" : "Offline";

  const userMsg =
    input.channel === "ONLINE_PAID"
      ? `Hello ${input.userName}, your appointment is booked successfully. Date & time: ${slotText} (IST). Booking ID: ${input.bookingId}.`
      : input.channel === "UPI_PENDING"
        ? `Hello ${input.userName}, your appointment is reserved. Please complete the UPI payment. Date & time: ${slotText} (IST). Booking ID: ${input.bookingId}.`
      : `Hello ${input.userName}, your offline appointment is reserved. Date & time: ${slotText} (IST). Booking ID: ${input.bookingId}.`;

  const adminMsg =
    `New booking confirmed.\nName: ${input.userName}\nPhone: ${userPhone}\nMode: ${modeText}\nSlot: ${slotText} (IST)\nBooking ID: ${input.bookingId}`;

  const smsFrom = process.env.TWILIO_SMS_FROM;
  const whatsappFrom = process.env.TWILIO_WHATSAPP_FROM;
  const hasTwilio = Boolean(process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN);

  const userWaLink = toWhatsAppDeepLink(userPhone, userMsg);
  const adminWaLink = adminPhone ? toWhatsAppDeepLink(adminPhone, adminMsg) : null;

  const tasks: Promise<unknown>[] = [];
  if (hasTwilio && smsFrom) {
    tasks.push(sendTwilioMessage({ to: userPhone, from: smsFrom, body: userMsg }));
    if (adminPhone) {
      tasks.push(sendTwilioMessage({ to: adminPhone, from: smsFrom, body: adminMsg }));
    }
  }
  if (hasTwilio && whatsappFrom) {
    const waFrom = whatsappFrom.startsWith("whatsapp:")
      ? whatsappFrom
      : `whatsapp:${whatsappFrom}`;
    tasks.push(sendTwilioMessage({ to: `whatsapp:${userPhone}`, from: waFrom, body: userMsg }));
    if (adminPhone) {
      tasks.push(sendTwilioMessage({ to: `whatsapp:${adminPhone}`, from: waFrom, body: adminMsg }));
    }
  }

  if (tasks.length === 0) {
    console.info(
      "[notifications:fallback] Twilio not configured. Use WhatsApp links manually:",
      {
        bookingId: input.bookingId,
        userWhatsAppLink: userWaLink,
        adminWhatsAppLink: adminWaLink,
      }
    );
    return;
  }

  const results = await Promise.allSettled(tasks);
  const failed = results.some((r) => r.status === "rejected");
  if (failed) {
    const reasons = results
      .filter((r): r is PromiseRejectedResult => r.status === "rejected")
      .map((r) => String(r.reason));
    console.warn(
      "[notifications:fallback] Some Twilio sends failed. WhatsApp fallback links:",
      {
        bookingId: input.bookingId,
        errors: reasons,
        userWhatsAppLink: userWaLink,
        adminWhatsAppLink: adminWaLink,
      }
    );
  }
}
