"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { WhatsAppFab } from "@/components/WhatsAppFab";
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
  const y = p.find((x) => x.type === "year")!.value;
  const m = p.find((x) => x.type === "month")!.value;
  const day = p.find((x) => x.type === "day")!.value;
  return `${y}-${m}-${day}`;
}

function formatIstDateTime(iso: string): string {
  return new Date(iso).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function BookPage() {
  const [from, setFrom] = useState(() => formatIstDate(new Date()));
  const [to, setTo] = useState(() => {
    const x = new Date();
    x.setDate(x.getDate() + 14);
    return formatIstDate(x);
  });
  const [slots, setSlots] = useState<SlotDto[]>([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [selected, setSelected] = useState<SlotDto | null>(null);
  const [mode, setMode] = useState<"ONLINE" | "OFFLINE">("ONLINE");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [upiReference, setUpiReference] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [doneMsg, setDoneMsg] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setErr(null);
    try {
      const list = await fetchSlots(from, to);
      setSlots(list.filter((s) => !s.isBooked));
    } catch {
      setErr("Could not load slots. Is the API running?");
      setSlots([]);
    } finally {
      setLoading(false);
    }
  }, [from, to]);

  useEffect(() => {
    void load();
  }, [load]);

  const byDay = useMemo(() => {
    const m = new Map<string, SlotDto[]>();
    for (const s of slots) {
      const day = formatIstDate(new Date(s.startAt));
      const arr = m.get(day) ?? [];
      arr.push(s);
      m.set(day, arr);
    }
    for (const arr of m.values()) {
      arr.sort((a, b) => a.startAt.localeCompare(b.startAt));
    }
    return m;
  }, [slots]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selected) return;
    setSubmitting(true);
    setErr(null);
    setDoneMsg(null);
    try {
      const res = await createBooking({
        name,
        phone,
        email: email || undefined,
        slotId: selected.id,
        mode,
        upiReference,
      });
      setDoneMsg(
        `Your appointment is reserved with Sri Sammaka Sarakka Jyothishyalayam at ${formatIstDateTime(res.booking.slot.startAt)}. UPI reference ${res.payment.upiReference} has been submitted for verification.`
      );
      setSelected(null);
      setUpiReference("");
      await load();
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  const wa = process.env.NEXT_PUBLIC_WHATSAPP ?? "6303896121";

  return (
    <>
      <main className="w-full px-6 md:px-12 lg:px-20" style={{ padding: "2rem 0 3rem" }}>
        <h1 className="section-title">Book a consultation</h1>
        <p style={{ color: "var(--muted)", maxWidth: "62ch" }}>
          Each slot is 45 minutes of consultation plus a fixed 15-minute break
          before the next seeker - online and offline share the same calendar, so
          overlaps are never allowed.
        </p>

        <div
          className="card"
          style={{
            marginTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            alignItems: "flex-end",
          }}
        >
          <label>
            <span style={{ display: "block", fontSize: "0.85rem", color: "var(--muted)" }}>
              From (IST date)
            </span>
            <input
              type="date"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              style={{
                marginTop: 4,
                minHeight: "48px",
                padding: "0.75rem 1rem",
                borderRadius: 12,
                border: "2px solid rgba(201,162,39,0.4)",
                background: "rgba(26,18,40,0.9)",
                color: "var(--text)",
                fontSize: "1rem",
                fontWeight: 500,
              }}
            />
          </label>
          <label>
            <span style={{ display: "block", fontSize: "0.85rem", color: "var(--muted)" }}>
              To (IST date)
            </span>
            <input
              type="date"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              style={{
                marginTop: 4,
                minHeight: "48px",
                padding: "0.75rem 1rem",
                borderRadius: 12,
                border: "2px solid rgba(201,162,39,0.4)",
                background: "rgba(26,18,40,0.9)",
                color: "var(--text)",
                fontSize: "1rem",
                fontWeight: 500,
              }}
            />
          </label>
          <button type="button" className="btn btn-ghost" onClick={() => void load()} disabled={loading}>
            {loading ? "Loading..." : "Refresh slots"}
          </button>
        </div>

        {err && (
          <p style={{ color: "var(--danger)", marginTop: "1rem" }} role="alert">
            {err}
          </p>
        )}
        {doneMsg && (
          <p style={{ color: "var(--accent)", marginTop: "1rem" }} role="status">
            {doneMsg}{" "}
            <a href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer">
              Message on WhatsApp
            </a>
          </p>
        )}

        <div style={{ marginTop: "1.75rem" }}>
          {Array.from(byDay.entries()).map(([day, list]) => (
            <section key={day} style={{ marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.1rem", color: "var(--accent)", marginBottom: "0.5rem" }}>
                {day}
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {list.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    className="btn btn-ghost"
                    style={{
                      borderColor:
                        selected?.id === s.id
                          ? "var(--accent)"
                          : "rgba(255,255,255,0.2)",
                    }}
                    onClick={() => setSelected(s)}
                  >
                    {formatIstDateTime(s.startAt)}
                  </button>
                ))}
              </div>
            </section>
          ))}
          {!loading && slots.length === 0 && !err && (
            <p style={{ color: "var(--muted)" }}>
              No open slots in this range. Try widening the dates or run the
              backend seed script.
            </p>
          )}
        </div>

        <form className="card" style={{ marginTop: "2rem" }} onSubmit={onSubmit}>
          <h2 style={{ marginTop: 0, color: "var(--accent)" }}>Your details</h2>
          <p style={{ color: "var(--muted)", marginTop: 0 }}>
            Selected:{" "}
            {selected ? formatIstDateTime(selected.startAt) : "Choose a slot above"}
          </p>
          <p style={{ color: "var(--accent)", marginTop: "-0.25rem" }}>
            Consultation fee: Rs. 1
          </p>

          <div style={{ display: "grid", gap: "0.75rem", maxWidth: 420 }}>
            <label>
              <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>Name</span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  display: "block",
                  width: "100%",
                  marginTop: 4,
                  padding: "0.55rem 0.65rem",
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "#0f0a1a",
                  color: "var(--text)",
                }}
              />
            </label>
            <label>
              <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>Phone</span>
              <input
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  display: "block",
                  width: "100%",
                  marginTop: 4,
                  padding: "0.55rem 0.65rem",
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "#0f0a1a",
                  color: "var(--text)",
                }}
              />
            </label>
            <label>
              <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>Email (optional)</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  display: "block",
                  width: "100%",
                  marginTop: 4,
                  padding: "0.55rem 0.65rem",
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "#0f0a1a",
                  color: "var(--text)",
                }}
              />
            </label>
          </div>

          <fieldset style={{ border: "none", padding: 0, margin: "1rem 0" }}>
            <legend style={{ color: "var(--muted)", marginBottom: "0.35rem" }}>
              Mode
            </legend>
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
          </fieldset>

          <div style={{ margin: "1rem 0", display: "grid", gap: "0.75rem", maxWidth: 360 }}>
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
            <label>
              <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
                UPI transaction/reference ID
              </span>
              <input
                required
                value={upiReference}
                onChange={(e) => setUpiReference(e.target.value)}
                style={{
                  display: "block",
                  width: "100%",
                  marginTop: 4,
                  padding: "0.55rem 0.65rem",
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "#0f0a1a",
                  color: "var(--text)",
                }}
              />
            </label>
          </div>

          <button className="btn btn-primary" type="submit" disabled={!selected || submitting}>
            {submitting ? "Booking..." : "Submit payment reference and book"}
          </button>
        </form>
      </main>
      <WhatsAppFab />
    </>
  );
}
