import { Router } from "express";
import { ConsultationMode } from "@prisma/client";
import { Prisma } from "@prisma/client";
import { z } from "zod";
import {
  cancelPendingBooking,
  createBookingWithUpiPayment,
} from "../bookingService.js";

export const bookingsRouter = Router();

const createSchema = z.object({
  name: z.string().min(2).max(120),
  phone: z.string().min(8).max(20),
  email: z.string().email().optional().or(z.literal("")),
  slotId: z.string().min(1),
  mode: z.enum(["ONLINE", "OFFLINE"]),
  upiReference: z.string().trim().min(6).max(80),
});

bookingsRouter.post("/", async (req, res, next) => {
  try {
    const body = createSchema.parse(req.body);
    const mode =
      body.mode === "ONLINE" ? ConsultationMode.ONLINE : ConsultationMode.OFFLINE;

    const result = await createBookingWithUpiPayment({
      name: body.name,
      phone: body.phone,
      email: body.email || undefined,
      slotId: body.slotId,
      mode,
      upiReference: body.upiReference,
    });

    res.status(201).json({
      booking: {
        id: result.booking.id,
        mode: result.booking.mode,
        paymentStatus: result.booking.paymentStatus,
        slot: result.booking.slot,
      },
      payment: result.payment,
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "ERROR";
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002") {
      res.status(409).json({ error: "Slot is no longer available." });
      return;
    }
    if (msg === "SLOT_TAKEN") {
      res.status(409).json({ error: "Slot is no longer available." });
      return;
    }
    if (msg === "SLOT_NOT_FOUND") {
      res.status(404).json({ error: "Slot not found." });
      return;
    }
    next(e);
  }
});

bookingsRouter.post("/:id/cancel-pending", async (req, res, next) => {
  try {
    await cancelPendingBooking(req.params.id);
    res.json({ ok: true });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "ERROR";
    if (msg === "BOOKING_NOT_FOUND") {
      res.status(404).json({ error: "Booking not found." });
      return;
    }
    if (msg === "NOT_CANCELLABLE") {
      res.status(400).json({ error: "Booking cannot be cancelled." });
      return;
    }
    next(e);
  }
});
