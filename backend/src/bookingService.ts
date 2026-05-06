import { Prisma, ConsultationMode, PaymentStatus } from "@prisma/client";
import { prisma } from "./lib/prisma.js";
import { sendBookingNotifications } from "./notifications.js";

export function getConsultationAmountPaise(): number {
  const raw = process.env.CONSULTATION_AMOUNT_PAISE;
  const n = raw ? Number(raw) : 100;
  if (!Number.isFinite(n) || n < 100) return 100;
  return Math.round(n);
}

export async function createBookingWithUpiPayment(input: {
  name: string;
  phone: string;
  email?: string;
  slotId: string;
  mode: ConsultationMode;
  upiReference: string;
}) {
  const amountPaise = getConsultationAmountPaise();
  const upiReference = input.upiReference.trim();

  const bookingId = await prisma.$transaction(async (tx) => {
    await tx.$executeRaw(
      Prisma.sql`SELECT id FROM "Slot" WHERE id = ${input.slotId} FOR UPDATE`
    );

    const slot = await tx.slot.findUnique({ where: { id: input.slotId } });
    if (!slot) throw new Error("SLOT_NOT_FOUND");
    if (slot.isBooked) throw new Error("SLOT_TAKEN");

    const user = await tx.user.upsert({
      where: { phone: input.phone.trim() },
      create: {
        name: input.name.trim(),
        phone: input.phone.trim(),
        email: input.email?.trim() || null,
      },
      update: {
        name: input.name.trim(),
        email: input.email?.trim() || null,
      },
    });

    const booking = await tx.booking.create({
      data: {
        userId: user.id,
        slotId: slot.id,
        mode: input.mode,
        paymentStatus: PaymentStatus.OFFLINE_PENDING,
      },
    });

    await tx.slot.update({
      where: { id: slot.id },
      data: { isBooked: true },
    });

    await tx.payment.create({
      data: {
        bookingId: booking.id,
        amountPaise,
        upiReference,
        status: "upi_submitted",
      },
    });

    return booking.id;
  });

  const booking = await prisma.booking.findUniqueOrThrow({
    where: { id: bookingId },
    include: { user: true, slot: true, payments: true },
  });

  const payment = booking.payments[0];

  await sendBookingNotifications({
    bookingId: booking.id,
    userName: booking.user.name,
    userPhone: booking.user.phone,
    mode: booking.mode,
    slotStartAt: booking.slot.startAt,
    channel: "UPI_PENDING",
  });

  return {
    booking,
    payment: {
      amount: amountPaise,
      currency: "INR" as const,
      bookingId: booking.id,
      status: payment?.status ?? "upi_submitted",
      upiReference: payment?.upiReference ?? upiReference,
    },
  };
}

export async function cancelPendingBooking(bookingId: string) {
  await prisma.$transaction(async (tx) => {
    const booking = await tx.booking.findUnique({ where: { id: bookingId } });
    if (!booking) throw new Error("BOOKING_NOT_FOUND");
    if (booking.paymentStatus === PaymentStatus.PAID) {
      throw new Error("NOT_CANCELLABLE");
    }

    await tx.booking.delete({ where: { id: bookingId } });
    await tx.slot.update({
      where: { id: booking.slotId },
      data: { isBooked: false },
    });
  });
}
