export default function Slide07Dimensions() {
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
        <span style={{ fontSize: "1.5vw", fontWeight: 500, color: "#64748B", letterSpacing: "0.05em" }}>THE FRAMEWORK · 2026</span>
      </div>

      {/* Title */}
      <div>
        <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.6vh" }}>Comprehensive Coverage</div>
        <h2 style={{ fontSize: "3.8vw", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0 }}>The 10 Growth Dimensions</h2>
      </div>

      {/* 2x5 Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5vw" }}>
        <div style={{ display: "flex", gap: "1.5vw", alignItems: "center", backgroundColor: "#FFFFFF", padding: "1.8vh 2vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.2vw 0.6vw rgba(30,58,95,0.04)" }}>
          <div style={{ width: "2.5vw", height: "2.5vw", backgroundColor: "rgba(13,148,136,0.1)", borderRadius: "0.5vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontSize: "1.5vw", fontWeight: 700, color: "#0D9488" }}>1</span>
          </div>
          <span style={{ fontSize: "1.9vw", fontWeight: 500, color: "#334155" }}>Business Identity &amp; Stage</span>
        </div>
        <div style={{ display: "flex", gap: "1.5vw", alignItems: "center", backgroundColor: "#FFFFFF", padding: "1.8vh 2vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.2vw 0.6vw rgba(30,58,95,0.04)" }}>
          <div style={{ width: "2.5vw", height: "2.5vw", backgroundColor: "rgba(13,148,136,0.1)", borderRadius: "0.5vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontSize: "1.5vw", fontWeight: 700, color: "#0D9488" }}>6</span>
          </div>
          <span style={{ fontSize: "1.9vw", fontWeight: 500, color: "#334155" }}>Marketing Automation</span>
        </div>
        <div style={{ display: "flex", gap: "1.5vw", alignItems: "center", backgroundColor: "#FFFFFF", padding: "1.8vh 2vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.2vw 0.6vw rgba(30,58,95,0.04)" }}>
          <div style={{ width: "2.5vw", height: "2.5vw", backgroundColor: "rgba(13,148,136,0.1)", borderRadius: "0.5vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontSize: "1.5vw", fontWeight: 700, color: "#0D9488" }}>2</span>
          </div>
          <span style={{ fontSize: "1.9vw", fontWeight: 500, color: "#334155" }}>Lead Generation &amp; Sources</span>
        </div>
        <div style={{ display: "flex", gap: "1.5vw", alignItems: "center", backgroundColor: "#FFFFFF", padding: "1.8vh 2vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.2vw 0.6vw rgba(30,58,95,0.04)" }}>
          <div style={{ width: "2.5vw", height: "2.5vw", backgroundColor: "rgba(13,148,136,0.1)", borderRadius: "0.5vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontSize: "1.5vw", fontWeight: 700, color: "#0D9488" }}>7</span>
          </div>
          <span style={{ fontSize: "1.9vw", fontWeight: 500, color: "#334155" }}>Analytics &amp; Data Literacy</span>
        </div>
        <div style={{ display: "flex", gap: "1.5vw", alignItems: "center", backgroundColor: "#FFFFFF", padding: "1.8vh 2vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.2vw 0.6vw rgba(30,58,95,0.04)" }}>
          <div style={{ width: "2.5vw", height: "2.5vw", backgroundColor: "rgba(13,148,136,0.1)", borderRadius: "0.5vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontSize: "1.5vw", fontWeight: 700, color: "#0D9488" }}>3</span>
          </div>
          <span style={{ fontSize: "1.9vw", fontWeight: 500, color: "#334155" }}>Website Performance &amp; Conversion</span>
        </div>
        <div style={{ display: "flex", gap: "1.5vw", alignItems: "center", backgroundColor: "#FFFFFF", padding: "1.8vh 2vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.2vw 0.6vw rgba(30,58,95,0.04)" }}>
          <div style={{ width: "2.5vw", height: "2.5vw", backgroundColor: "rgba(13,148,136,0.1)", borderRadius: "0.5vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontSize: "1.5vw", fontWeight: 700, color: "#0D9488" }}>8</span>
          </div>
          <span style={{ fontSize: "1.9vw", fontWeight: 500, color: "#334155" }}>AI Readiness &amp; Adoption</span>
        </div>
        <div style={{ display: "flex", gap: "1.5vw", alignItems: "center", backgroundColor: "#FFFFFF", padding: "1.8vh 2vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.2vw 0.6vw rgba(30,58,95,0.04)" }}>
          <div style={{ width: "2.5vw", height: "2.5vw", backgroundColor: "rgba(13,148,136,0.1)", borderRadius: "0.5vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontSize: "1.5vw", fontWeight: 700, color: "#0D9488" }}>4</span>
          </div>
          <span style={{ fontSize: "1.9vw", fontWeight: 500, color: "#334155" }}>CRM &amp; Sales Pipeline</span>
        </div>
        <div style={{ display: "flex", gap: "1.5vw", alignItems: "center", backgroundColor: "#FFFFFF", padding: "1.8vh 2vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.2vw 0.6vw rgba(30,58,95,0.04)" }}>
          <div style={{ width: "2.5vw", height: "2.5vw", backgroundColor: "rgba(13,148,136,0.1)", borderRadius: "0.5vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontSize: "1.5vw", fontWeight: 700, color: "#0D9488" }}>9</span>
          </div>
          <span style={{ fontSize: "1.9vw", fontWeight: 500, color: "#334155" }}>Pain Point Depth</span>
        </div>
        <div style={{ display: "flex", gap: "1.5vw", alignItems: "center", backgroundColor: "#FFFFFF", padding: "1.8vh 2vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.2vw 0.6vw rgba(30,58,95,0.04)" }}>
          <div style={{ width: "2.5vw", height: "2.5vw", backgroundColor: "rgba(13,148,136,0.1)", borderRadius: "0.5vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontSize: "1.5vw", fontWeight: 700, color: "#0D9488" }}>5</span>
          </div>
          <span style={{ fontSize: "1.9vw", fontWeight: 500, color: "#334155" }}>Customer Journey &amp; Follow-Up</span>
        </div>
        <div style={{ display: "flex", gap: "1.5vw", alignItems: "center", backgroundColor: "rgba(13,148,136,0.06)", padding: "1.8vh 2vw", borderRadius: "0.8vw", border: "1px solid rgba(13,148,136,0.2)", boxShadow: "0 0.2vw 0.6vw rgba(30,58,95,0.04)" }}>
          <div style={{ width: "2.5vw", height: "2.5vw", backgroundColor: "#0D9488", borderRadius: "0.5vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontSize: "1.5vw", fontWeight: 700, color: "#FFFFFF" }}>10</span>
          </div>
          <span style={{ fontSize: "1.9vw", fontWeight: 600, color: "#0D9488" }}>Buying Behaviour &amp; Investment Appetite</span>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "1.5vh", fontSize: "1.5vw", color: "#94A3B8" }}>
        <span>GrowthOS™ AI Business MRI™</span>
        <span>Confidential &amp; Proprietary · Page 7</span>
      </div>
    </div>
  );
}
