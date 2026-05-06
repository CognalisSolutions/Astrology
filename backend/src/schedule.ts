/**
 * Weekly opening hours (local business timezone).
 * Slot cadence: 60 minutes per block (45 min consultation + 15 min fixed break).
 * Times are minutes from midnight [0, 1440).
 */

export const BUSINESS_TIMEZONE = "Asia/Kolkata";

/** 0 = Sunday … 6 = Saturday */
export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface DayWindow {
  openMinutes: number;
  closeMinutes: number;
}

const M = (h: number, m: number) => h * 60 + m;

/** Closing time is exclusive upper bound for slot end: last slot satisfies start + 60 <= closeMinutes */
export const WEEKLY_SCHEDULE: Record<Weekday, DayWindow> = {
  0: { openMinutes: M(9, 0), closeMinutes: M(21, 0) },
  1: { openMinutes: M(9, 30), closeMinutes: M(21, 0) },
  2: { openMinutes: M(9, 0), closeMinutes: M(21, 0) },
  3: { openMinutes: M(9, 0), closeMinutes: M(21, 30) },
  4: { openMinutes: M(9, 0), closeMinutes: M(21, 30) },
  5: { openMinutes: M(9, 0), closeMinutes: M(21, 30) },
  6: { openMinutes: M(9, 0), closeMinutes: M(21, 0) },
};

export const SLOT_BLOCK_MINUTES = 60;
export const CONSULTATION_MINUTES = 45;
export const BREAK_MINUTES = 15;

export function weekdayInTimezone(d: Date, timeZone: string): Weekday {
  const wd = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    timeZone,
  }).formatToParts(d).find((p) => p.type === "weekday")?.value;

  const map: Record<string, Weekday> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };
  const w = map[wd ?? "Sun"];
  if (w === undefined) return 0;
  return w;
}

export function getWindowForDate(d: Date, timeZone: string): DayWindow | null {
  const w = weekdayInTimezone(d, timeZone);
  return WEEKLY_SCHEDULE[w];
}
