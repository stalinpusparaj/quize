export default function Slide10CustomerDiscovery() {
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
        gridTemplateColumns: "3fr 2fr",
        gridTemplateRows: "auto 1fr auto",
        gap: "3vh 4vw",
      }}
    >
      {/* Header */}
      <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #E2E8F0", paddingBottom: "1.5vh" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
          <div style={{ width: "1.8vw", height: "1.8vw", backgroundColor: "#0D9488", borderRadius: "0.3vw" }} />
          <span style={{ fontSize: "1.5vw", fontWeight: 700 }}>GrowthOS™</span>
        </div>
        <span style={{ fontSize: "1.5vw", fontWeight: 500, color: "#64748B", letterSpacing: "0.05em" }}>CUSTOMER DISCOVERY · 2026</span>
      </div>

      {/* Left: Quote */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1vh" }}>What We Heard</div>
        <h2 style={{ fontSize: "3.8vw", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", margin: "0 0 3vh 0" }}>Customer Discovery</h2>
        <div style={{ backgroundColor: "#FFFFFF", padding: "4vh 3vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)", marginBottom: "2vh" }}>
          <div style={{ width: "3vw", height: "0.4vw", backgroundColor: "#0D9488", borderRadius: "2px", marginBottom: "2vh" }} />
          <p style={{ fontSize: "2.5vw", fontWeight: 600, color: "#1E3A5F", lineHeight: 1.4, fontStyle: "italic", margin: "0 0 2vh 0" }}>
            "I know something is wrong. I just don't know where to look."
          </p>
          <div style={{ fontSize: "1.8vw", color: "#64748B" }}>— Business owner, 200+ interviews</div>
        </div>
        <div style={{ display: "flex", gap: "2vw" }}>
          <div style={{ backgroundColor: "rgba(13,148,136,0.08)", padding: "1.5vh 2vw", borderRadius: "0.6vw", border: "1px solid rgba(13,148,136,0.2)" }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em" }}>Interviews</div>
            <div style={{ fontSize: "3.5vw", fontWeight: 800, color: "#1E3A5F" }}>200+</div>
            <div style={{ fontSize: "1.8vw", color: "#64748B" }}>12 industries</div>
          </div>
          <div style={{ flex: 1, fontSize: "2vw", color: "#475569", lineHeight: 1.6, display: "flex", alignItems: "center" }}>
            Validated across Healthcare, Agency, SaaS, Finance, Real Estate, Consulting and more.
          </div>
        </div>
      </div>

      {/* Right: Stats */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "2vh" }}>
        <div style={{ backgroundColor: "#FFFFFF", padding: "2.5vh 2.5vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)" }}>
          <div style={{ fontSize: "4.5vw", fontWeight: 800, color: "#0D9488", letterSpacing: "-0.02em" }}>91%</div>
          <div style={{ fontSize: "1.8vw", color: "#334155", lineHeight: 1.4, marginTop: "0.5vh" }}>Would use an AI diagnostic if fast and personalised</div>
        </div>
        <div style={{ backgroundColor: "#FFFFFF", padding: "2.5vh 2.5vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)" }}>
          <div style={{ fontSize: "4.5vw", fontWeight: 800, color: "#1E3A5F", letterSpacing: "-0.02em" }}>74%</div>
          <div style={{ fontSize: "1.8vw", color: "#334155", lineHeight: 1.4, marginTop: "0.5vh" }}>Have never had a formal business audit</div>
        </div>
        <div style={{ backgroundColor: "#FFFFFF", padding: "2.5vh 2.5vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)" }}>
          <div style={{ fontSize: "4.5vw", fontWeight: 800, color: "#1E3A5F", letterSpacing: "-0.02em" }}>68%</div>
          <div style={{ fontSize: "1.8vw", color: "#334155", lineHeight: 1.4, marginTop: "0.5vh" }}>Invested in marketing without knowing their conversion rate</div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "1.5vh", fontSize: "1.5vw", color: "#94A3B8" }}>
        <span>GrowthOS™ AI Business MRI™</span>
        <span>Confidential &amp; Proprietary · Page 10</span>
      </div>
    </div>
  );
}
