import Link from "next/link";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export const metadata = {
  title: "Daily horoscope",
  description: "A gentle daily note — full personalised reading in consultation.",
};

const signs = [
  "Mesha (Aries)",
  "Vrishabha (Taurus)",
  "Mithuna (Gemini)",
  "Karka (Cancer)",
  "Simha (Leo)",
  "Kanya (Virgo)",
  "Tula (Libra)",
  "Vrishchika (Scorpio)",
  "Dhanu (Sagittarius)",
  "Makara (Capricorn)",
  "Kumbha (Aquarius)",
  "Meena (Pisces)",
];

export default function HoroscopePage() {
  return (
    <>


      <main className="w-full px-6 md:px-12 lg:px-20" style={{ padding: "2rem 0 3rem" }}>
        <h1 className="section-title">Daily horoscope</h1>
        <p style={{ color: "var(--muted)", maxWidth: "60ch" }}>
          These short notes are for general mood and reflection only. Your birth
          chart is unique — book a consultation for accurate timing and remedies.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1rem",
            marginTop: "1.5rem",
          }}
        >
          {signs.map((sign) => (
            <div key={sign} className="card">
              <h2 style={{ margin: "0 0 0.5rem", fontSize: "1.1rem" }}>{sign}</h2>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.95rem" }}>
                A steady day to focus on small wins. Avoid rushed decisions in the
                afternoon; evening favours calm conversation and prayer.
              </p>
            </div>
          ))}
        </div>

        <p style={{ marginTop: "2rem", color: "var(--muted)", fontSize: "0.95rem" }}>
          Replace the placeholder text above with your daily feed or CMS content
          when ready.
        </p>
      </main>
      <WhatsAppFab />
    </>
  );
}
