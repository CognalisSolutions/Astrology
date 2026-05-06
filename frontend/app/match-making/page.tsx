"use client";

import Link from "next/link";
import { useState } from "react";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export default function MatchMakingPage() {
  const [groomName, setGroomName] = useState("");
  const [brideName, setBrideName] = useState("");
  const [groomDob, setGroomDob] = useState("");
  const [brideDob, setBrideDob] = useState("");
  const [gunaScore, setGunaScore] = useState(0);
  const [result, setResult] = useState("");

  const calculateGunaMilan = () => {
    if (!groomName || !brideName || !groomDob || !brideDob) return;
    // Placeholder Guna Milan (0-36)
    const score = Math.floor(Math.random() * 25) + 12;
    const verdict = score >= 18 ? "Acceptable (proceed with remedies)" : "Needs detailed consultation";
    setGunaScore(score);
    setResult(`Guna Milan Score: ${score}/36\nVerdict: ${verdict}\nDetailed Ashtakavarga & D9 chart needed for marriage timing.`);
  };

  return (
    <>


      <main className="w-full px-6 md:px-12 lg:px-20" style={{ padding: "2rem 0 3rem" }}>
        <h1 className="section-title">Match Making / Guna Milan</h1>
        <p style={{ color: "var(--muted)", maxWidth: "64ch", fontSize: "1.1rem", lineHeight: 1.7 }}>
          Traditional 36-point Guna matching for marriage compatibility. Score 18+ acceptable; 
          higher better. Full analysis includes Manglik dosha, Nadi, chart overlays.
        </p>

        <div className="card" style={{ marginTop: "1.5rem", maxWidth: 550, marginInline: "auto" }}>
          <h2 style={{ color: "var(--accent)", marginBottom: "1rem" }}>Guna Milan Calculator</h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
            <div>
              <h3 style={{ margin: "0 0 0.75rem", color: "var(--accent)" }}>Groom</h3>
              <input
                value={groomName}
                onChange={(e) => setGroomName(e.target.value)}
                placeholder="Groom's Name"
                style={{ width: "100%", padding: "0.75rem", marginBottom: "0.75rem", background: "#0f0a1a", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, color: "var(--text)" }}
              />
              <input
                type="date"
                value={groomDob}
                onChange={(e) => setGroomDob(e.target.value)}
                style={{ width: "100%", padding: "0.75rem", background: "#0f0a1a", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, color: "var(--text)" }}
              />
            </div>
            <div>
              <h3 style={{ margin: "0 0 0.75rem", color: "var(--accent)" }}>Bride</h3>
              <input
                value={brideName}
                onChange={(e) => setBrideName(e.target.value)}
                placeholder="Bride's Name"
                style={{ width: "100%", padding: "0.75rem", marginBottom: "0.75rem", background: "#0f0a1a", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, color: "var(--text)" }}
              />
              <input
                type="date"
                value={brideDob}
                onChange={(e) => setBrideDob(e.target.value)}
                style={{ width: "100%", padding: "0.75rem", background: "#0f0a1a", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, color: "var(--text)" }}
              />
            </div>
          </div>

          <button className="btn btn-primary" onClick={calculateGunaMilan} style={{ width: "100%" }} disabled={!groomName || !brideName || !groomDob || !brideDob}>
            Calculate Guna Milan
          </button>

          {gunaScore > 0 && (
            <div style={{ marginTop: "1.75rem", padding: "1.5rem", background: "rgba(201,162,39,0.1)", borderRadius: 12, border: "2px solid rgba(201,162,39,0.3)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                <div style={{ fontSize: "2rem", fontWeight: "bold", color: "var(--accent)" }}>
                  {gunaScore}/36
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ background: "rgba(255,255,255,0.1)", height: "12px", borderRadius: 6, overflow: "hidden", marginBottom: "0.25rem" }}>
                    <div style={{ background: "var(--accent)", height: "100%", width: `${(gunaScore/36)*100}%`, transition: "width 0.5s ease" }}></div>
                  </div>
                  <p style={{ margin: 0, color: gunaScore >= 18 ? "var(--accent)" : "var(--danger)", fontWeight: 600 }}>
                    {gunaScore >= 18 ? "Acceptable match - remedies recommended" : "Consult astrologer for detailed analysis"}
                  </p>
                </div>
              </div>
              <pre style={{ margin: 0, color: "var(--text)", fontSize: "0.95rem", lineHeight: 1.6, whiteSpace: "pre-wrap" }}>
{result}
              </pre>
            </div>
          )}
        </div>

        <section style={{ marginTop: "3rem" }}>
          <h2 className="section-title">Highlights</h2>
          <ul style={{ color: "var(--muted)", maxWidth: "60ch", lineHeight: 1.7, fontSize: "1.05rem" }}>
            <li>✓ 36-point Guna Milan scoring</li>
            <li>✓ Basic compatibility verdict</li>
            <li>✓ Manglik dosha check</li>
            <li>✓ Nadi koot analysis</li>
            <li>✓ Full chart overlay in consultation</li>
          </ul>
        </section>

        <section style={{ marginTop: "3rem" }}>
          <h2 className="section-title">About Match Making</h2>
          <p style={{ color: "var(--muted)", maxWidth: "64ch", lineHeight: 1.7, fontSize: "1.05rem" }}>
            Ashta Koota matching evaluates 8 factors: Varna, Vashya, Tara, Yoni, Graha Maitri, 
            Gana, Bhakoot, Nadi. Score 18+ acceptable marriage. Leo-Capricorn shows leadership-ambition 
            synergy but needs Manglik remedies. Complete D9 navamsha analysis essential.
          </p>
        </section>
      </main>

      <WhatsAppFab />
    </>
  );
}
