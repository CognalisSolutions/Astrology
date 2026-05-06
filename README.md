# Sri Sammaka Sarakka Jyothisyalayam - Booking Platform

Full-stack astrology booking: **Next.js** (frontend), **Express** (API), **PostgreSQL** + **Prisma** (data), and a manual **UPI scanner** payment flow.

## Prerequisites

- Node.js 20+
- PostgreSQL database (local, [Neon](https://neon.tech), or [Supabase](https://supabase.com))

## 1. Database & backend

```bash
cd backend
cp .env.example .env
# Edit .env - set DATABASE_URL, optional ADMIN_API_KEY, optional CONSULTATION_AMOUNT_PAISE
npm install
npx prisma generate
npx prisma db push
npm run slots:seed
npm run dev
```

API runs at `http://localhost:4000`.

- `GET /health` - health check
- `GET /api/slots?from=YYYY-MM-DD&to=YYYY-MM-DD` - available slots (IST calendar days)
- `POST /api/bookings` - create booking (body: `name`, `phone`, `email?`, `slotId`, `mode`: `ONLINE` | `OFFLINE`)
- `GET /api/admin/bookings` - list bookings (header `x-admin-key: <ADMIN_API_KEY>`)
- `POST /api/admin/bookings/:id/cancel-pending` - cancel a booking that has not been marked paid

### Slot rules

- **60-minute blocks**: 45 minutes consultation + **15 minutes fixed break**
- **Weekly hours** (Asia/Kolkata) are defined in `backend/src/schedule.ts`
- **Online and offline** share the same `Slot` rows - `isBooked` prevents double booking
- Booking uses a **transaction** and `SELECT ... FOR UPDATE` on the slot row

### Seed more days

```bash
cd backend
set SEED_DAYS=90
set SEED_FROM=2026-04-01
npm run slots:seed
```

(On Unix: `SEED_DAYS=90 SEED_FROM=2026-04-01 npm run slots:seed`.)

## 2. Frontend

```bash
cd frontend
cp .env.example .env.local
# NEXT_PUBLIC_API_URL=http://localhost:4000
npm install
npm run dev
```

Site runs at `http://localhost:3000`.

## 3. UPI payment

The frontend displays `frontend/public/UPI Scanner.jpeg` in the payment section.
Set `CONSULTATION_AMOUNT_PAISE` in `backend/.env` for the booking amount (amount in **paise**, e.g. `50000` = Rs. 500). Bookings are reserved with `OFFLINE_PENDING` payment status after the user submits the form.

## 4. Deployment (summary)

- **Frontend**: Vercel - set `NEXT_PUBLIC_API_URL` to your public API URL.
- **Backend**: Railway or Render - set the same env vars as `backend/.env`.
- **Database**: Supabase or Neon - paste connection string into `DATABASE_URL`.

## Optional: Redis

Not wired in this repo. You can add a short-lived lock key before booking submission using Redis; the database transaction + `isBooked` already prevents double booking once a row is committed.
