"use client";

import { useEffect, useMemo, useState } from "react";
import { createBooking, fetchSlots, type SlotDto } from "@/lib/api";

const upiScannerSrc = "/UPI%20Scanner.jpeg";

function formatIstDate(d: Date): string {
  const f = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const p = f.formatToParts(d);
  const y = p.find((x) => x.type === "year")?.value ?? "";
  const m = p.find((x) => x.type === "month")?.value ?? "";
  const day = p.find((x) => x.type === "day")?.value ?? "";
  return `${y}-${m}-${day}`;
}

function formatIstTime(iso: string): string {
  return new Date(iso).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "numeric",
    minute: "2-digit",
  });
}

export function BookingSection() {
  const [selectedDate, setSelectedDate] = useState(() => formatIstDate(new Date()));
  const [slots, setSlots] = useState<SlotDto[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<SlotDto | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [mode, setMode] = useState<"ONLINE" | "OFFLINE">("ONLINE");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [upiReference, setUpiReference] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const run = async () => {
      setLoading(true);
      setError(null);
      try {
        const list = await fetchSlots(selectedDate, selectedDate);
        setSlots(list);
        setSelectedSlot(null);
      } catch {
        setSlots([]);
        setError("Unable to load slots for selected date.");
      } finally {
        setLoading(false);
      }
    };
    void run();
  }, [selectedDate]);

  const openCount = useMemo(() => slots.filter((s) => !s.isBooked).length, [slots]);

  async function handleBooking(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedSlot || selectedSlot.isBooked) return;

    setSubmitting(true);
    setError(null);
    setMessage(null);
    try {
      const bookingRes = await createBooking({
        name,
        phone,
        email: email || undefined,
        slotId: selectedSlot.id,
        mode,
        upiReference,
      });
      const slotTime = formatIstTime(bookingRes.booking.slot.startAt);
      setMessage(
        `Your appointment is reserved with Sri Sammaka Sarakka Jyothishyalayam at ${slotTime}. UPI reference ${bookingRes.payment.upiReference} has been submitted for verification.`
      );
      setSelectedSlot(null);
      setUpiReference("");
      const refreshed = await fetchSlots(selectedDate, selectedDate);
      setSlots(refreshed);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Booking failed.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="booking" className="w-full px-6 md:px-12 lg:px-20 booking-section relative overflow-hidden" style={{ padding: "3rem 0" }}>
      <h2 className="section-title" style={{ textAlign: "center" }}>Book Consultation</h2>
      <p style={{ color: "var(--muted)", marginTop: 0, textAlign: "center" }}>
        Select one date to see slots. Booked slots are shown as blocked.
      </p>

      <div className="card" style={{ marginBottom: "1rem", maxWidth: 1100, marginInline: "auto" }}>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>Choose date</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          style={{
            minHeight: "48px",
            padding: "0.75rem 2.25rem 0.75rem 1rem",
            borderRadius: 8,
            border: "2px solid rgba(201,162,39,0.4)",
            background: "rgba(26,18,40,0.9)",
            color: "var(--text)",
            fontSize: "1rem",
            fontWeight: 500,
          }}
        />
        <p style={{ marginTop: "0.75rem", color: "var(--muted)" }}>
          {loading ? "Loading slots..." : `${openCount} open slots out of ${slots.length}`}
        </p>
      </div>

      <div className="card" style={{ maxWidth: 1100, marginInline: "auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {slots.map((slot) => (
            <button
              key={slot.id}
              type="button"
              disabled={slot.isBooked}
              className="btn btn-ghost"
              onClick={() => setSelectedSlot(slot)}
              style={{
                borderColor: slot.isBooked
                  ? "rgba(196,76,76,0.6)"
                  : selectedSlot?.id === slot.id
                    ? "var(--accent)"
                    : "rgba(255,255,255,0.2)",
                color: slot.isBooked ? "#d78989" : "var(--text)",
              }}
            >
              {formatIstTime(slot.startAt)} {slot.isBooked ? "(Booked)" : ""}
            </button>
          ))}
          {!loading && slots.length === 0 ? (
            <p style={{ color: "var(--muted)" }}>No slots configured for this date.</p>
          ) : null}
        </div>
      </div>

      <form className="card" onSubmit={handleBooking} style={{ marginTop: "1rem", maxWidth: 1100, marginInline: "auto" }}>
        <h3 style={{ marginTop: 0 }}>Confirm details</h3>
        <p style={{ color: "var(--muted)" }}>
          Selected slot: {selectedSlot ? formatIstTime(selectedSlot.startAt) : "None"}
        </p>
        <p style={{ color: "var(--accent)", marginTop: "-0.25rem" }}>
          Consultation fee: Rs. 1
        </p>
        <div style={{ display: "grid", gap: "0.6rem", maxWidth: 420 }}>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            style={{
              padding: "0.55rem 0.65rem",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.2)",
              background: "#0f0a1a",
              color: "var(--text)",
            }}
          />
          <input
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            style={{
              padding: "0.55rem 0.65rem",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.2)",
              background: "#0f0a1a",
              color: "var(--text)",
            }}
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email (optional)"
            style={{
              padding: "0.55rem 0.65rem",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.2)",
              background: "#0f0a1a",
              color: "var(--text)",
            }}
          />
        </div>

        <div style={{ marginTop: "0.85rem" }}>
          <label style={{ marginRight: "1rem" }}>
            <input
              type="radio"
              name="mode"
              checked={mode === "ONLINE"}
              onChange={() => setMode("ONLINE")}
            />{" "}
            Online consultation
          </label>
          <label>
            <input
              type="radio"
              name="mode"
              checked={mode === "OFFLINE"}
              onChange={() => setMode("OFFLINE")}
            />{" "}
            Offline consultation
          </label>
        </div>

        <div style={{ marginTop: "1rem", display: "grid", gap: "0.75rem", maxWidth: 360 }}>
          <p style={{ color: "var(--muted)", margin: 0 }}>
            Scan this UPI code first, then enter the UPI transaction/reference ID to reserve your slot.
          </p>
          <img
            src={upiScannerSrc}
            alt="UPI payment scanner"
            style={{
              width: "100%",
              maxWidth: 320,
              borderRadius: 8,
              border: "1px solid rgba(201,162,39,0.35)",
              background: "#fff",
            }}
          />
          <input
            required
            value={upiReference}
            onChange={(e) => setUpiReference(e.target.value)}
            placeholder="UPI transaction/reference ID"
            style={{
              padding: "0.55rem 0.65rem",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.2)",
              background: "#0f0a1a",
              color: "var(--text)",
            }}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={!selectedSlot || selectedSlot.isBooked || submitting}
          style={{ marginTop: "1rem" }}
        >
          {submitting ? "Booking..." : "Submit payment reference and book"}
        </button>

        {message ? <p style={{ color: "var(--accent)" }}>{message}</p> : null}
        {error ? <p style={{ color: "var(--danger)" }}>{error}</p> : null}
      </form>
    </section>
  );
}
