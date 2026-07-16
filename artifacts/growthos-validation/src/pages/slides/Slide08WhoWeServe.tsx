export default function Slide08WhoWeServe() {
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
        <span style={{ fontSize: "1.5vw", fontWeight: 500, color: "#64748B", letterSpacing: "0.05em" }}>TARGET MARKET · 2026</span>
      </div>

      {/* Title */}
      <div>
        <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.6vh" }}>Ideal Customer Profile</div>
        <h2 style={{ fontSize: "4vw", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0 }}>Who We Serve</h2>
      </div>

      {/* 4-card grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "2.5vw" }}>
        <div style={{ backgroundColor: "#FFFFFF", padding: "3.5vh 2.5vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)" }}>
          <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1.5vh" }}>Who</div>
          <div style={{ fontSize: "2.5vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "1vh" }}>Founders, Directors &amp; Sales Leaders</div>
          <div style={{ fontSize: "2vw", color: "#64748B", lineHeight: 1.45 }}>Primary: SMEs with 2–250 employees who drive growth strategy</div>
        </div>
        <div style={{ backgroundColor: "#FFFFFF", padding: "3.5vh 2.5vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)" }}>
          <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1.5vh" }}>Industries</div>
          <div style={{ fontSize: "2.5vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "1vh" }}>7 High-Value Verticals</div>
          <div style={{ fontSize: "2vw", color: "#64748B", lineHeight: 1.45 }}>Healthcare, Agency, SaaS, Real Estate, Consulting, Education, Finance</div>
        </div>
        <div style={{ backgroundColor: "#FFFFFF", padding: "3.5vh 2.5vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)" }}>
          <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1.5vh" }}>Revenue Stage</div>
          <div style={{ fontSize: "2.5vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "1vh" }}>Growing to Scaling</div>
          <div style={{ fontSize: "2vw", color: "#64748B", lineHeight: 1.45 }}>$100K–$10M ARR — have traction, now need systems</div>
        </div>
        <div style={{ backgroundColor: "rgba(13,148,136,0.06)", padding: "3.5vh 2.5vw", borderRadius: "1vw", border: "1px solid rgba(13,148,136,0.25)", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)" }}>
          <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1.5vh" }}>Pain Profile</div>
          <div style={{ fontSize: "2.5vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "1vh" }}>Knows Something Is Wrong</div>
          <div style={{ fontSize: "2vw", color: "#475569", lineHeight: 1.45 }}>Enough success to know what's missing, not enough systems to fix it</div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "1.5vh", fontSize: "1.5vw", color: "#94A3B8" }}>
        <span>GrowthOS™ AI Business MRI™</span>
        <span>Confidential &amp; Proprietary · Page 8</span>
      </div>
    </div>
  );
}
