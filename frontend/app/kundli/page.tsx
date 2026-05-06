 "use client";

import Link from "next/link";
import { useState } from "react";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export default function KundliPage() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [time, setTime] = useState("");
  const [place, setPlace] = useState("");
  const [result, setResult] = useState("");

  const generateKundli = () => {
    if (!name || !dob) return;
    // Placeholder - real would call API
    setResult(`Kundli for ${name}:
• Ascendant: Virgo
• Moon Sign: Libra  
• Key strengths: Analytical, practical career path
• Current dasha: Jupiter (growth period till 2028)
Full reading with remedies in consultation.`);
  };

  return (
    <>


      <main className="w-full px-6 md:px-12 lg:px-20" style={{ padding: "2rem 0 8rem" }}>
        <h1 className="section-title">Kundli / Birth Chart</h1>
        <p style={{ color: "var(--muted)", maxWidth: "64ch", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
          Generate basic birth chart insights. Complete kundli reading requires birth time & place 
          accuracy for house positions, planetary aspects, and predictive analysis.
        </p>

        <div className="card" style={{ marginTop: "1.5rem", maxWidth: 500, marginInline: "auto", marginBottom: "3rem" }}>
          <h2 style={{ color: "var(--accent)", marginBottom: "1rem" }}>Basic Kundli</h2>
          
          <div style={{ display: "grid", gap: "1rem" }}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              style={{ padding: "0.75rem", background: "#0f0a1a", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, color: "var(--text)" }}
            />
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              style={{ padding: "0.75rem", background: "#0f0a1a", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, color: "var(--text)" }}
            />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="Birth Time"
                style={{ padding: "0.75rem", background: "#0f0a1a", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, color: "var(--text)" }}
              />
              <input
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                placeholder="Birth Place"
                style={{ padding: "0.75rem", background: "#0f0a1a", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, color: "var(--text)" }}
              />
            </div>
          </div>

          <button className="btn btn-primary" onClick={generateKundli} style={{ width: "100%", marginTop: "1rem" }} disabled={!name || !dob}>
            Generate Kundli
          </button>

          {result && (
            <div style={{ marginTop: "1.5rem", marginBottom: "2rem", background: "rgba(201,162,39,0.1)", padding: "1.25rem", borderRadius: 8, border: "1px solid rgba(201,162,39,0.2)" }}>
              <h3 style={{ color: "var(--accent)", margin: "0 0 0.75rem" }}>Your Kundli Highlights</h3>
              <pre style={{ margin: 0, whiteSpace: "pre-wrap", color: "var(--text)", fontSize: "0.95rem", lineHeight: 1.6 }}>
{result}
              </pre>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginTop: "1rem" }}>
                Complete analysis with dasha predictions, remedies in consultation.
              </p>
            </div>
          )}
        </div>

        <section style={{ marginTop: "5rem", marginBottom: "3rem" }}>
          <h2 className="section-title">Highlights</h2>
          <ul style={{ color: "var(--muted)", maxWidth: "60ch", lineHeight: 1.7, fontSize: "1.05rem" }}>
            <li>✓ Basic planetary positions & ascendant</li>
            <li>✓ Free birth chart insights</li>
            <li>✓ Current dasha indication</li>
            <li>✓ House strength analysis</li>
            <li>✓ Full consultation for remedies & timing</li>
          </ul>
        </section>

        <section style={{ marginTop: "5rem", marginBottom: "3rem" }}>
          <h2 className="section-title">About Kundli</h2>
          <p style={{ color: "var(--muted)", maxWidth: "64ch", lineHeight: 1.7, fontSize: "1.05rem" }}>
            Birth chart reveals life blueprint - planetary positions at birth determine personality, 
            challenges, opportunities. Lagna (Ascendant) shows physical appearance & approach; 
            Moon sign governs emotions. Dasha periods time events. Virgo lagna indicates practical, 
            service-oriented nature - consult for detailed yogas and remedies.
          </p>
        </section>
      </main>

      <WhatsAppFab />
    </>
  );
}
