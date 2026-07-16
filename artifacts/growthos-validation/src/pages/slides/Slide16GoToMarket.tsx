export default function Slide16GoToMarket() {
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
        <span style={{ fontSize: "1.5vw", fontWeight: 500, color: "#64748B", letterSpacing: "0.05em" }}>GO-TO-MARKET · 2026</span>
      </div>

      {/* Title */}
      <div>
        <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.6vh" }}>Launch Strategy</div>
        <h2 style={{ fontSize: "4vw", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0 }}>Go-to-Market Strategy</h2>
      </div>

      {/* 4 Phase Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "2.5vw" }}>
        <div style={{ backgroundColor: "#FFFFFF", padding: "3.5vh 2.5vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)", position: "relative" }}>
          <div style={{ fontSize: "6vw", fontWeight: 800, color: "rgba(13,148,136,0.10)", position: "absolute", top: "1.5vh", right: "1.5vw", lineHeight: 1 }}>1</div>
          <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1.5vh" }}>Phase 1</div>
          <div style={{ fontSize: "2.2vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "1.5vh", lineHeight: 1.2 }}>Creator &amp; Coach Partnerships</div>
          <div style={{ fontSize: "1.8vw", color: "#64748B", lineHeight: 1.55 }}>Embed the free MRI as a lead magnet for coaches and content creators</div>
        </div>
        <div style={{ backgroundColor: "#FFFFFF", padding: "3.5vh 2.5vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)", position: "relative" }}>
          <div style={{ fontSize: "6vw", fontWeight: 800, color: "rgba(13,148,136,0.10)", position: "absolute", top: "1.5vh", right: "1.5vw", lineHeight: 1 }}>2</div>
          <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1.5vh" }}>Phase 2</div>
          <div style={{ fontSize: "2.2vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "1.5vh", lineHeight: 1.2 }}>LinkedIn Content Engine</div>
          <div style={{ fontSize: "1.8vw", color: "#64748B", lineHeight: 1.55 }}>Data-driven posts from real MRI insights to build authority and inbound</div>
        </div>
        <div style={{ backgroundColor: "rgba(13,148,136,0.06)", padding: "3.5vh 2.5vw", borderRadius: "1vw", border: "1px solid rgba(13,148,136,0.25)", position: "relative" }}>
          <div style={{ fontSize: "6vw", fontWeight: 800, color: "rgba(13,148,136,0.12)", position: "absolute", top: "1.5vh", right: "1.5vw", lineHeight: 1 }}>3</div>
          <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1.5vh" }}>Phase 3</div>
          <div style={{ fontSize: "2.2vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "1.5vh", lineHeight: 1.2 }}>Agency Channel</div>
          <div style={{ fontSize: "1.8vw", color: "#475569", lineHeight: 1.55 }}>White-label licensing for marketing agencies to use with their clients</div>
        </div>
        <div style={{ backgroundColor: "#FFFFFF", padding: "3.5vh 2.5vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)", position: "relative" }}>
          <div style={{ fontSize: "6vw", fontWeight: 800, color: "rgba(13,148,136,0.10)", position: "absolute", top: "1.5vh", right: "1.5vw", lineHeight: 1 }}>4</div>
          <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1.5vh" }}>Phase 4</div>
          <div style={{ fontSize: "2.2vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "1.5vh", lineHeight: 1.2 }}>SEO + Paid</div>
          <div style={{ fontSize: "1.8vw", color: "#64748B", lineHeight: 1.55 }}>Target "business growth audit" keyword cluster — every scan is a qualified lead</div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "1.5vh", fontSize: "1.5vw", color: "#94A3B8" }}>
        <span>GrowthOS™ AI Business MRI™</span>
        <span>Confidential &amp; Proprietary · Page 16</span>
      </div>
    </div>
  );
}
