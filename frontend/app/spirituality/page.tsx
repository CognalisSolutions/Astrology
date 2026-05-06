import Link from "next/link";
import Image from "next/image";
import { BookingSection } from "@/components/BookingSection";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export default function SpiritualityPage() {
  return (
    <>
      <header
        style={{
          background: "#1a1228",
          borderBottom: "1px solid rgba(201,162,39,0.2)",
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
            Spirituality &amp; Dharma
          </h1>
          <Image
            src="/readings-spirituality.jpg"
            alt="Spirituality"
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
            Astrological guidance for spiritual growth, dharma, karma resolution, mantra sadhana, and divine connection through planetary grace.
          </p>
        </section>

        <section className="card" style={{ maxWidth: "70ch", margin: "0 auto 2rem" }}>
          <h2 style={{ color: "var(--accent)", marginBottom: "1rem" }}>Spiritual Indicators in Chart</h2>
          <ul style={{ color: "var(--muted)", lineHeight: 1.7 }}>
            <li>✓ <strong>Jupiter:</strong> Guru wisdom, temples, higher philosophy</li>
            <li>✓ <strong>Ketu:</strong> Moksha, detachment, past life siddhis</li>
            <li>✓ <strong>12th House:</strong> Meditation, isolation, spiritual losses/gains</li>
            <li>✓ <strong>Moon-Jupiter:</strong> Intuitive faith, guru connection</li>
            <li>✓ <strong>Rahu 12th:</strong> Foreign spiritual practices, tantra</li>
            <li>✓ <strong>Saturn aspect:</strong> Disciplined sadhana endurance</li>
          </ul>
        </section>

        <section style={{ textAlign: "center", margin: "3rem 0" }}>
          <div className="card" style={{ padding: "2rem", maxWidth: "none" }}>
            <h2 style={{ color: "var(--accent)" }}>Spiritual Paths by Lagna</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", marginTop: "1.5rem" }}>
              <div>
                <h3 style={{ color: "var(--text)" }}>Pisces Lagna</h3>
                <p style={{ color: "var(--muted)" }}>Bhakti yoga, guru kripa, temple service.</p>
              </div>
              <div>
                <h3 style={{ color: "var(--text)" }}>Scorpio Lagna</h3>
                <p style={{ color: "var(--muted)" }}>Tantra, kundalini, occult sciences.</p>
              </div>
              <div>
                <h3 style={{ color: "var(--text)" }}>Virgo Lagna</h3>
                <p style={{ color: "var(--muted)" }}>Jnana yoga, service, detailed mantra.</p>
              </div>
              <div>
                <h3 style={{ color: "var(--text)" }}>Libra Lagna</h3>
                <p style={{ color: "var(--muted)" }}>Karma yoga, relationships spiritualized.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="card" style={{ maxWidth: "68ch", margin: "0 auto 2rem" }}>
          <h2 style={{ color: "var(--accent)" }}>Mantra Sadhana Guide</h2>
          <ul style={{ color: "var(--muted)", lineHeight: 1.65 }}>
            <li><strong>Gayatri:</strong> 108x dawn/dusk - wisdom illumination</li>
            <li><strong>Maha Mrityunjaya:</strong> 108x eclipse days - protection</li>
            <li><strong>Navagraha:</strong> Weak planet specific - 19000 japam</li>
            <li><strong>Om Namah Shivaya:</strong> Rudraksha mala - Shiva grace</li>
            <li><strong>Sammaka Sarakka:</strong> Tribal deity protection, family harmony</li>
          </ul>
        </section>

        <section className="card" style={{ maxWidth: "68ch", margin: "0 auto 2rem" }}>
          <h2 style={{ color: "var(--accent)" }}>Karma &amp; Dharma</h2>
          <ul style={{ color: "var(--muted)" }}>
            <li>9th house: Dharma, guru, fortune</li>
            <li>12th house losses: Past karma resolution</li>
            <li>Rahu/Ketu axis: Karmic lessons</li>
            <li>Saturn dasha: Karma maturation</li>
            <li>Jupiter transit: Dharma expansion</li>
          </ul>
        </section>

        <div style={{ textAlign: "center", margin: "3rem 0" }}>
          <p style={{ color: "var(--muted)", maxWidth: "60ch", margin: "0 auto 2rem", fontSize: "1.1rem" }}>
            Discover your spiritual calling, mantra practice, and karma resolution path —{" "}
            <Link href="/book" style={{ color: "var(--accent)" }}>spiritual astrology consultation</Link>.
          </p>
          <Link href="/book" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2rem" }}>
            Spiritual Guidance
          </Link>
        </div>
      </main>

      <BookingSection />
      <WhatsAppFab />
    </>
  );
}

