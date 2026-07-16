export default function Slide05Introducing() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{
        backgroundColor: "#FAFBFC",
        fontFamily: "'Inter', sans-serif",
        color: "#1E3A5F",
        padding: "4vh 4vw",
        boxSizing: "border-box",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto auto 1fr auto",
        gap: "3vh",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #E2E8F0", paddingBottom: "1.5vh" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
          <div style={{ width: "1.8vw", height: "1.8vw", backgroundColor: "#0D9488", borderRadius: "0.3vw" }} />
          <span style={{ fontSize: "1.5vw", fontWeight: 700 }}>GrowthOS™</span>
        </div>
        <span style={{ fontSize: "1.5vw", fontWeight: 500, color: "#64748B", letterSpacing: "0.05em" }}>THE SOLUTION · 2026</span>
      </div>

      {/* Title block */}
      <div style={{ textAlign: "center", padding: "0 8vw" }}>
        <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1vh" }}>Introducing</div>
        <h2 style={{ fontSize: "5vw", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0 0 1.5vh 0" }}>GrowthOS™</h2>
        <p style={{ fontSize: "2.2vw", color: "#475569", lineHeight: 1.55, margin: 0 }}>
          An AI-powered diagnostic that scans every layer of a business in under 3 minutes — and delivers a personalised growth prescription.
        </p>
      </div>

      {/* Feature cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "3vw", alignContent: "start" }}>
        <div style={{ backgroundColor: "#FFFFFF", padding: "4vh 2.5vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)" }}>
          <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "rgba(13,148,136,0.1)", borderRadius: "0.8vw", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2vh" }}>
            <div style={{ width: "1.5vw", height: "1.5vw", backgroundColor: "#0D9488", borderRadius: "0.3vw" }} />
          </div>
          <div style={{ fontSize: "2vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "1vh" }}>40-Question Business MRI</div>
          <div style={{ fontSize: "1.8vw", color: "#64748B", lineHeight: 1.5 }}>Across 10 critical growth dimensions in under 3 minutes</div>
        </div>
        <div style={{ backgroundColor: "#FFFFFF", padding: "4vh 2.5vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)" }}>
          <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "rgba(13,148,136,0.1)", borderRadius: "0.8vw", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2vh" }}>
            <div style={{ width: "1.5vw", height: "0.3vw", backgroundColor: "#0D9488" }} />
          </div>
          <div style={{ fontSize: "2vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "1vh" }}>AI Growth Persona</div>
          <div style={{ fontSize: "1.8vw", color: "#64748B", lineHeight: 1.5 }}>AI assigns a Growth Persona and reveals hidden revenue opportunities</div>
        </div>
        <div style={{ backgroundColor: "#FFFFFF", padding: "4vh 2.5vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)" }}>
          <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "rgba(13,148,136,0.1)", borderRadius: "0.8vw", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2vh" }}>
            <div style={{ width: "0.3vw", height: "1.5vw", backgroundColor: "#0D9488" }} />
          </div>
          <div style={{ fontSize: "2vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "1vh" }}>Action Plan</div>
          <div style={{ fontSize: "1.8vw", color: "#64748B", lineHeight: 1.5 }}>Actionable step-by-step recommendations, not just a score</div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "1.5vh", fontSize: "1.5vw", color: "#94A3B8" }}>
        <span>GrowthOS™ AI Business MRI™</span>
        <span>Confidential &amp; Proprietary · Page 5</span>
      </div>
    </div>
  );
}
