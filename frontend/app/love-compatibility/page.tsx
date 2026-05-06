"use client";

import Link from "next/link";
import { useState } from "react";
import { WhatsAppFab } from "@/components/WhatsAppFab";

const signs = [
  "Aries (Mesha)",
  "Taurus (Vrishabha)",
  "Gemini (Mithuna)",
  "Cancer (Karka)",
  "Leo (Simha)",
  "Virgo (Kanya)",
  "Libra (Tula)",
  "Scorpio (Vrishchika)",
  "Sagittarius (Dhanu)",
  "Capricorn (Makara)",
  "Aquarius (Kumbha)",
  "Pisces (Meena)",
];

export default function LoveCompatibility() {
  const [sign1, setSign1] = useState("");
  const [sign2, setSign2] = useState("");
  const [result, setResult] = useState("");

  const calculateCompatibility = () => {
    if (!sign1 || !sign2) return;
    // Simple placeholder compatibility (extend with real logic)
    const score = Math.floor(Math.random() * 70) + 30;
    const message = score > 70 ? "Excellent match!" : score > 50 ? "Good compatibility" : "Moderate - consult astrologer";
    setResult(`${score}% ${message}. Detailed analysis in consultation.`);
  };

  return (
    <>


      <main className="w-full px-6 md:px-12 lg:px-20" style={{ padding: "2rem 0 3rem" }}>
        <h1 className="section-title">Love Compatibility (Sun Sign Match Making)</h1>
        <p style={{ color: "var(--muted)", maxWidth: "64ch", fontSize: "1.1rem", lineHeight: 1.7 }}>
          Compatibility horoscopes help two people in a romantic relationship understand their love dynamics. 
          Rate potential across emotional, physical, and spiritual levels.
        </p>

        <div className="card" style={{ marginTop: "1.5rem", maxWidth: 500, marginInline: "auto" }}>
          <h2 style={{ color: "var(--accent)", marginBottom: "1rem" }}>Check Compatibility</h2>
          
          <div style={{ display: "grid", gap: "1rem", marginBottom: "1rem" }}>
            <div>
            <label style={{ display: "block", color: "var(--muted)", marginBottom: "0.5rem" }}>Your Sign</label>
              <select value={sign1} onChange={(e) => setSign1(e.target.value)} style={{ width: "100%", padding: "0.75rem", background: "#0f0a1a", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, color: "var(--text)" }}>
                <option value="">Select zodiac sign</option>
                {signs.map(sign => <option key={sign} value={sign}>{sign}</option>)}
              </select>
            </div>\n            <div>\n              <label style={{ display: "block", color: "var(--muted)", marginBottom: "0.5rem" }}>Partner's Sign</label>
              <select value={sign2} onChange={(e) => setSign2(e.target.value)} style={{ width: "100%", padding: "0.75rem", background: "#0f0a1a", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, color: "var(--text)" }}>
                <option value="">Select zodiac sign</option>
                {signs.map(sign => <option key={sign} value={sign}>{sign}</option>)}
              </select>
            </div>
          </div>

          <button className="btn btn-primary" onClick={calculateCompatibility} style={{ width: "100%", marginBottom: "1rem" }} disabled={!sign1 || !sign2}>
            Show Compatibility
          </button>

          {result && (
            <div style={{ background: "rgba(201,162,39,0.1)", padding: "1rem", borderRadius: 8, border: "1px solid rgba(201,162,39,0.2)" }}>
              <h3 style={{ color: "var(--accent)", margin: "0 0 0.5rem" }}>Result</h3>
              <p style={{ margin: 0, fontSize: "1.1rem" }}>{result}</p>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginTop: "0.75rem" }}>
                Detailed chart analysis recommended for complete matching.
              </p>
            </div>
          )}
        </div>

        <section style={{ marginTop: "3rem" }}>
          <h2 className="section-title">Highlights</h2>
          <ul style={{ color: "var(--muted)", maxWidth: "60ch", lineHeight: 1.7, fontSize: "1.05rem" }}>
            <li>✓ Match your sign with lover's, friend's, or relative's sign</li>
            <li>✓ Free basic compatibility score</li>
            <li>✓ Simple zodiac-based insights</li>
            <li>✓ Emotional, physical, spiritual levels analyzed</li>
            <li>✓ Full consultation for Guna Milan & remedies</li>
          </ul>
        </section>

        <section style={{ marginTop: "3rem" }}>
          <h2 className="section-title">About Love Compatibility</h2>
          <p style={{ color: "var(--muted)", maxWidth: "64ch", lineHeight: 1.7, fontSize: "1.05rem" }}>
            Compatibility horoscopes reveal motivations and communication styles between partners. 
            They rate romantic potential through mind-spirit liaison (emotional), sensual attraction (physical), 
            and long-term harmony. Aries-Taurus shows passion-stability balance; consult for your chart.
          </p>
        </section>
      </main>

      <WhatsAppFab />
    </>
  );
}
