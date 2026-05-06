import {
  BUSINESS_TIMEZONE,
  SLOT_BLOCK_MINUTES,
  getWindowForDate,
} from "./schedule.js";

const IST_OFFSET_MINUTES = 5 * 60 + 30;

/**
 * Convert a civil calendar date in Asia/Kolkata and minutes-from-local-midnight
 * to a UTC Date (Postgres timestamptz).
 */
export function istLocalMinutesToUtc(
  year: number,
  month: number,
  day: number,
  minutesFromMidnight: number
): Date {
  const baseUtcMs =
    Date.UTC(year, month - 1, day, 0, 0, 0) - IST_OFFSET_MINUTES * 60_000;
  return new Date(baseUtcMs + minutesFromMidnight * 60_000);
}

function calendarPartsInIST(d: Date): { y: number; m: number; d: number } {
  const fmt = new Intl.DateTimeFormat("en-CA", {
    timeZone: BUSINESS_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const parts = fmt.formatToParts(d);
  const num = (t: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((p) => p.type === t)?.value ?? 0);
  return { y: num("year"), m: num("month"), d: num("day") };
}

export interface GeneratedSlot {
  startAt: Date;
  endAt: Date;
}

/**
 * Build non-overlapping 60-minute slots for one calendar day in BUSINESS_TIMEZONE.
 */
export function generateSlotsForDay(
  year: number,
  month: number,
  day: number
): GeneratedSlot[] {
  const anchor = istLocalMinutesToUtc(year, month, day, 12 * 60);
  const window = getWindowForDate(anchor, BUSINESS_TIMEZONE);
  if (!window) return [];

  const blockMs = SLOT_BLOCK_MINUTES * 60_000;
  const slots: GeneratedSlot[] = [];

  let m = window.openMinutes;
  while (m + SLOT_BLOCK_MINUTES <= window.closeMinutes) {
    const startAt = istLocalMinutesToUtc(year, month, day, m);
    const endAt = new Date(startAt.getTime() + blockMs);
    slots.push({ startAt, endAt });
    m += SLOT_BLOCK_MINUTES;
  }

  return slots;
}

export function generateSlotsForDateRangeInclusive(
  from: Date,
  to: Date
): GeneratedSlot[] {
  const all: GeneratedSlot[] = [];
  const p0 = calendarPartsInIST(from);
  const p1 = calendarPartsInIST(to);
  let t = istLocalMinutesToUtc(p0.y, p0.m, p0.d, 0);
  const endDay = istLocalMinutesToUtc(p1.y, p1.m, p1.d, 0);

  while (t.getTime() <= endDay.getTime()) {
    const { y, m, d } = calendarPartsInIST(t);
    all.push(...generateSlotsForDay(y, m, d));
    t = new Date(t.getTime() + 24 * 60 * 60 * 1000);
  }

  return all;
}
