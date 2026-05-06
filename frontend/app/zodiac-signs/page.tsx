"use client";

import Link from "next/link";
import { WhatsAppFab } from "@/components/WhatsAppFab";

const zodiacData = [
  {
    name: "Aries (Mesha)",
    symbol: "♈",
    dates: "Mar 21 - Apr 19",
    traits: "Leadership, courage, pioneering spirit. Fiery nature drives action.",
    imageName: "Aries"
  },
  {
    name: "Taurus (Vrishabha)",
    symbol: "♉",
    dates: "Apr 20 - May 20",
    traits: "Stability, loyalty, practical. Appreciates beauty & comfort.",
    imageName: "Taurus"
  },
  {
    name: "Gemini (Mithuna)",
    symbol: "♊",
    dates: "May 21 - Jun 20",
    traits: "Communication, curiosity, adaptable. Quick wit & social charm.",
    imageName: "Gemini"
  },
  {
    name: "Cancer (Karka)",
    symbol: "♋",
    dates: "Jun 21 - Jul 22",
    traits: "Nurturing, emotional, protective. Deep family connections.",
    imageName: "Cancer"
  },
  {
    name: "Leo (Simha)",
    symbol: "♌",
    dates: "Jul 23 - Aug 22",
    traits: "Confidence, generosity, dramatic. Natural leader & performer.",
    imageName: "Leo"
  },
  {
    name: "Virgo (Kanya)",
    symbol: "♍",
    dates: "Aug 23 - Sep 22",
    traits: "Analytical, service-oriented, perfectionist. Detail mastery.",
    imageName: "Virgo"
  },
  {
    name: "Libra (Tula)",
    symbol: "♎",
    dates: "Sep 23 - Oct 22",
    traits: "Harmony, diplomacy, artistic. Relationship balance expert.",
    imageName: "Libra"
  },
  {
    name: "Scorpio (Vrishchika)",
    symbol: "♏",
    dates: "Oct 23 - Nov 21",
    traits: "Intense, transformative, loyal. Deep emotional insight.",
    imageName: "Scorpio"
  },
  {
    name: "Sagittarius (Dhanu)",
    symbol: "♐",
    dates: "Nov 22 - Dec 21",
    traits: "Adventurous, philosophical, optimistic. Truth seeker.",
    imageName: "Sagittarus"
  },
  {
    name: "Capricorn (Makara)",
    symbol: "♑",
    dates: "Dec 22 - Jan 19",
    traits: "Ambitious, disciplined, practical. Long-term success builder.",
    imageName: "Capricon"
  },
  {
    name: "Aquarius (Kumbha)",
    symbol: "♒",
    dates: "Jan 20 - Feb 18",
    traits: "Innovative, humanitarian, independent. Visionary thinker.",
    imageName: "Aquarius"
  },
  {
    name: "Pisces (Meena)",
    symbol: "♓",
    dates: "Feb 19 - Mar 20",
    traits: "Compassionate, artistic, intuitive. Spiritual connection.",
    imageName: "Pisces"
  }
];

export default function ZodiacSigns() {
  return (
    <>


      <main className="w-full px-6 md:px-12 lg:px-20" style={{ padding: "3rem 0 4rem", background: "linear-gradient(180deg, rgba(7,11,35,0.95) 0%, rgba(16,23,53,0.98) 100%)" }}>
        <h1 className="section-title">Zodiac Signs (Rashi Characteristics)</h1>
        <p style={{ color: "var(--muted)", maxWidth: "64ch", fontSize: "1.1rem", lineHeight: 1.7 }}>
          Explore your Sun sign traits, strengths, and planetary influences. Complete chart reading 
          reveals Ascendant, Moon sign interactions for accurate predictions.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", marginTop: "3rem" }}>
          {zodiacData.map((zodiac, index) => (
            <div key={index} className="card" style={{ padding: "2rem", textAlign: "center", minHeight: "400px" }}>
              <img src={`/${zodiac.imageName}.png`} alt={zodiac.name} style={{ width: "5rem", height: "5rem", display: "block", margin: "0 auto 1rem", filter: "drop-shadow(0 0 10px rgba(209,165,58,0.3))", transition: "all 0.3s ease" }} />
              <h2 style={{ color: "var(--accent)", margin: "0 0 0.5rem", fontSize: "1.5rem", fontWeight: "bold" }}>
                {zodiac.name}
              </h2>
              <p style={{ color: "var(--muted)", marginBottom: "1.5rem", fontSize: "1rem", fontStyle: "italic" }}>
                {zodiac.dates}
              </p>
              <div style={{ 
                background: "linear-gradient(145deg, rgba(16,23,53,0.8), rgba(10,17,40,0.9))",
                border: "1px solid rgba(209,165,58,0.3)",
                padding: "1.5rem", 
                borderRadius: "12px", 
                marginBottom: "1.5rem",
                color: "var(--text)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 0 20px rgba(209,165,58,0.1)"
              }}>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>{zodiac.traits}</p>
              </div>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.5 }}>
                Full reading shows Moon sign, Ascendant, planetary aspects for 2026 predictions.
              </p>
            </div>
          ))}
        </div>

        <section style={{ marginTop: "3rem", textAlign: "center" }}>
          <h2 className="section-title">Highlights</h2>
          <div style={{ maxWidth: "60ch", marginInline: "auto", color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.7 }}>
            <ul style={{ textAlign: "left", maxWidth: "none" }}>
              <li>✓ Complete zodiac characteristics</li>
              <li>✓ Element & ruling planet info</li>
              <li>✓ Basic compatibility notes</li>
              <li>✓ Career & relationship traits</li>
              <li>✓ Personalised chart reading recommended</li>
            </ul>
          </div>
        </section>

        <section style={{ marginTop: "3rem" }}>
          <h2 className="section-title">Your Complete Chart</h2>
          <p style={{ color: "var(--muted)", maxWidth: "64ch", lineHeight: 1.7, fontSize: "1.05rem" }}>
            Sun sign gives general traits; Moon sign emotions, Ascendant personality. Aries Sun with 
            Pisces Ascendant shows assertive exterior, compassionate core. Book consultation for 
            full Lagna chart, planetary yogas, current transits & 2026 predictions.
          </p>
        </section>
      </main>

      <WhatsAppFab />
    </>
  );
}

