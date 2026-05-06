import Link from "next/link";
import Image from "next/image";
import { BookingSection } from "@/components/BookingSection";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export default function PanchangPage() {
  return (
    <>


      <main className="w-full px-6 md:px-12 lg:px-20" style={{ padding: "2rem 0 3rem" }}>
        <section style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 className="section-title" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}>
            Daily Panchang
          </h1>
          <Image
            src="/readings-panchang.jpg"
            alt="Panchang"
            width={520}
            height={520}
            style={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              margin: "1.5rem auto",
              border: "3px solid rgba(201,162,39,0.4)",
              objectFit: "cover",
            }}
          />
          <p style={{ color: "var(--muted)", maxWidth: "64ch", margin: "0 auto", fontSize: "1.15rem", lineHeight: 1.7 }}>
            Hindu calendar with tithi, nakshatra, yoga, karana, sunrise/sunset, and auspicious timings for today. Essential for muhurta selection.
          </p>
        </section>

        <section className="card" style={{ maxWidth: "70ch", margin: "0 auto 2rem" }}>
Today&apos;s Panchang (Sample - IST)

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginTop: "1rem" }}>
            <div>
              <h3 style={{ color: "var(--text)", marginBottom: "0.25rem", fontSize: "1rem" }}>Tithi</h3>
              <p style={{ color: "var(--muted)" }}>Shukla Panchami (till 3:45 PM)</p>
            </div>
            <div>
              <h3 style={{ color: "var(--text)", marginBottom: "0.25rem", fontSize: "1rem" }}>Nakshatra</h3>
              <p style={{ color: "var(--muted)" }}>Uttara Phalguni (till 9:22 PM)</p>
            </div>
            <div>
              <h3 style={{ color: "var(--text)", marginBottom: "0.25rem", fontSize: "1rem" }}>Yoga</h3>
              <p style={{ color: "var(--muted)" }}>Siddhi (till 2:18 PM)</p>
            </div>
            <div>
              <h3 style={{ color: "var(--text)", marginBottom: "0.25rem", fontSize: "1rem" }}>Karana</h3>
              <p style={{ color: "var(--muted)" }}>Bava (till 3:45 PM)</p>
            </div>
          </div>
        </section>

        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", margin: "2rem 0" }}>
          <div className="card">
            <h3 style={{ color: "var(--accent)", marginBottom: "1rem" }}>Sunrise & Sunset</h3>
            <ul style={{ color: "var(--muted)" }}>
              <li>Sunrise: 5:58 AM</li>
              <li>Sunset: 6:42 PM</li>
              <li>Moonrise: 10:15 AM</li>
              <li>Moonset: 11:48 PM</li>
            </ul>
          </div>
          <div className="card">
            <h3 style={{ color: "var(--accent)", marginBottom: "1rem" }}>Rahukalam & Yama</h3>
            <ul style={{ color: "var(--muted)" }}>
              <li>Rahukalam: 12:00-1:30 PM (avoid)</li>
              <li>Yamaganda: 7:30-9:00 AM (avoid)</li>
              <li>Gulikai: 10:30 AM-12:00 PM (avoid)</li>
            </ul>
          </div>
        </section>

        <section className="card" style={{ maxWidth: "70ch", margin: "0 auto 2rem" }}>
          <h2 style={{ color: "var(--accent)", marginBottom: "1rem" }}>Auspicious Timings (Muhurta)</h2>
          <ul style={{ color: "var(--muted)", lineHeight: 1.7 }}>
            <li>✓ <strong>Abhijit Muhurta:</strong> 11:58 AM - 12:48 PM (all work)</li>
            <li>✓ <strong>Amrita Kalam:</strong> 7:45-9:15 AM, 3:30-4:45 PM</li>
            <li>✓ <strong>Brahma Muhurta:</strong> 4:30-5:15 AM (spiritual)</li>
            <li>✗ <strong>Ratri Sandhya:</strong> Avoid after sunset for travel</li>
          </ul>
        </section>

        <section className="card" style={{ maxWidth: "70ch", margin: "0 auto 2rem" }}>
          <h2 style={{ color: "var(--accent)", marginBottom: "1rem" }}>Panchang Elements Explained</h2>
          <ul style={{ color: "var(--muted)", lineHeight: 1.65 }}>
            <li><strong>Tithi:</strong> Lunar day (15 waxing, 15 waning) - affects mood/energy</li>
            <li><strong>Nakshatra:</strong> 27 lunar mansions - rules specific activities</li>
            <li><strong>Yoga:</strong> 27 Sun-Moon combos - auspicious/inauspicious</li>
            <li><strong>Karana:</strong> Half-tithi - movement/action timing</li>
            <li><strong>Wara:</strong> Weekday lord + lunar influence</li>
          </ul>
          <p style={{ fontSize: "0.9rem", color: "var(--muted)", marginTop: "1rem" }}>
            *Daily panchang varies by location. Use for IST Hyderabad approx.
          </p>
        </section>

        <div style={{ textAlign: "center", margin: "3rem 0" }}>
          <p style={{ color: "var(--muted)", maxWidth: "60ch", margin: "0 auto 2rem", fontSize: "1.1rem" }}>
            For personalized muhurta selection, electional astrology, and festival timings —{" "}
            <Link href="/book" style={{ color: "var(--accent)" }}>consult now</Link>.
          </p>
          <Link href="/book" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2rem" }}>
            Book Muhurta Consultation
          </Link>
        </div>
      </main>

      <BookingSection />
      <WhatsAppFab />
    </>
  );
}

