export default function Slide03HiddenCost() {
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
        <span style={{ fontSize: "1.5vw", fontWeight: 500, color: "#64748B", letterSpacing: "0.05em" }}>THE COST OF GUESSWORK · 2026</span>
      </div>

      {/* Title */}
      <div>
        <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.8vh" }}>The Hidden Cost</div>
        <h2 style={{ fontSize: "4vw", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0 }}>The Hidden Cost of Guesswork</h2>
      </div>

      {/* Content */}
      <div style={{ display: "flex", flexDirection: "column", gap: "3vh" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "3vw" }}>
          <div style={{ backgroundColor: "#FFFFFF", padding: "3.5vh 2.5vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)", textAlign: "center" }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.5vh" }}>Annual Revenue Lost</div>
            <div style={{ fontSize: "6vw", fontWeight: 800, color: "#1E3A5F", letterSpacing: "-0.02em" }}>$120K</div>
            <div style={{ fontSize: "1.8vw", fontWeight: 500, color: "#0D9488", marginTop: "1vh" }}>per business / year</div>
            <div style={{ fontSize: "1.8vw", color: "#64748B", marginTop: "0.8vh", lineHeight: 1.4 }}>From undiagnosed conversion leaks</div>
          </div>
          <div style={{ backgroundColor: "#FFFFFF", padding: "3.5vh 2.5vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)", textAlign: "center" }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.5vh" }}>Wasted Budget</div>
            <div style={{ fontSize: "6vw", fontWeight: 800, color: "#1E3A5F", letterSpacing: "-0.02em" }}>67%</div>
            <div style={{ fontSize: "1.8vw", fontWeight: 500, color: "#0D9488", marginTop: "1vh" }}>of marketing spend</div>
            <div style={{ fontSize: "1.8vw", color: "#64748B", marginTop: "0.8vh", lineHeight: 1.4 }}>Spent on the wrong channels</div>
          </div>
          <div style={{ backgroundColor: "#FFFFFF", padding: "3.5vh 2.5vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)", textAlign: "center" }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.5vh" }}>Cost of a Manual Audit</div>
            <div style={{ fontSize: "6vw", fontWeight: 800, color: "#1E3A5F", letterSpacing: "-0.02em" }}>$25K</div>
            <div style={{ fontSize: "1.8vw", fontWeight: 500, color: "#0D9488", marginTop: "1vh" }}>per engagement</div>
            <div style={{ fontSize: "1.8vw", color: "#64748B", marginTop: "0.8vh", lineHeight: 1.4 }}>Takes weeks to deliver</div>
          </div>
        </div>
        <div style={{ backgroundColor: "rgba(13,148,136,0.06)", padding: "2.5vh 3vw", borderRadius: "0.8vw", border: "1px solid rgba(13,148,136,0.2)" }}>
          <p style={{ fontSize: "2.2vw", fontWeight: 500, color: "#1E3A5F", margin: 0, textAlign: "center", lineHeight: 1.5 }}>
            Growth stalls not from lack of effort — but from lack of diagnosis.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "1.5vh", fontSize: "1.5vw", color: "#94A3B8" }}>
        <span>GrowthOS™ AI Business MRI™</span>
        <span>Confidential &amp; Proprietary · Page 3</span>
      </div>
    </div>
  );
}
