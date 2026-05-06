import Link from "next/link";
import Image from "next/image";
import { BookingSection } from "@/components/BookingSection";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export default function PlanetTransitsPage() {
  return (
    <>


      <main className="w-full px-6 md:px-12 lg:px-20" style={{ padding: "2rem 0 3rem" }}>
        <section style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 className="section-title" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}>
            Planet Transits
          </h1>
          <Image
            src="/readings-planet-transits.jpg"
            alt="Planet Transits"
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
            Current planetary movements and their effects on zodiac signs. Understand the cosmic influences shaping daily life, career, relationships, and spiritual growth.
          </p>
        </section>

        <section className="card" style={{ maxWidth: "70ch", margin: "0 auto 2rem" }}>
          <h2 style={{ color: "var(--accent)", marginBottom: "1rem" }}>What are Planet Transits?</h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>
            Planets constantly move through zodiac signs, creating temporary influences called transits. Unlike fixed birth chart positions, transits show current cosmic energies affecting everyone differently based on their natal chart.
          </p>
          <ul style={{ color: "var(--muted)", lineHeight: 1.7, marginTop: "1rem" }}>
            <li>✓ Saturn transit: Discipline, karma, long-term changes (2.5 years per sign)</li>
            <li>✓ Jupiter transit: Growth, wisdom, opportunities (1 year per sign)</li>
            <li>✓ Rahu-Ketu: Sudden changes, spirituality, karmic lessons (18 months)</li>
            <li>✓ Mars transit: Energy, action, conflicts (45 days)</li>
            <li>✓ Mercury/Venus: Communication, relationships (3-4 weeks)</li>
          </ul>
        </section>

        <section style={{ textAlign: "center", margin: "3rem 0" }}>
          <div className="card" style={{ maxWidth: "none", padding: "2rem" }}>
            <h2 style={{ color: "var(--accent)", marginBottom: "1rem" }}>Current Major Transits</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginTop: "1.5rem" }}>
              <div>
                <h3 style={{ color: "var(--text)", marginBottom: "0.5rem" }}>Saturn in Aquarius</h3>
                <p style={{ color: "var(--muted)" }}>Till 2025: Focus on innovation, social reform. Challenges authority structures.</p>
              </div>
              <div>
                <h3 style={{ color: "var(--text)", marginBottom: "0.5rem" }}>Jupiter in Taurus</h3>
                <p style={{ color: "var(--muted)" }}>Till May 2025: Financial growth, family stability, material blessings.</p>
              </div>
              <div>
                <h3 style={{ color: "var(--text)", marginBottom: "0.5rem" }}>Rahu in Pisces</h3>
                <p style={{ color: "var(--muted)" }}>Till 2025: Spiritual quests, foreign opportunities, illusion challenges.</p>
              </div>
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--muted)", marginTop: "1.5rem" }}>
              *Sample general transits. Your natal chart shows personalized impact.
            </p>
          </div>
        </section>

        <section className="card" style={{ maxWidth: "68ch", margin: "0 auto 2rem" }}>
          <h2 style={{ color: "var(--accent)" }}>Transit Effects by Zodiac Sign</h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.65, marginBottom: "1rem" }}>
            Current Saturn-Jupiter opposition affects career-family balance for most signs:
          </p>
          <ul style={{ color: "var(--muted)" }}>
            <li><strong>Aries:</strong> Career push, avoid impulsiveness</li>
            <li><strong>Taurus:</strong> Financial caution, spiritual growth</li>
            <li><strong>Gemini:</strong> Communication hurdles, relationship tests</li>
            {/* Continue pattern for all 12 signs in production */}
            <li><strong>Pisces:</strong> Intuition strong, watch deception</li>
          </ul>
        </section>

        <div style={{ textAlign: "center", margin: "3rem 0" }}>
          <p style={{ color: "var(--muted)", maxWidth: "60ch", margin: "0 auto 2rem", fontSize: "1.1rem" }}>
            For personalized transit analysis, dasha timing, and specific remedies —{" "}
            <Link href="/book" style={{ color: "var(--accent)" }}>book a consultation</Link>.
          </p>
          <Link href="/book" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2rem" }}>
            Book Now
          </Link>
        </div>
      </main>

      <BookingSection />
      <WhatsAppFab />
    </>
  );
}

