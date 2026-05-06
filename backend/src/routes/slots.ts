import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";
import { istLocalMinutesToUtc } from "../slotGenerator.js";

export const slotsRouter = Router();

const querySchema = z.object({
  from: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  to: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});

slotsRouter.get("/", async (req, res, next) => {
  try {
    const q = querySchema.parse(req.query);
    const [fy, fm, fd] = q.from.split("-").map(Number);
    const [ty, tm, td] = q.to.split("-").map(Number);
    const from = istLocalMinutesToUtc(fy, fm, fd, 0);
    const endExclusive = new Date(
      istLocalMinutesToUtc(ty, tm, td, 0).getTime() + 24 * 60 * 60 * 1000
    );

    const rows = await prisma.slot.findMany({
      where: {
        startAt: { gte: from, lt: endExclusive },
      },
      orderBy: { startAt: "asc" },
      select: {
        id: true,
        startAt: true,
        endAt: true,
        isBooked: true,
      },
    });

    res.json({ slots: rows });
  } catch (e) {
    next(e);
  }
});
