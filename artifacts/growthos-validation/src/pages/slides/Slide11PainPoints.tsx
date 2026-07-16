export default function Slide11PainPoints() {
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
        <span style={{ fontSize: "1.5vw", fontWeight: 500, color: "#64748B", letterSpacing: "0.05em" }}>PAIN POINT VALIDATION · 2026</span>
      </div>

      {/* Title */}
      <div>
        <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.6vh" }}>Survey Data</div>
        <h2 style={{ fontSize: "4vw", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0 }}>Validated Pain Points (Top 5)</h2>
      </div>

      {/* Bar chart items */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.8vh" }}>
        <div style={{ backgroundColor: "#FFFFFF", padding: "2vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.3vw 0.8vw rgba(30,58,95,0.04)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8vh" }}>
            <span style={{ fontSize: "2vw", fontWeight: 600, color: "#1E3A5F" }}>#1 · Not enough qualified leads</span>
            <span style={{ fontSize: "2.5vw", fontWeight: 800, color: "#0D9488" }}>78%</span>
          </div>
          <div style={{ height: "0.8vh", backgroundColor: "#E2E8F0", borderRadius: "0.4vw", overflow: "hidden" }}>
            <div style={{ width: "78%", height: "100%", backgroundColor: "#0D9488", borderRadius: "0.4vw" }} />
          </div>
        </div>
        <div style={{ backgroundColor: "#FFFFFF", padding: "2vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.3vw 0.8vw rgba(30,58,95,0.04)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8vh" }}>
            <span style={{ fontSize: "2vw", fontWeight: 600, color: "#1E3A5F" }}>#2 · Everything is manual — no automation</span>
            <span style={{ fontSize: "2.5vw", fontWeight: 800, color: "#0D9488" }}>71%</span>
          </div>
          <div style={{ height: "0.8vh", backgroundColor: "#E2E8F0", borderRadius: "0.4vw", overflow: "hidden" }}>
            <div style={{ width: "71%", height: "100%", backgroundColor: "#0D9488", borderRadius: "0.4vw" }} />
          </div>
        </div>
        <div style={{ backgroundColor: "#FFFFFF", padding: "2vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.3vw 0.8vw rgba(30,58,95,0.04)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8vh" }}>
            <span style={{ fontSize: "2vw", fontWeight: 600, color: "#1E3A5F" }}>#3 · Website not converting visitors</span>
            <span style={{ fontSize: "2.5vw", fontWeight: 800, color: "#0D9488" }}>65%</span>
          </div>
          <div style={{ height: "0.8vh", backgroundColor: "#E2E8F0", borderRadius: "0.4vw", overflow: "hidden" }}>
            <div style={{ width: "65%", height: "100%", backgroundColor: "rgba(13,148,136,0.75)", borderRadius: "0.4vw" }} />
          </div>
        </div>
        <div style={{ backgroundColor: "#FFFFFF", padding: "2vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.3vw 0.8vw rgba(30,58,95,0.04)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8vh" }}>
            <span style={{ fontSize: "2vw", fontWeight: 600, color: "#1E3A5F" }}>#4 · Don't know what's working in marketing</span>
            <span style={{ fontSize: "2.5vw", fontWeight: 800, color: "#1E3A5F" }}>61%</span>
          </div>
          <div style={{ height: "0.8vh", backgroundColor: "#E2E8F0", borderRadius: "0.4vw", overflow: "hidden" }}>
            <div style={{ width: "61%", height: "100%", backgroundColor: "rgba(13,148,136,0.55)", borderRadius: "0.4vw" }} />
          </div>
        </div>
        <div style={{ backgroundColor: "#FFFFFF", padding: "2vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.3vw 0.8vw rgba(30,58,95,0.04)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8vh" }}>
            <span style={{ fontSize: "2vw", fontWeight: 600, color: "#1E3A5F" }}>#5 · Tried solutions before but saw no results</span>
            <span style={{ fontSize: "2.5vw", fontWeight: 800, color: "#1E3A5F" }}>54%</span>
          </div>
          <div style={{ height: "0.8vh", backgroundColor: "#E2E8F0", borderRadius: "0.4vw", overflow: "hidden" }}>
            <div style={{ width: "54%", height: "100%", backgroundColor: "rgba(13,148,136,0.40)", borderRadius: "0.4vw" }} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "1.5vh", fontSize: "1.5vw", color: "#94A3B8" }}>
        <span>GrowthOS™ AI Business MRI™</span>
        <span>Confidential &amp; Proprietary · Page 11</span>
      </div>
    </div>
  );
}
