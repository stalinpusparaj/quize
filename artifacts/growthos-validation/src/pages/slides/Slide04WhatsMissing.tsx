export default function Slide04WhatsMissing() {
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
        <span style={{ fontSize: "1.5vw", fontWeight: 500, color: "#64748B", letterSpacing: "0.05em" }}>MARKET GAP · 2026</span>
      </div>

      {/* Left */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1vh" }}>The Gap</div>
        <h2 style={{ fontSize: "4vw", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", margin: "0 0 3vh 0" }}>A Unified Business Scan Is Missing</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.8vh" }}>
          <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
            <div style={{ width: "2.2vw", height: "2.2vw", backgroundColor: "rgba(239,68,68,0.12)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "0.2vh" }}>
              <div style={{ width: "0.6vw", height: "0.6vw", backgroundColor: "#EF4444", borderRadius: "50%" }} />
            </div>
            <span style={{ fontSize: "2vw", color: "#334155", lineHeight: 1.5 }}>No single tool maps leads → website → CRM → automation → AI readiness</span>
          </div>
          <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
            <div style={{ width: "2.2vw", height: "2.2vw", backgroundColor: "rgba(239,68,68,0.12)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "0.2vh" }}>
              <div style={{ width: "0.6vw", height: "0.6vw", backgroundColor: "#EF4444", borderRadius: "50%" }} />
            </div>
            <span style={{ fontSize: "2vw", color: "#334155", lineHeight: 1.5 }}>Consultants are expensive and slow</span>
          </div>
          <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
            <div style={{ width: "2.2vw", height: "2.2vw", backgroundColor: "rgba(239,68,68,0.12)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "0.2vh" }}>
              <div style={{ width: "0.6vw", height: "0.6vw", backgroundColor: "#EF4444", borderRadius: "50%" }} />
            </div>
            <span style={{ fontSize: "2vw", color: "#334155", lineHeight: 1.5 }}>DIY audits are incomplete and biased</span>
          </div>
          <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
            <div style={{ width: "2.2vw", height: "2.2vw", backgroundColor: "rgba(13,148,136,0.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "0.2vh" }}>
              <div style={{ width: "0.6vw", height: "0.6vw", backgroundColor: "#0D9488", borderRadius: "50%" }} />
            </div>
            <span style={{ fontSize: "2vw", color: "#0D9488", fontWeight: 600, lineHeight: 1.5 }}>The market needs a fast, intelligent, affordable Business MRI</span>
          </div>
        </div>
      </div>

      {/* Right: Visual flow */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "0" }}>
        <div style={{ backgroundColor: "#FFFFFF", padding: "3vh 2.5vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)" }}>
          <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#64748B", marginBottom: "2vh", textTransform: "uppercase", letterSpacing: "0.05em" }}>The Opportunity</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
            <div style={{ backgroundColor: "#F8FAFC", padding: "1.2vh 1.5vw", borderRadius: "0.5vw", fontSize: "1.8vw", fontWeight: 500, color: "#475569", border: "1px solid #E2E8F0" }}>Leads</div>
            <div style={{ textAlign: "center", fontSize: "1.5vw", color: "#0D9488", fontWeight: 700 }}>+</div>
            <div style={{ backgroundColor: "#F8FAFC", padding: "1.2vh 1.5vw", borderRadius: "0.5vw", fontSize: "1.8vw", fontWeight: 500, color: "#475569", border: "1px solid #E2E8F0" }}>Website</div>
            <div style={{ textAlign: "center", fontSize: "1.5vw", color: "#0D9488", fontWeight: 700 }}>+</div>
            <div style={{ backgroundColor: "#F8FAFC", padding: "1.2vh 1.5vw", borderRadius: "0.5vw", fontSize: "1.8vw", fontWeight: 500, color: "#475569", border: "1px solid #E2E8F0" }}>CRM + AI</div>
            <div style={{ textAlign: "center", fontSize: "1.5vw", color: "#0D9488", fontWeight: 700 }}>↓</div>
            <div style={{ backgroundColor: "rgba(13,148,136,0.1)", padding: "1.5vh 1.5vw", borderRadius: "0.5vw", fontSize: "1.8vw", fontWeight: 700, color: "#0D9488", border: "1px solid rgba(13,148,136,0.3)", textAlign: "center" }}>GrowthOS™</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "1.5vh", fontSize: "1.5vw", color: "#94A3B8" }}>
        <span>GrowthOS™ AI Business MRI™</span>
        <span>Confidential &amp; Proprietary · Page 4</span>
      </div>
    </div>
  );
}
