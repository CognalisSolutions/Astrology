import Link from "next/link";
import Image from "next/image";
import { BookingSection } from "@/components/BookingSection";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export default function VastuPage() {
  return (
    <>

      <main className="w-full px-6 md:px-12 lg:px-20" style={{ padding: "2rem 0 3rem" }}>
        <section style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 className="section-title" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}>
            Vastu Shastra
          </h1>
          <Image
            src="/readings-vastu.jpg"
            alt="Vastu"
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
            Ancient science of architecture &amp; energy flow. Harmonize living/working spaces with cosmic directions for health, wealth, relationships.
          </p>
        </section>

        <section className="card" style={{ maxWidth: "70ch", margin: "0 auto 2rem" }}>
          <h2 style={{ color: "var(--accent)", marginBottom: "1rem" }}>Vastu Directions &amp; Planets</h2>
          <ul style={{ color: "var(--muted)", lineHeight: 1.7 }}>
            <li>✓ <strong>North:</strong> Mercury - wealth, career entrance</li>
            <li>✓ <strong>East:</strong> Sun - main door, light, growth</li>
            <li>✓ <strong>South:</strong> Mars/Yama - heavy storage, avoid bedrooms</li>
            <li>✓ <strong>West:</strong> Saturn - guest room, children study</li>
            <li>✓ <strong>NE:</strong> Jupiter - pooja room, water ideal</li>
            <li>✓ <strong>SE:</strong> Venus - kitchen, electrical</li>
            <li>✓ <strong>SW:</strong> Rahu - master bedroom, heavy items</li>
            <li>✓ <strong>NW:</strong> Moon - guest room, toilets</li>
            <li>✓ <strong>Center:</strong> Brahma - keep open/light, no heavy construction</li>
          </ul>
        </section>

        <section style={{ textAlign: "center", margin: "3rem 0" }}>
          <div className="card" style={{ padding: "2rem", maxWidth: "none" }}>
            <h2 style={{ color: "var(--accent)" }}>Room Placement Guide</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", marginTop: "1.5rem" }}>
              <div>
                <h3 style={{ color: "var(--text)" }}>✅ Ideal</h3>
                <ul style={{ color: "var(--muted)" }}>
                  <li>Pooja: NE</li>
                  <li>Kitchen: SE</li>
                  <li>Master Bed: SW</li>
                  <li>Main Door: N/NE/E</li>
                  <li>Water: N/NE</li>
                </ul>
              </div>
              <div>
                <h3 style={{ color: "var(--danger)" }}>❌ Avoid</h3>
                <ul style={{ color: "var(--muted)" }}>
                  <li>Toilet: NE/SE</li>
                  <li>Bedroom: South</li>
                  <li>Stairs: Center/NE</li>
                  <li>Mirror: South</li>
                  <li>Clutter: Brahmasthan</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="card" style={{ maxWidth: "68ch", margin: "0 auto 2rem" }}>
          <h2 style={{ color: "var(--accent)" }}>Common Vastu Defects &amp; Remedies</h2>
          <ul style={{ color: "var(--muted)", lineHeight: 1.65 }}>
            <li><strong>Toilet NE:</strong> Vastu pyramid + sea salt monthly, Mercury remedies</li>
            <li><strong>Main door South:</strong> Triskanda Yantra, Rahu protection</li>
            <li><strong>Kitchen SW:</strong> Fire imbalance - SE mirror, Agni mantra</li>
            <li><strong>Cluttered Center:</strong> Regular cleaning, Vastu salt pyramids</li>
            <li><strong>Sloping NE:</strong> Metal strips level energy flow</li>
          </ul>
        </section>

        <div style={{ textAlign: "center", margin: "3rem 0" }}>
          <p style={{ color: "var(--muted)", maxWidth: "60ch", margin: "0 auto 2rem", fontSize: "1.1rem" }}>
            Complete Vastu analysis for home/office + astrological remedies —{" "}
            <Link href="/book" style={{ color: "var(--accent)" }}>book vastu consultation</Link>.
          </p>
          <Link href="/book" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2rem" }}>
            Vastu + Astrology
          </Link>
        </div>
      </main>

      <BookingSection />
      <WhatsAppFab />
    </>
  );
}

