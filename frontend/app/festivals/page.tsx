import Link from "next/link";
import Image from "next/image";
import { BookingSection } from "@/components/BookingSection";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export default function FestivalsPage() {
  return (
    <>


      <main className="w-full px-6 md:px-12 lg:px-20" style={{ padding: "2rem 0 3rem" }}>
        <section style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 className="section-title" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}>
            Hindu Festivals &amp; Muhurta
          </h1>
          <Image
            src="/readings-festivals.jpg"
            alt="Festivals"
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
            Sacred Hindu festivals with tithi timings, rituals, spiritual significance, and astrological muhurta. Panchang-based celebrations.
          </p>
        </section>

        <section className="card" style={{ maxWidth: "70ch", margin: "0 auto 2rem" }}>
          <h2 style={{ color: "var(--accent)", marginBottom: "1rem" }}>Upcoming Festivals 2026</h2>
          <p style={{ color: "var(--muted)", marginTop: "-0.35rem", marginBottom: "1.25rem" }}>
            Telugu calendar dates for Andhra Pradesh and Telangana may vary slightly by local panchangam and city.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div>
              <h3 style={{ color: "var(--text)", marginBottom: "0.5rem" }}>Bhogi, Sankranti & Kanuma</h3>
              <p style={{ color: "var(--muted)" }}>Jan 14-16: Bhogi fire, Makar Sankranti, Kanuma. Pongal, charity, cattle worship.</p>
            </div>
            <div>
              <h3 style={{ color: "var(--text)", marginBottom: "0.5rem" }}>Maha Shivaratri</h3>
              <p style={{ color: "var(--muted)" }}>Feb 15: Shiva pooja all night. Bilva leaves, milk abhishekam, fasting.</p>
            </div>
            <div>
              <h3 style={{ color: "var(--text)", marginBottom: "0.5rem" }}>Holi</h3>
              <p style={{ color: "var(--muted)" }}>Mar 4: Phalguna Pournami celebration. Colors, forgiveness, spring renewal.</p>
            </div>
            <div>
              <h3 style={{ color: "var(--text)", marginBottom: "0.5rem" }}>Ugadi</h3>
              <p style={{ color: "var(--muted)" }}>Mar 19: Telugu New Year. Ugadi pachadi, panchanga sravanam, new beginnings.</p>
            </div>
            <div>
              <h3 style={{ color: "var(--text)", marginBottom: "0.5rem" }}>Sri Rama Navami</h3>
              <p style={{ color: "var(--muted)" }}>Mar 27: Lord Rama janma utsavam. Panakam, vadapappu, temple seva.</p>
            </div>
            <div>
              <h3 style={{ color: "var(--text)", marginBottom: "0.5rem" }}>Varalakshmi Vratham</h3>
              <p style={{ color: "var(--muted)" }}>Aug 21: Lakshmi pooja for prosperity. Kalasam, kumkumarchana, mangala harathi.</p>
            </div>
            <div>
              <h3 style={{ color: "var(--text)", marginBottom: "0.5rem" }}>Vinayaka Chavithi</h3>
              <p style={{ color: "var(--muted)" }}>Sep 14: Ganesha pooja. Modakam, patri, vrata katha, visarjanam.</p>
            </div>
            <div>
              <h3 style={{ color: "var(--text)", marginBottom: "0.5rem" }}>Dasara & Bathukamma</h3>
              <p style={{ color: "var(--muted)" }}>Oct 18-20: Saddula Bathukamma, Maha Navami, Vijaya Dasami. Durga pooja and victory rituals.</p>
            </div>
            <div>
              <h3 style={{ color: "var(--text)", marginBottom: "0.5rem" }}>Deepavali</h3>
              <p style={{ color: "var(--muted)" }}>Nov 9: Lakshmi pooja, diyas, family prayers, prosperity blessings.</p>
            </div>
            <div>
              <h3 style={{ color: "var(--text)", marginBottom: "0.5rem" }}>Karthika Pournami</h3>
              <p style={{ color: "var(--muted)" }}>Nov 24: Deepa daanam, Shiva-Vishnu worship, holy bath, lamps.</p>
            </div>
          </div>
        </section>

        <section className="card" style={{ maxWidth: "68ch", margin: "0 auto 2rem" }}>
          <h2 style={{ color: "var(--accent)" }}>Major Festivals Guide</h2>
          <ul style={{ color: "var(--muted)", lineHeight: 1.65 }}>
            <li><strong>Diwali:</strong> Kartik Amavasya - Lakshmi pooja, diyas, wealth new year</li>
            <li><strong>Dussehra:</strong> Vijayadashami - Rama victory, skills/tools worship</li>
            <li><strong>Ram Navami:</strong> Rama birth - fasting, temple visit</li>
            <li><strong>Janmashtami:</strong> Krishna birth - midnight fasting/abhishekam</li>
            <li><strong>Ganesh Chaturthi:</strong> Ganesha arrival - modak, eco visarjan</li>
            <li><strong>Karthigai:</strong> Deepam festival - oil lamps all night</li>
          </ul>
        </section>

        <section style={{ textAlign: "center", margin: "3rem 0" }}>
          <div className="card" style={{ maxWidth: "none", padding: "2rem" }}>
            <h2 style={{ color: "var(--accent)" }}>Festival Astrology</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
              <div>
                <h3 style={{ color: "var(--text)" }}>Favorable Birth Months</h3>
                <ul style={{ color: "var(--muted)" }}>
                  <li>Chaitra Navratri natives: Leadership, devotion</li>
                  <li>Diwali born: Business prosperity</li>
                  <li>Shivaratri natives: Spiritual depth</li>
                </ul>
              </div>
              <div>
                <h3 style={{ color: "var(--text)" }}>Muhurta Selection</h3>
                <ul style={{ color: "var(--muted)" }}>
                  <li>Abhijit muhurta for pooja</li>
                  <li>Fixed nakshatras grihapravesh</li>
                  <li>Pushya star auspicious beginnings</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div style={{ textAlign: "center", margin: "3rem 0" }}>
          <p style={{ color: "var(--muted)", maxWidth: "60ch", margin: "0 auto 2rem", fontSize: "1.1rem" }}>
            Personal festival muhurta, family rituals, spiritual significance analysis —{" "}
            <Link href="/book" style={{ color: "var(--accent)" }}>consult for 2026 calendar</Link>.
          </p>
          <Link href="/book" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2rem" }}>
            Festival Muhurta
          </Link>
        </div>
      </main>

      <BookingSection />
      <WhatsAppFab />
    </>
  );
}
