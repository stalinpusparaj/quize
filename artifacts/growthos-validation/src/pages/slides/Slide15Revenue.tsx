export default function Slide15Revenue() {
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
        <span style={{ fontSize: "1.5vw", fontWeight: 500, color: "#64748B", letterSpacing: "0.05em" }}>REVENUE MODEL · 2026</span>
      </div>

      {/* Title */}
      <div>
        <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.6vh" }}>Monetisation</div>
        <h2 style={{ fontSize: "4vw", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0 }}>Revenue Model</h2>
      </div>

      {/* 4 Tier Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "2.5vw" }}>
        <div style={{ backgroundColor: "#FFFFFF", padding: "3.5vh 2vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)", display: "flex", flexDirection: "column", gap: "1.5vh" }}>
          <div style={{ backgroundColor: "rgba(13,148,136,0.1)", padding: "0.8vh 1.2vw", borderRadius: "2vw", fontSize: "1.5vw", fontWeight: 700, color: "#0D9488", alignSelf: "flex-start" }}>Tier 1</div>
          <div style={{ fontSize: "3.5vw", fontWeight: 800, color: "#0D9488", letterSpacing: "-0.02em" }}>Free</div>
          <div style={{ fontSize: "1.8vw", fontWeight: 700, color: "#1E3A5F" }}>Lead Gen Tool</div>
          <div style={{ fontSize: "1.8vw", color: "#64748B", lineHeight: 1.5, flex: 1 }}>Survey embed for agencies and coaches to qualify leads</div>
        </div>
        <div style={{ backgroundColor: "#FFFFFF", padding: "3.5vh 2vw", borderRadius: "1vw", border: "2px solid #0D9488", boxShadow: "0 0.6vw 1.6vw rgba(13,148,136,0.12)", display: "flex", flexDirection: "column", gap: "1.5vh" }}>
          <div style={{ backgroundColor: "#0D9488", padding: "0.8vh 1.2vw", borderRadius: "2vw", fontSize: "1.5vw", fontWeight: 700, color: "#FFFFFF", alignSelf: "flex-start" }}>Tier 2</div>
          <div style={{ fontSize: "3.5vw", fontWeight: 800, color: "#1E3A5F", letterSpacing: "-0.02em" }}>$97<span style={{ fontSize: "1.8vw", fontWeight: 500 }}>/mo</span></div>
          <div style={{ fontSize: "1.8vw", fontWeight: 700, color: "#1E3A5F" }}>GrowthOS Pro</div>
          <div style={{ fontSize: "1.8vw", color: "#64748B", lineHeight: 1.5, flex: 1 }}>Full analytics dashboard, CRM export, team access</div>
        </div>
        <div style={{ backgroundColor: "#FFFFFF", padding: "3.5vh 2vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)", display: "flex", flexDirection: "column", gap: "1.5vh" }}>
          <div style={{ backgroundColor: "rgba(30,58,95,0.1)", padding: "0.8vh 1.2vw", borderRadius: "2vw", fontSize: "1.5vw", fontWeight: 700, color: "#1E3A5F", alignSelf: "flex-start" }}>Tier 3</div>
          <div style={{ fontSize: "3.5vw", fontWeight: 800, color: "#1E3A5F", letterSpacing: "-0.02em" }}>$997</div>
          <div style={{ fontSize: "1.8vw", fontWeight: 700, color: "#1E3A5F" }}>Done-With-You</div>
          <div style={{ fontSize: "1.8vw", color: "#64748B", lineHeight: 1.5, flex: 1 }}>MRI plus 90-minute strategy session, one-time</div>
        </div>
        <div style={{ backgroundColor: "#FFFFFF", padding: "3.5vh 2vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)", display: "flex", flexDirection: "column", gap: "1.5vh" }}>
          <div style={{ backgroundColor: "rgba(99,102,241,0.1)", padding: "0.8vh 1.2vw", borderRadius: "2vw", fontSize: "1.5vw", fontWeight: 700, color: "#6366F1", alignSelf: "flex-start" }}>Tier 4</div>
          <div style={{ fontSize: "3.5vw", fontWeight: 800, color: "#1E3A5F", letterSpacing: "-0.02em" }}>$497<span style={{ fontSize: "1.8vw", fontWeight: 500 }}>/mo</span></div>
          <div style={{ fontSize: "1.8vw", fontWeight: 700, color: "#1E3A5F" }}>Agency White-Label</div>
          <div style={{ fontSize: "1.8vw", color: "#64748B", lineHeight: 1.5, flex: 1 }}>Custom-branded MRI for client acquisition</div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "1.5vh", fontSize: "1.5vw", color: "#94A3B8" }}>
        <span>GrowthOS™ AI Business MRI™</span>
        <span>Confidential &amp; Proprietary · Page 15</span>
      </div>
    </div>
  );
}
