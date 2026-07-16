export default function Slide12Personas() {
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
        <span style={{ fontSize: "1.5vw", fontWeight: 500, color: "#64748B", letterSpacing: "0.05em" }}>GROWTH PERSONAS · 2026</span>
      </div>

      {/* Title */}
      <div>
        <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.6vh" }}>AI-Identified Archetypes</div>
        <h2 style={{ fontSize: "4vw", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0 }}>The 5 Growth Personas</h2>
      </div>

      {/* 5 Persona Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", gap: "2vw" }}>
        <div style={{ backgroundColor: "#FFFFFF", padding: "3vh 1.8vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)", display: "flex", flexDirection: "column" }}>
          <div style={{ width: "4vw", height: "4vw", backgroundColor: "rgba(134,239,172,0.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2vh" }}>
            <div style={{ width: "1.6vw", height: "1.6vw", backgroundColor: "#16A34A", borderRadius: "50%" }} />
          </div>
          <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#16A34A", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.8vh" }}>Emerging</div>
          <div style={{ fontSize: "2vw", fontWeight: 700, color: "#1E3A5F", lineHeight: 1.2, marginBottom: "1.5vh" }}>The Emerging Leader</div>
          <div style={{ fontSize: "1.8vw", color: "#64748B", lineHeight: 1.5 }}>Needs volume and a scalable lead engine</div>
        </div>
        <div style={{ backgroundColor: "#FFFFFF", padding: "3vh 1.8vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)", display: "flex", flexDirection: "column" }}>
          <div style={{ width: "4vw", height: "4vw", backgroundColor: "rgba(251,191,36,0.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2vh" }}>
            <div style={{ width: "1.6vw", height: "1.6vw", backgroundColor: "#D97706", borderRadius: "50%" }} />
          </div>
          <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#D97706", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.8vh" }}>Opportunity</div>
          <div style={{ fontSize: "2vw", fontWeight: 700, color: "#1E3A5F", lineHeight: 1.2, marginBottom: "1.5vh" }}>The Opportunity Hunter</div>
          <div style={{ fontSize: "1.8vw", color: "#64748B", lineHeight: 1.5 }}>Has traffic, needs conversion optimisation</div>
        </div>
        <div style={{ backgroundColor: "rgba(13,148,136,0.06)", padding: "3vh 1.8vw", borderRadius: "1vw", border: "1px solid rgba(13,148,136,0.25)", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)", display: "flex", flexDirection: "column" }}>
          <div style={{ width: "4vw", height: "4vw", backgroundColor: "rgba(13,148,136,0.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2vh" }}>
            <div style={{ width: "1.6vw", height: "1.6vw", backgroundColor: "#0D9488", borderRadius: "50%" }} />
          </div>
          <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.8vh" }}>Accelerator</div>
          <div style={{ fontSize: "2vw", fontWeight: 700, color: "#1E3A5F", lineHeight: 1.2, marginBottom: "1.5vh" }}>The Growth Accelerator</div>
          <div style={{ fontSize: "1.8vw", color: "#475569", lineHeight: 1.5 }}>Has customers, needs automation</div>
        </div>
        <div style={{ backgroundColor: "#FFFFFF", padding: "3vh 1.8vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)", display: "flex", flexDirection: "column" }}>
          <div style={{ width: "4vw", height: "4vw", backgroundColor: "rgba(99,102,241,0.12)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2vh" }}>
            <div style={{ width: "1.6vw", height: "1.6vw", backgroundColor: "#6366F1", borderRadius: "50%" }} />
          </div>
          <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#6366F1", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.8vh" }}>Architect</div>
          <div style={{ fontSize: "2vw", fontWeight: 700, color: "#1E3A5F", lineHeight: 1.2, marginBottom: "1.5vh" }}>The Conversion Architect</div>
          <div style={{ fontSize: "1.8vw", color: "#64748B", lineHeight: 1.5 }}>Needs website and funnel fixes</div>
        </div>
        <div style={{ backgroundColor: "#FFFFFF", padding: "3vh 1.8vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)", display: "flex", flexDirection: "column" }}>
          <div style={{ width: "4vw", height: "4vw", backgroundColor: "rgba(30,58,95,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2vh" }}>
            <div style={{ width: "1.6vw", height: "1.6vw", backgroundColor: "#1E3A5F", borderRadius: "50%" }} />
          </div>
          <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#1E3A5F", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.8vh" }}>Dominator</div>
          <div style={{ fontSize: "2vw", fontWeight: 700, color: "#1E3A5F", lineHeight: 1.2, marginBottom: "1.5vh" }}>The Market Dominator</div>
          <div style={{ fontSize: "1.8vw", color: "#64748B", lineHeight: 1.5 }}>Needs AI and scale infrastructure</div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "1.5vh", fontSize: "1.5vw", color: "#94A3B8" }}>
        <span>GrowthOS™ AI Business MRI™</span>
        <span>Confidential &amp; Proprietary · Page 12</span>
      </div>
    </div>
  );
}
