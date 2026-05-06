import Link from "next/link";
import Image from "next/image";
import { BookingSection } from "@/components/BookingSection";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export default function TarotReadingPage() {
  return (
    <>
      <header
        style={{
          background: "#1a1228",
          borderBottom: "1px solid rgba(201,162,39,0.4)",
        }}
      >
        <div
          className="w-full px-6 md:px-12 lg:px-20"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem 0",
          }}
        >
          <Link href="/" style={{ color: "var(--text)" }}>
            ← Home
          </Link>
        </div>
      </header>

      <main className="w-full px-6 md:px-12 lg:px-20" style={{ padding: "2rem 0 3rem" }}>
        <section style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 className="section-title" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}>
            Tarot Readings
          </h1>
          <Image
            src="/readings-tarot.jpg"
            alt="Tarot Cards"
            width={520}
            height={520}
            style={{
              width: 220,
              height: 220,
              borderRadius: "20px",
              margin: "1.5rem auto",
              border: "4px solid rgba(201,162,39,0.4)",
              objectFit: "cover",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
          />
          <p style={{ color: "var(--muted)", maxWidth: "64ch", margin: "0 auto", fontSize: "1.15rem", lineHeight: 1.7 }}>
            Ancient divination using 78 cards for guidance on love, career, spirituality. Complements Vedic astrology for timing and practical insights.
          </p>
        </section>

        <section className="card" style={{ maxWidth: "70ch", margin: "0 auto 2rem" }}>
          <h2 style={{ color: "var(--accent)", marginBottom: "1rem" }}>Tarot Structure</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            <div>
              <h3 style={{ color: "var(--text)", marginBottom: "0.75rem" }}>Major Arcana (22)</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>Life lessons, karma, spiritual evolution. The Fool journey to World completion.</p>
            </div>
            <div>
              <h3 style={{ color: "var(--text)", marginBottom: "0.75rem" }}>Minor Arcana (56)</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>Daily situations: Wands(fire/action), Cups(water/emotion), Swords(air/thinking), Pentacles(earth/material).</p>
            </div>
          </div>
        </section>

        <section style={{ textAlign: "center", margin: "3rem 0" }}>
          <div className="card" style={{ padding: "2.5rem", maxWidth: "none" }}>
            <h2 style={{ color: "var(--accent)" }}>Sample 3-Card Spread</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", marginTop: "2rem" }}>
              <div>
                <h4 style={{ marginBottom: "0.5rem", color: "var(--text)" }}>Past: Tower</h4>
                <p style={{ color: "var(--muted)" }}>Sudden change/upheaval cleared old structures.</p>
              </div>
              <div>
                <h4 style={{ marginBottom: "0.5rem", color: "var(--text)" }}>Present: Lovers</h4>
                <p style={{ color: "var(--muted)" }}>Relationship choices, harmony, values alignment.</p>
              </div>
              <div>
                <h4 style={{ marginBottom: "0.5rem", color: "var(--text)" }}>Future: Star</h4>
                <p style={{ color: "var(--muted)" }}>Hope, inspiration, spiritual guidance ahead.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="card" style={{ maxWidth: "68ch", margin: "0 auto 2rem" }}>
          <h2 style={{ color: "var(--accent)", marginBottom: "1rem" }}>Tarot + Astrology Synergy</h2>
          <ul style={{ color: "var(--muted)", lineHeight: 1.65 }}>
            <li>✓ Tarot timing + natal dasha predictions</li>
            <li>✓ Card symbolism reveals planetary activations</li>
            <li>✓ Past life karma shown in Major Arcana</li>
            <li>✓ Career cards + 10th house analysis</li>
            <li>✓ Relationship spreads + Venus/7th house</li>
            <li>✓ Weekly/monthly guidance complementing transits</li>
          </ul>
        </section>

        <section className="card" style={{ maxWidth: "68ch", margin: "0 auto 2rem" }}>
          <h2 style={{ color: "var(--accent)" }}>Popular Tarot Spreads</h2>
          <ul style={{ color: "var(--muted)", lineHeight: 1.65 }}>
            <li><strong>3-Card:</strong> Past/Present/Future - daily guidance</li>
            <li><strong>Celtic Cross:</strong> 10 cards - comprehensive situation analysis</li>
            <li><strong>Relationship:</strong> 7 cards - partner compatibility/dynamics</li>
            <li><strong>Yes/No:</strong> One card - quick confirmation</li>
            <li><strong>Year Ahead:</strong> 12 cards - monthly forecast</li>
          </ul>
        </section>

        <div style={{ textAlign: "center", margin: "3rem 0" }}>
          <p style={{ color: "var(--muted)", maxWidth: "60ch", margin: "0 auto 2rem", fontSize: "1.1rem" }}>
            Receive intuitive tarot guidance combined with your astrological chart —{" "}
            <Link href="/book" style={{ color: "var(--accent)" }}>book a reading session</Link>.
          </p>
          <Link href="/book" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2rem" }}>
            Book Tarot + Astrology
          </Link>
        </div>
      </main>

      <BookingSection />
      <WhatsAppFab />
    </>
  );
}

