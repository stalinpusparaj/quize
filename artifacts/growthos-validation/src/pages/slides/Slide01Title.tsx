const base = import.meta.env.BASE_URL;

export default function Slide01Title() {
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
        gridTemplateColumns: "1.4fr 1fr",
        gridTemplateRows: "auto 1fr auto",
        gap: "3vh 4vw",
      }}
    >
      {/* Header */}
      <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #E2E8F0", paddingBottom: "1.5vh" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
          <div style={{ width: "1.8vw", height: "1.8vw", backgroundColor: "#0D9488", borderRadius: "0.3vw" }} />
          <span style={{ fontSize: "1.5vw", fontWeight: 700, letterSpacing: "0.02em" }}>GrowthOS™</span>
        </div>
        <span style={{ fontSize: "1.5vw", fontWeight: 500, color: "#64748B", letterSpacing: "0.05em" }}>VALIDATION DECK · 2026</span>
      </div>

      {/* Left: Main Content */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.5vh" }}>
          AI Business MRI™
        </div>
        <h1 style={{ fontSize: "6.5vw", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", margin: "0 0 2vh 0" }}>
          GrowthOS™
        </h1>
        <p style={{ fontSize: "2vw", color: "#475569", lineHeight: 1.55, maxWidth: "36vw", margin: "0 0 4vh 0" }}>
          Validating a smarter way to diagnose and accelerate business growth.
        </p>
        <div style={{ display: "flex", gap: "2vw" }}>
          <div style={{ backgroundColor: "#FFFFFF", padding: "2vh 2vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)", flex: 1 }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.8vh" }}>Scans Completed</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.8vw" }}>
              <span style={{ fontSize: "3.5vw", fontWeight: 700, color: "#1E3A5F" }}>340+</span>
              <span style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", backgroundColor: "rgba(13,148,136,0.1)", padding: "0.3vh 0.7vw", borderRadius: "2vw" }}>Beta</span>
            </div>
          </div>
          <div style={{ backgroundColor: "#FFFFFF", padding: "2vh 2vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)", flex: 1 }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.8vh" }}>Completion Rate</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.8vw" }}>
              <span style={{ fontSize: "3.5vw", fontWeight: 700, color: "#1E3A5F" }}>87%</span>
              <span style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", backgroundColor: "rgba(13,148,136,0.1)", padding: "0.3vh 0.7vw", borderRadius: "2vw" }}>vs 40% avg</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Hero Image */}
      <div style={{ borderRadius: "1.2vw", overflow: "hidden", backgroundColor: "#D1E8E6" }}>
        <img
          src={`${base}hero.png`}
          crossOrigin="anonymous"
          alt="GrowthOS AI Business MRI visualization"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Footer */}
      <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "1.5vh", fontSize: "1.5vw", color: "#94A3B8" }}>
        <span>GrowthOS™ AI Business MRI™</span>
        <span>Confidential &amp; Proprietary · Validation Deck 2026</span>
      </div>
    </div>
  );
}
