import { Router } from "express";
import { prisma } from "../lib/prisma.js";
import { cancelPendingBooking } from "../bookingService.js";

export const adminRouter = Router();

function requireAdmin(req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) {
  const key = process.env.ADMIN_API_KEY;
  if (!key) {
    res.status(503).json({ error: "Admin API not configured." });
    return;
  }
  if (req.header("x-admin-key") !== key) {
    res.status(401).json({ error: "Unauthorized." });
    return;
  }
  next();
}

adminRouter.use(requireAdmin);

adminRouter.get("/bookings", async (_req, res, next) => {
  try {
    const bookings = await prisma.booking.findMany({
      orderBy: { createdAt: "desc" },
      take: 200,
      include: {
        user: true,
        slot: true,
        payments: true,
      },
    });
    res.json({ bookings });
  } catch (e) {
    next(e);
  }
});

adminRouter.post("/bookings/:id/cancel-pending", async (req, res, next) => {
  try {
    await cancelPendingBooking(req.params.id);
    res.json({ ok: true });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "ERROR";
    if (msg === "BOOKING_NOT_FOUND") {
      res.status(404).json({ error: "Not found." });
      return;
    }
    if (msg === "NOT_CANCELLABLE") {
      res.status(400).json({ error: "Only PENDING online bookings can be cancelled this way." });
      return;
    }
    next(e);
  }
});
