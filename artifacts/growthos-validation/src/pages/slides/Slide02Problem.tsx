export default function Slide02Problem() {
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
        <span style={{ fontSize: "1.5vw", fontWeight: 500, color: "#64748B", letterSpacing: "0.05em" }}>THE PROBLEM · 2026</span>
      </div>

      {/* Left: Content */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1vh" }}>Validation Research</div>
        <h2 style={{ fontSize: "4.5vw", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", margin: "0 0 3vh 0" }}>Businesses Are Flying Blind</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.8vh" }}>
          <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start", backgroundColor: "#FFFFFF", padding: "1.8vh 1.8vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.3vw 0.8vw rgba(30,58,95,0.05)" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", backgroundColor: "#0D9488", marginTop: "0.8vh", flexShrink: 0 }} />
            <span style={{ fontSize: "2vw", color: "#334155", lineHeight: 1.45 }}>82% of businesses cannot identify their #1 growth bottleneck</span>
          </div>
          <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start", backgroundColor: "#FFFFFF", padding: "1.8vh 1.8vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.3vw 0.8vw rgba(30,58,95,0.05)" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", backgroundColor: "#0D9488", marginTop: "0.8vh", flexShrink: 0 }} />
            <span style={{ fontSize: "2vw", color: "#334155", lineHeight: 1.45 }}>Most decisions are based on gut instinct, not data</span>
          </div>
          <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start", backgroundColor: "#FFFFFF", padding: "1.8vh 1.8vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.3vw 0.8vw rgba(30,58,95,0.05)" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", backgroundColor: "#0D9488", marginTop: "0.8vh", flexShrink: 0 }} />
            <span style={{ fontSize: "2vw", color: "#334155", lineHeight: 1.45 }}>Fragmented tools — CRM, analytics, ads — never talk to each other</span>
          </div>
          <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start", backgroundColor: "#FFFFFF", padding: "1.8vh 1.8vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.3vw 0.8vw rgba(30,58,95,0.05)" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", backgroundColor: "#0D9488", marginTop: "0.8vh", flexShrink: 0 }} />
            <span style={{ fontSize: "2vw", color: "#334155", lineHeight: 1.45 }}>By the time a problem is obvious, revenue has already been lost</span>
          </div>
        </div>
      </div>

      {/* Right: Visual */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "2vh" }}>
        <div style={{ backgroundColor: "#FFFFFF", padding: "3vh 2.5vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)", textAlign: "center" }}>
          <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#64748B", marginBottom: "2.5vh", textTransform: "uppercase", letterSpacing: "0.05em" }}>Disconnected Stack</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
            <div style={{ backgroundColor: "#F1F5F9", padding: "1.2vh 1.5vw", borderRadius: "0.5vw", fontSize: "1.8vw", fontWeight: 600, color: "#64748B", border: "1px dashed #CBD5E1" }}>CRM</div>
            <div style={{ backgroundColor: "#F1F5F9", padding: "1.2vh 1.5vw", borderRadius: "0.5vw", fontSize: "1.8vw", fontWeight: 600, color: "#64748B", border: "1px dashed #CBD5E1" }}>Analytics</div>
            <div style={{ backgroundColor: "#F1F5F9", padding: "1.2vh 1.5vw", borderRadius: "0.5vw", fontSize: "1.8vw", fontWeight: 600, color: "#64748B", border: "1px dashed #CBD5E1" }}>Ads</div>
            <div style={{ backgroundColor: "#F1F5F9", padding: "1.2vh 1.5vw", borderRadius: "0.5vw", fontSize: "1.8vw", fontWeight: 600, color: "#64748B", border: "1px dashed #CBD5E1" }}>Website</div>
          </div>
          <div style={{ marginTop: "2vh", fontSize: "1.5vw", color: "#94A3B8" }}>No unified view</div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "1.5vh", fontSize: "1.5vw", color: "#94A3B8" }}>
        <span>GrowthOS™ AI Business MRI™</span>
        <span>Confidential &amp; Proprietary · Page 2</span>
      </div>
    </div>
  );
}
