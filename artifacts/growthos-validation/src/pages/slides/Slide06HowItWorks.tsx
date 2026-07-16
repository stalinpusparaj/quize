export default function Slide06HowItWorks() {
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
        <span style={{ fontSize: "1.5vw", fontWeight: 500, color: "#64748B", letterSpacing: "0.05em" }}>THE PROCESS · 2026</span>
      </div>

      {/* Title */}
      <div>
        <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.8vh" }}>How It Works</div>
        <h2 style={{ fontSize: "4vw", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0 }}>The 3-Step Scan</h2>
      </div>

      {/* 3 Step Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "3vw", alignContent: "center" }}>
        <div style={{ backgroundColor: "#FFFFFF", padding: "5vh 3vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)", position: "relative" }}>
          <div style={{ fontSize: "8vw", fontWeight: 800, color: "rgba(13,148,136,0.12)", lineHeight: 1, marginBottom: "1.5vh", letterSpacing: "-0.03em" }}>01</div>
          <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1vh" }}>Scan</div>
          <div style={{ fontSize: "2.5vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "1.5vh" }}>Complete the MRI</div>
          <div style={{ fontSize: "2vw", color: "#64748B", lineHeight: 1.5 }}>Respondent completes the 3-minute AI Business MRI across 10 growth dimensions</div>
        </div>
        <div style={{ backgroundColor: "#FFFFFF", padding: "5vh 3vw", borderRadius: "1vw", border: "2px solid #0D9488", boxShadow: "0 0.8vw 2vw rgba(13,148,136,0.12)", position: "relative" }}>
          <div style={{ fontSize: "8vw", fontWeight: 800, color: "rgba(13,148,136,0.15)", lineHeight: 1, marginBottom: "1.5vh", letterSpacing: "-0.03em" }}>02</div>
          <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1vh" }}>Analyse</div>
          <div style={{ fontSize: "2.5vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "1.5vh" }}>AI Maps Answers</div>
          <div style={{ fontSize: "2vw", color: "#64748B", lineHeight: 1.5 }}>AI maps answers across 10 growth dimensions and identifies patterns and bottlenecks</div>
        </div>
        <div style={{ backgroundColor: "#FFFFFF", padding: "5vh 3vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vw 1.2vw rgba(30,58,95,0.06)", position: "relative" }}>
          <div style={{ fontSize: "8vw", fontWeight: 800, color: "rgba(13,148,136,0.12)", lineHeight: 1, marginBottom: "1.5vh", letterSpacing: "-0.03em" }}>03</div>
          <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1vh" }}>Prescribe</div>
          <div style={{ fontSize: "2.5vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "1.5vh" }}>Personalised Plan</div>
          <div style={{ fontSize: "2vw", color: "#64748B", lineHeight: 1.5 }}>Personalised Growth Persona and action plan delivered instantly</div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "1.5vh", fontSize: "1.5vw", color: "#94A3B8" }}>
        <span>GrowthOS™ AI Business MRI™</span>
        <span>Confidential &amp; Proprietary · Page 6</span>
      </div>
    </div>
  );
}
