import Link from "next/link";
import Image from "next/image";
import { BookingSection } from "@/components/BookingSection";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export default function NumerologyPage() {
  return (
    <>


      <main className="w-full px-6 md:px-12 lg:px-20" style={{ padding: "2rem 0 3rem" }}>
        <section style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 className="section-title" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}>
            Numerology
          </h1>
          <Image
            src="/readings-numerology.jpg"
            alt="Numerology"
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
            Science of numbers reveals destiny, personality, compatibility, and life cycles. Your name + birth date create unique vibrations.
          </p>
        </section>

        <section className="card" style={{ maxWidth: "70ch", margin: "0 auto 2rem" }}>
          <h2 style={{ color: "var(--accent)", marginBottom: "1rem" }}>Core Numbers</h2>
          <ul style={{ color: "var(--muted)", lineHeight: 1.7, columns: 2, columnGap: "2rem" }}>
            <li>✓ <strong>Life Path:</strong> Birth date sum (reduce to 1-9,11,22) - life purpose</li>
            <li>✓ <strong>Destiny:</strong> Full name sum - talents/opportunities</li>
            <li>✓ <strong>Soul Urge:</strong> Vowels sum - inner motivations</li>
            <li>✓ <strong>Personality:</strong> Consonants - outer impression</li>
            <li>✓ <strong>Maturity:</strong> Life path + destiny - age 36+ lessons</li>
            <li>✓ <strong>Personal Year:</strong> Changes yearly - timing forecast</li>
          </ul>
        </section>

        <section style={{ textAlign: "center", margin: "3rem 0" }}>
          <div className="card" style={{ padding: "2rem", maxWidth: "none" }}>
            <h2 style={{ color: "var(--accent)" }}>Number Meanings</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem", marginTop: "1.5rem" }}>
{[1,2,3,4,5,6,7,8,9].map((n) => (
                <div key={n} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "2rem", fontWeight: "bold", color: "var(--accent)", lineHeight: 1 }}>{n}</div>
                  <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
                    {n === 1 && "Leadership"} {n === 2 && "Harmony"} {n === 3 && "Creativity"}
                    {n === 4 && "Stability"} {n === 5 && "Freedom"} {n === 6 && "Nurturing"}
                    {n === 7 && "Spirituality"} {n === 8 && "Power"} {n === 9 && "Compassion"}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>

        <section className="card" style={{ maxWidth: "68ch", margin: "0 auto 2rem" }}>
          <h2 style={{ color: "var(--accent)" }}>Sample Calculation</h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>
            <strong>Date:</strong> 15-08-1990 → 1+5+0+8+1+9+9+0 = 33 → 6 (Life Path 6)
          </p>
          <p style={{ color: "var(--muted)" }}>
            <strong>Name:</strong> Priya → P(7)+R(9)+I(9)+Y(7)+A(1) = 33 → 6 (Destiny 6)
          </p>
          <p style={{ marginTop: "1rem", color: "var(--accent)", fontWeight: 600 }}>
            Double 6: Nurturing nature, family focus, responsibility lessons.
          </p>
        </section>

        <section className="card" style={{ maxWidth: "68ch", margin: "0 auto 2rem" }}>
          <h2 style={{ color: "var(--accent)" }}>Compatibility</h2>
          <ul style={{ color: "var(--muted)" }}>
            <li>1,5,7 together: Dynamic, adventurous</li>
            <li>2,4,6,8: Stable, family-oriented</li>
            <li>3,6,9: Creative, social</li>
            <li>Avoid 4-5, 8-2 major clashes</li>
            <li>11/22 master numbers need spiritual partners</li>
          </ul>
        </section>

        <div style={{ textAlign: "center", margin: "3rem 0" }}>
          <p style={{ color: "var(--muted)", maxWidth: "60ch", margin: "0 auto 2rem", fontSize: "1.1rem" }}>
            Complete numerology chart + name correction + yearly forecast —{" "}
            <Link href="/book" style={{ color: "var(--accent)" }}>get your reading</Link>.
          </p>
          <Link href="/book" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2rem" }}>
            Numerology Consultation
          </Link>
        </div>
      </main>

      <BookingSection />
      <WhatsAppFab />
    </>
  );
}

