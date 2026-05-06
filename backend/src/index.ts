import "dotenv/config";
import cors from "cors";
import express from "express";
import { ZodError } from "zod";
import { adminRouter } from "./routes/admin.js";
import { bookingsRouter } from "./routes/bookings.js";
import { slotsRouter } from "./routes/slots.js";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN ?? "*",
    credentials: true,
  })
);
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.use("/api/slots", slotsRouter);

app.use("/api/bookings", bookingsRouter);
app.use("/api/admin", adminRouter);

app.use(
  (
    err: unknown,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    if (err instanceof ZodError) {
      res.status(400).json({ error: "Invalid request", details: err.flatten() });
      return;
    }
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
);

const port = Number(process.env.PORT ?? 4000);
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
