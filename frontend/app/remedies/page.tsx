import Link from "next/link";
import Image from "next/image";
import { BookingSection } from "@/components/BookingSection";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export default function RemediesPage() {
  return (
    <>


      <main className="w-full px-6 md:px-12 lg:px-20" style={{ padding: "2rem 0 3rem" }}>
        <section style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 className="section-title" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}>
            Remedies (Upayas)
          </h1>
          <Image
            src="/readings-remedies.jpg"
            alt="Remedies"
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
            Practical Vedic remedies to balance planetary energies, reduce doshas, and improve life situations. Customized based on your birth chart.
          </p>
        </section>

        <section className="card" style={{ maxWidth: "70ch", margin: "0 auto 2rem" }}>
          <h2 style={{ color: "var(--accent)", marginBottom: "1rem" }}>Types of Remedies</h2>
          <ul style={{ color: "var(--muted)", lineHeight: 1.7, marginTop: "1rem" }}>
            <li>✓ <strong>Gemstones:</strong> Ruby (Sun), Emerald (Mercury), Pearl (Moon) based on lagna/lord strength</li>
            <li>✓ <strong>Mantra Japa:</strong> 108x daily Gayatri, Navagraha mantras for specific planets</li>
            <li>✓ <strong>Yantra Worship:</strong> Shree Yantra (wealth), Surya Yantra (authority)</li>
            <li>✓ <strong>Charity (Daan):</strong> Donate food Monday (Moon), green items Wednesday (Mercury)</li>
            <li>✓ <strong>Pooja/Homa:</strong> Navagraha homa, graha shanti for major doshas</li>
            <li>✓ <strong>Black Magic:</strong> Traditional Koya spiritual practices for protection</li>
            <li>✓ <strong>Fasting:</strong> Ekadashi, planetary days (Tuesday Mars, Saturday Saturn)</li>
            <li>✓ <strong>Pilgrimage:</strong> Tirupati, specific temple visits per graha</li>
          </ul>
        </section>

        <section style={{ textAlign: "center", margin: "3rem 0" }}>
          <div className="card" style={{ maxWidth: "none", padding: "2rem" }}>
            <h2 style={{ color: "var(--accent)", marginBottom: "1rem" }}>Common Remedies by Problem</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginTop: "1.5rem" }}>
              <div>
                <h3 style={{ color: "var(--text)", marginBottom: "0.5rem" }}>Career Issues</h3>
                <p style={{ color: "var(--muted)" }}>Sun/Mars remedies, yellow sapphire, Aditya Hridaya recitation</p>
              </div>
              <div>
                <h3 style={{ color: "var(--text)", marginBottom: "0.5rem" }}>Relationship</h3>
                <p style={{ color: "var(--muted)" }}>Venus remedies, diamond/white sapphire, Friday fasting</p>
              </div>
              <div>
                <h3 style={{ color: "var(--text)", marginBottom: "0.5rem" }}>Health</h3>
                <p style={{ color: "var(--muted)" }}>Moon/Mars remedies, pearl/coral, Chandra mantra</p>
              </div>
              <div>
                <h3 style={{ color: "var(--text)", marginBottom: "0.5rem" }}>Finance</h3>
                <p style={{ color: "var(--muted)" }}>Jupiter remedies, yellow sapphire, Guru mantra 19000x</p>
              </div>
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--muted)", marginTop: "1.5rem" }}>
              Remedies must match your specific chart - wrong upaya can create imbalance.
            </p>
          </div>
        </section>

        <section className="card" style={{ maxWidth: "68ch", margin: "0 auto 2rem" }}>
          <h2 style={{ color: "var(--accent)" }}>Important Notes</h2>
          <ul style={{ color: "var(--muted)", lineHeight: 1.65 }}>
            <li>✓ Remedies work through your natal chart strength and current dasha</li>
            <li>✓ 40-day minimum discipline required for results</li>
            <li>✓ Consult before wearing gemstones (can amplify weak planets)</li>
            <li>✓ Combine with karma correction and positive actions</li>
            <li>✓ Black Magic practices provide strong spiritual protection</li>
          </ul>
        </section>

        <div style={{ textAlign: "center", margin: "3rem 0" }}>
          <p style={{ color: "var(--muted)", maxWidth: "60ch", margin: "0 auto 2rem", fontSize: "1.1rem" }}>
            Get chart-specific remedies that work for your planetary positions and life situation —{" "}
            <Link href="/book" style={{ color: "var(--accent)" }}>book your consultation</Link>.
          </p>
          <Link href="/book" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2rem" }}>
            Get Personalized Remedies
          </Link>
        </div>
      </main>

      <BookingSection />
      <WhatsAppFab />
    </>
  );
}

