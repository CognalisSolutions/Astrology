import "dotenv/config";
import { prisma } from "../lib/prisma.js";
import { generateSlotsForDateRangeInclusive } from "../slotGenerator.js";

function parseIsoDate(s: string): Date {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d, 12, 0, 0));
}

async function main() {
  const days = Number(process.env.SEED_DAYS ?? "60");
  const from = parseIsoDate(process.env.SEED_FROM ?? new Date().toISOString().slice(0, 10));
  const to = new Date(from);
  to.setUTCDate(to.getUTCDate() + Math.max(1, days) - 1);

  const slots = generateSlotsForDateRangeInclusive(from, to);

  let created = 0;
  for (const s of slots) {
    try {
      await prisma.slot.create({
        data: {
          startAt: s.startAt,
          endAt: s.endAt,
          isBooked: false,
        },
      });
      created += 1;
    } catch {
      // unique startAt — already seeded
    }
  }

  console.log(`Seed complete: attempted ${slots.length}, created ${created} new slots.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
