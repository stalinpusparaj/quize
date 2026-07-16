export default function Slide17CTA() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{
        backgroundColor: "#0D1E2E",
        fontFamily: "'Inter', sans-serif",
        color: "#FFFFFF",
        padding: "4vh 4vw",
        boxSizing: "border-box",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto 1fr auto",
        gap: "3vh",
      }}
    >
      {/* Teal accent line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "0.6vh", backgroundColor: "#0D9488" }} />

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.12)", paddingBottom: "1.5vh" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
          <div style={{ width: "1.8vw", height: "1.8vw", backgroundColor: "#0D9488", borderRadius: "0.3vw" }} />
          <span style={{ fontSize: "1.5vw", fontWeight: 700, color: "#FFFFFF" }}>GrowthOS™</span>
        </div>
        <span style={{ fontSize: "1.5vw", fontWeight: 500, color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em" }}>EARLY ACCESS · 2026</span>
      </div>

      {/* Main Content */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "2vh" }}>Join Us</div>
        <h1 style={{ fontSize: "6vw", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", margin: "0 0 2vh 0", maxWidth: "70vw" }}>
          Join the GrowthOS™ Early Access
        </h1>
        <p style={{ fontSize: "2.2vw", color: "rgba(255,255,255,0.7)", lineHeight: 1.55, margin: "0 0 6vh 0", maxWidth: "55vw" }}>
          We're onboarding founding partners, early adopters, and strategic investors.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2.5vw", width: "100%", maxWidth: "70vw" }}>
          <div style={{ backgroundColor: "rgba(255,255,255,0.07)", padding: "3vh 2.5vw", borderRadius: "1vw", border: "1px solid rgba(255,255,255,0.12)" }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1.5vh" }}>Early Access</div>
            <div style={{ fontSize: "2vw", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.8vh" }}>growthos.ai/early</div>
            <div style={{ fontSize: "1.8vw", color: "rgba(255,255,255,0.55)" }}>Sign up for beta access</div>
          </div>
          <div style={{ backgroundColor: "rgba(13,148,136,0.2)", padding: "3vh 2.5vw", borderRadius: "1vw", border: "1px solid rgba(13,148,136,0.4)" }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1.5vh" }}>Partnerships</div>
            <div style={{ fontSize: "2vw", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.8vh" }}>partnerships@growthos.ai</div>
            <div style={{ fontSize: "1.8vw", color: "rgba(255,255,255,0.55)" }}>Agency and reseller enquiries</div>
          </div>
          <div style={{ backgroundColor: "rgba(255,255,255,0.07)", padding: "3vh 2.5vw", borderRadius: "1vw", border: "1px solid rgba(255,255,255,0.12)" }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1.5vh" }}>Discovery Call</div>
            <div style={{ fontSize: "2vw", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.8vh" }}>calendly.com/growthos</div>
            <div style={{ fontSize: "1.8vw", color: "rgba(255,255,255,0.55)" }}>Book a 20-minute call</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: "1.5vh", fontSize: "1.5vw", color: "rgba(255,255,255,0.35)" }}>
        <span>GrowthOS™ AI Business MRI™</span>
        <span>Confidential &amp; Proprietary · Page 17</span>
      </div>
    </div>
  );
}
