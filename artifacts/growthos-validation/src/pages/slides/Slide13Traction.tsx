export default function Slide13Traction() {
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
        <span style={{ fontSize: "1.5vw", fontWeight: 500, color: "#64748B", letterSpacing: "0.05em" }}>EARLY TRACTION · 2026</span>
      </div>

      {/* Title */}
      <div>
        <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.6vh" }}>Beta Results</div>
        <h2 style={{ fontSize: "4vw", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0 }}>Early Traction</h2>
      </div>

      {/* Metrics */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2.5vh" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2.5vw" }}>
          <div style={{ backgroundColor: "#FFFFFF", padding: "3.5vh 2.5vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)", textAlign: "center" }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1vh" }}>MRI Scans Completed</div>
            <div style={{ fontSize: "6vw", fontWeight: 800, color: "#0D9488", letterSpacing: "-0.02em" }}>340+</div>
            <div style={{ fontSize: "1.8vw", color: "#64748B", marginTop: "0.8vh" }}>In first 30 days of beta</div>
          </div>
          <div style={{ backgroundColor: "#FFFFFF", padding: "3.5vh 2.5vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)", textAlign: "center" }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1vh" }}>Completion Rate</div>
            <div style={{ fontSize: "6vw", fontWeight: 800, color: "#1E3A5F", letterSpacing: "-0.02em" }}>87%</div>
            <div style={{ fontSize: "1.8vw", color: "#0D9488", fontWeight: 600, marginTop: "0.8vh" }}>Industry avg: 40–60%</div>
          </div>
          <div style={{ backgroundColor: "#FFFFFF", padding: "3.5vh 2.5vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)", textAlign: "center" }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1vh" }}>Early Access Requests</div>
            <div style={{ fontSize: "6vw", fontWeight: 800, color: "#1E3A5F", letterSpacing: "-0.02em" }}>73%</div>
            <div style={{ fontSize: "1.8vw", color: "#64748B", marginTop: "0.8vh" }}>Of all respondents</div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5vw" }}>
          <div style={{ backgroundColor: "#FFFFFF", padding: "3vh 2.5vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)", display: "flex", alignItems: "center", gap: "3vw" }}>
            <div style={{ textAlign: "center", flexShrink: 0 }}>
              <div style={{ fontSize: "5vw", fontWeight: 800, color: "#1E3A5F", letterSpacing: "-0.02em" }}>41%</div>
            </div>
            <div>
              <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5vh" }}>Open to Paid Call</div>
              <div style={{ fontSize: "2vw", color: "#334155", lineHeight: 1.4 }}>Open to a paid 20-minute discovery call</div>
            </div>
          </div>
          <div style={{ backgroundColor: "rgba(13,148,136,0.06)", padding: "3vh 2.5vw", borderRadius: "1vw", border: "1px solid rgba(13,148,136,0.25)", display: "flex", alignItems: "center", gap: "3vw" }}>
            <div style={{ textAlign: "center", flexShrink: 0 }}>
              <div style={{ fontSize: "5vw", fontWeight: 800, color: "#0D9488", letterSpacing: "-0.02em" }}>72</div>
            </div>
            <div>
              <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5vh" }}>NPS Score</div>
              <div style={{ fontSize: "2vw", color: "#1E3A5F", lineHeight: 1.4, fontWeight: 500 }}>"Excellent" — Net Promoter Score from beta users</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "1.5vh", fontSize: "1.5vw", color: "#94A3B8" }}>
        <span>GrowthOS™ AI Business MRI™</span>
        <span>Confidential &amp; Proprietary · Page 13</span>
      </div>
    </div>
  );
}
