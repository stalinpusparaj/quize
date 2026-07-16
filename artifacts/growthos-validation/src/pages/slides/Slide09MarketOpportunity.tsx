export default function Slide09MarketOpportunity() {
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
        <span style={{ fontSize: "1.5vw", fontWeight: 500, color: "#64748B", letterSpacing: "0.05em" }}>MARKET SIZE · 2026</span>
      </div>

      {/* Title */}
      <div>
        <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.6vh" }}>The Opportunity</div>
        <h2 style={{ fontSize: "4vw", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0 }}>Market Opportunity</h2>
      </div>

      {/* Content */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2.5vh" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2.5vw" }}>
          <div style={{ backgroundColor: "#FFFFFF", padding: "3vh 2.5vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)", textAlign: "center" }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1vh" }}>Global SMEs</div>
            <div style={{ fontSize: "5.5vw", fontWeight: 800, color: "#1E3A5F", letterSpacing: "-0.02em" }}>400M+</div>
            <div style={{ fontSize: "1.8vw", color: "#64748B", marginTop: "0.8vh" }}>33M in the US alone</div>
          </div>
          <div style={{ backgroundColor: "#FFFFFF", padding: "3vh 2.5vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)", textAlign: "center" }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1vh" }}>Digital Transform Market</div>
            <div style={{ fontSize: "5.5vw", fontWeight: 800, color: "#1E3A5F", letterSpacing: "-0.02em" }}>$53.7B</div>
            <div style={{ fontSize: "1.8vw", color: "#0D9488", marginTop: "0.8vh", fontWeight: 600 }}>21% CAGR growth</div>
          </div>
          <div style={{ backgroundColor: "#FFFFFF", padding: "3vh 2.5vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)", textAlign: "center" }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1vh" }}>AI Tools Market by 2028</div>
            <div style={{ fontSize: "5.5vw", fontWeight: 800, color: "#1E3A5F", letterSpacing: "-0.02em" }}>$13.8B</div>
            <div style={{ fontSize: "1.8vw", color: "#0D9488", marginTop: "0.8vh", fontWeight: 600 }}>Rapidly expanding</div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5vw" }}>
          <div style={{ backgroundColor: "#FFFFFF", padding: "2.5vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.3vw 0.8vw rgba(30,58,95,0.04)" }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.8vh" }}>Our Wedge</div>
            <div style={{ fontSize: "2vw", color: "#334155", lineHeight: 1.5 }}>SMEs underserved by enterprise tools, priced out of consultants</div>
          </div>
          <div style={{ backgroundColor: "rgba(13,148,136,0.06)", padding: "2.5vh 2.5vw", borderRadius: "0.8vw", border: "1px solid rgba(13,148,136,0.2)" }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.8vh" }}>Serviceable Market</div>
            <div style={{ fontSize: "2vw", color: "#1E3A5F", lineHeight: 1.5, fontWeight: 600 }}>~18M English-speaking, digital-first SMEs</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "1.5vh", fontSize: "1.5vw", color: "#94A3B8" }}>
        <span>GrowthOS™ AI Business MRI™</span>
        <span>Confidential &amp; Proprietary · Page 9</span>
      </div>
    </div>
  );
}
