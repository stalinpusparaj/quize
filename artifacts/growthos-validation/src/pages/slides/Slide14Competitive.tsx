export default function Slide14Competitive() {
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
        gap: "2.5vh",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #E2E8F0", paddingBottom: "1.5vh" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
          <div style={{ width: "1.8vw", height: "1.8vw", backgroundColor: "#0D9488", borderRadius: "0.3vw" }} />
          <span style={{ fontSize: "1.5vw", fontWeight: 700 }}>GrowthOS™</span>
        </div>
        <span style={{ fontSize: "1.5vw", fontWeight: 500, color: "#64748B", letterSpacing: "0.05em" }}>COMPETITIVE LANDSCAPE · 2026</span>
      </div>

      {/* Title */}
      <div>
        <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.6vh" }}>Why Existing Tools Fall Short</div>
        <h2 style={{ fontSize: "4vw", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0 }}>Competitive Landscape</h2>
      </div>

      {/* Table */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
        {/* Column Headers */}
        <div style={{ display: "grid", gridTemplateColumns: "2.5fr 1fr 1fr 1fr 1fr", gap: "0", padding: "1.5vh 2vw", backgroundColor: "#1E3A5F", borderRadius: "0.8vw 0.8vw 0 0" }}>
          <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#FFFFFF" }}>Competitor</div>
          <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#FFFFFF", textAlign: "center" }}>Speed</div>
          <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#FFFFFF", textAlign: "center" }}>Cost</div>
          <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#FFFFFF", textAlign: "center" }}>AI Persona</div>
          <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#FFFFFF", textAlign: "center" }}>Actionable</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "2.5fr 1fr 1fr 1fr 1fr", gap: "0", padding: "2vh 2vw", backgroundColor: "#FFFFFF", borderTop: "1px solid #E2E8F0" }}>
          <div style={{ fontSize: "2vw", fontWeight: 600, color: "#334155" }}>HubSpot / Salesforce</div>
          <div style={{ fontSize: "1.8vw", color: "#94A3B8", textAlign: "center" }}>Months</div>
          <div style={{ fontSize: "1.8vw", color: "#94A3B8", textAlign: "center" }}>$$$</div>
          <div style={{ fontSize: "1.8vw", color: "#94A3B8", textAlign: "center" }}>—</div>
          <div style={{ fontSize: "1.8vw", color: "#94A3B8", textAlign: "center" }}>Partial</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "2.5fr 1fr 1fr 1fr 1fr", gap: "0", padding: "2vh 2vw", backgroundColor: "#F8FAFC", borderTop: "1px solid #E2E8F0" }}>
          <div style={{ fontSize: "2vw", fontWeight: 600, color: "#334155" }}>Generic Survey Tools</div>
          <div style={{ fontSize: "1.8vw", color: "#94A3B8", textAlign: "center" }}>Fast</div>
          <div style={{ fontSize: "1.8vw", color: "#94A3B8", textAlign: "center" }}>Low</div>
          <div style={{ fontSize: "1.8vw", color: "#94A3B8", textAlign: "center" }}>—</div>
          <div style={{ fontSize: "1.8vw", color: "#94A3B8", textAlign: "center" }}>—</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "2.5fr 1fr 1fr 1fr 1fr", gap: "0", padding: "2vh 2vw", backgroundColor: "#FFFFFF", borderTop: "1px solid #E2E8F0" }}>
          <div style={{ fontSize: "2vw", fontWeight: 600, color: "#334155" }}>Business Coaches / Consultants</div>
          <div style={{ fontSize: "1.8vw", color: "#94A3B8", textAlign: "center" }}>Weeks</div>
          <div style={{ fontSize: "1.8vw", color: "#94A3B8", textAlign: "center" }}>$25K+</div>
          <div style={{ fontSize: "1.8vw", color: "#94A3B8", textAlign: "center" }}>Partial</div>
          <div style={{ fontSize: "1.8vw", color: "#94A3B8", textAlign: "center" }}>Yes</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "2.5fr 1fr 1fr 1fr 1fr", gap: "0", padding: "2.5vh 2vw", backgroundColor: "rgba(13,148,136,0.07)", borderTop: "2px solid #0D9488", borderRadius: "0 0 0.8vw 0.8vw" }}>
          <div style={{ fontSize: "2.2vw", fontWeight: 800, color: "#0D9488" }}>GrowthOS™</div>
          <div style={{ fontSize: "2vw", fontWeight: 700, color: "#0D9488", textAlign: "center" }}>3 min</div>
          <div style={{ fontSize: "2vw", fontWeight: 700, color: "#0D9488", textAlign: "center" }}>Affordable</div>
          <div style={{ fontSize: "2vw", fontWeight: 700, color: "#0D9488", textAlign: "center" }}>Yes</div>
          <div style={{ fontSize: "2vw", fontWeight: 700, color: "#0D9488", textAlign: "center" }}>Yes</div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "1.5vh", fontSize: "1.5vw", color: "#94A3B8" }}>
        <span>GrowthOS™ AI Business MRI™</span>
        <span>Confidential &amp; Proprietary · Page 14</span>
      </div>
    </div>
  );
}
