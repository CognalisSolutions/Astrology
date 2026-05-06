import Link from "next/link";
import Image from "next/image";
import { BookingSection } from "@/components/BookingSection";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export default function LovePage() {
  return (
    <>


      <main className="w-full px-6 md:px-12 lg:px-20" style={{ padding: "2rem 0 3rem" }}>
        <section style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 className="section-title" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}>
            Love & Relationships
          </h1>
          <Image
            src="/readings-love.jpg"
            alt="Love Readings"
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
            Astrological insights into romance, marriage timing, compatibility, and relationship harmony. Understand Venus, 5th/7th houses, and dasha periods.
          </p>
        </section>

        <section className="card" style={{ maxWidth: "70ch", margin: "0 auto 2rem" }}>
          <h2 style={{ color: "var(--accent)", marginBottom: "1rem" }}>Love Astrology Basics</h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.65, marginBottom: "1rem" }}>
            Your 5th house shows romance, 7th house marriage, Venus love nature. Current dasha + transits time romantic events.
          </p>
          <ul style={{ color: "var(--muted)", lineHeight: 1.7 }}>
            <li>✓ <strong>Venus strength:</strong> Karaka of love - exalted in Pisces, debilitated Virgo</li>
            <li>✓ <strong>5th Lord:</strong> Romance, children, creative expression</li>
            <li>✓ <strong>7th Lord:</strong> Spouse nature, marriage timing, partnerships</li>
            <li>✓ <strong>Darakaraka:</strong> Planet with lowest degree = spouse indicator</li>
            <li>✓ <strong>Navamsha (D9):</strong> Marriage chart reveals deeper compatibility</li>
          </ul>
        </section>

        <section style={{ textAlign: "center", margin: "3rem 0" }}>
          <div className="card" style={{ maxWidth: "none", padding: "2rem" }}>
            <h2 style={{ color: "var(--accent)", marginBottom: "1rem" }}>Current Love Transits</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem", marginTop: "1.5rem" }}>
              <div>
                <h3 style={{ color: "var(--text)" }}>Venus in Gemini</h3>
                <p style={{ color: "var(--muted)" }}>Communication key in romance till mid-June. Flirtatious energy.</p>
              </div>
              <div>
                <h3 style={{ color: "var(--text)" }}>Jupiter Taurus 7th</h3>
                <p style={{ color: "var(--muted)" }}>Marriage expansion for Libra/Scorpio ascendants.</p>
              </div>
              <div>
                <h3 style={{ color: "var(--text)" }}>Mars Libra 1st</h3>
                <p style={{ color: "var(--muted)" }}>Aries relationships passionate but argumentative.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="card" style={{ maxWidth: "68ch", margin: "0 auto 2rem" }}>
          <h2 style={{ color: "var(--accent)" }}>Relationship Challenges & Solutions</h2>
          <ul style={{ color: "var(--muted)", lineHeight: 1.65 }}>
            <li><strong>Manglik Dosha:</strong> Mars in 1/4/7/8/12 - remedies before marriage</li>
            <li><strong>Venus-Rahu:</strong> Unusual attractions, multiple relationships</li>
            <li><strong>Saturn 7th:</strong> Delayed marriage, older/mature spouse</li>
            <li><strong>7th afflicted:</strong> Multiple marriages or separation risk</li>
            <li><strong>Ketu Venus:</strong> Spiritual connections, detachment in love</li>
          </ul>
          <p style={{ marginTop: "1rem", color: "var(--muted)" }}>
Compatibility {'>30 guna'} + D9 harmony essential for lasting marriage.
          </p>
        </section>

        <div style={{ textAlign: "center", margin: "3rem 0" }}>
          <p style={{ color: "var(--muted)", maxWidth: "60ch", margin: "0 auto 2rem", fontSize: "1.1rem" }}>
            Get precise marriage timing, compatibility analysis, and relationship remedies —{" "}
            <Link href="/book" style={{ color: "var(--accent)" }}>book a detailed reading</Link>.
          </p>
          <Link href="/book" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2rem" }}>
            Love Consultation
          </Link>
        </div>
      </main>

      <BookingSection />
      <WhatsAppFab />
    </>
  );
}

