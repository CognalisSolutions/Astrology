const base = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

export type SlotDto = {
  id: string;
  startAt: string;
  endAt: string;
  isBooked: boolean;
};

export async function fetchSlots(from: string, to: string) {
  const u = new URL("/api/slots", base);
  u.searchParams.set("from", from);
  u.searchParams.set("to", to);
  const r = await fetch(u.toString(), { next: { revalidate: 0 } });
  if (!r.ok) throw new Error("Failed to load slots");
  const j = (await r.json()) as { slots: SlotDto[] };
  return j.slots;
}

export async function createBooking(body: {
  name: string;
  phone: string;
  email?: string;
  slotId: string;
  mode: "ONLINE" | "OFFLINE";
  upiReference: string;
}) {
  const r = await fetch(`${base}/api/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const j = await r.json();
  if (!r.ok) throw new Error(j.error ?? "Booking failed");
  return j as {
    booking: {
      id: string;
      mode: string;
      paymentStatus: string;
      slot: SlotDto;
    };
    payment: {
      amount: number;
      currency: string;
      bookingId: string;
      status: string;
      upiReference: string;
    };
  };
}

export async function cancelPendingBooking(bookingId: string) {
  const r = await fetch(`${base}/api/bookings/${bookingId}/cancel-pending`, {
    method: "POST",
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(j.error ?? "Cancel failed");
  return j as { ok: true };
}
