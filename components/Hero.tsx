"use client";

export default function Hero() {
  return (
    <section id="about" style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      textAlign: "center", padding: "120px 24px 80px",
      background: "var(--bg)", position: "relative", overflow: "hidden",
    }}>
      {/* Background glow */}
      <div style={{
        position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
        width: 700, height: 700,
        background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", maxWidth: 780 }}>
        {/* Status */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid var(--border)", borderRadius: 20, padding: "6px 16px", marginBottom: 32 }}>
          <span style={{ width: 7, height: 7, background: "#22c55e", borderRadius: "50%", display: "inline-block", animation: "pulse 2s infinite" }} />
          <span style={{ color: "var(--muted)", fontSize: 13, fontWeight: 500 }}>Open to opportunities · Toronto, Canada</span>
        </div>

        <h1 style={{ fontSize: "clamp(2.8rem, 6vw, 4.2rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: 20 }}>
          Hi, I&apos;m <span className="gradient-text">Vrunal Patel</span>
        </h1>

        {/* Dual-audience tagline */}
        <p style={{ fontSize: "clamp(1.05rem, 2.2vw, 1.3rem)", color: "var(--text)", fontWeight: 500, marginBottom: 12, lineHeight: 1.5 }}>
          I build AI systems that help teams find answers in seconds, not hours.
        </p>
        <p style={{ fontSize: "clamp(0.85rem, 1.5vw, 1rem)", color: "var(--muted)", fontWeight: 400, marginBottom: 32, lineHeight: 1.6 }}>
          Specialized in Retrieval-Augmented Generation · LangChain · .NET · Python · Azure
        </p>

        <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.9, maxWidth: 600, margin: "0 auto 44px" }}>
          AI Engineer with hands-on experience taking generative AI from prototype to production.{" "}
          Built an enterprise RAG system at{" "}
          <span style={{ color: "var(--text)", fontWeight: 600 }}>Kinectrics</span>{" "}
          that replaced manual document lookup with instant semantic search.{" "}
          Achieved{" "}
          <span style={{ color: "var(--accent)", fontWeight: 600 }}>95% accuracy</span>{" "}
          on a RAG chatbot and{" "}
          <span style={{ color: "var(--accent2)", fontWeight: 600 }}>85% accuracy</span>{" "}
          on a live big data pipeline.{" "}
          ISTQB certified. Strong .NET &amp; Python backend foundation.
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#projects" className="btn-primary" style={{ textDecoration: "none" }}>See My Work</a>
          <a href="#contact" className="btn-ghost">Get In Touch</a>
          <a href="https://www.linkedin.com/in/vrunal-patel-91011619b/" target="_blank" rel="noopener noreferrer" className="btn-ghost">LinkedIn ↗</a>
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 0, justifyContent: "center", marginTop: 60, flexWrap: "wrap", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden", maxWidth: 580, margin: "60px auto 0" }}>
          {[
            { num: "4+", label: "Years building" },
            { num: "95%", label: "RAG accuracy" },
            { num: "85%", label: "Pipeline accuracy" },
            { num: "ISTQB", label: "Certified" },
          ].map((s, i) => (
            <div key={s.label} style={{ flex: 1, padding: "20px 12px", textAlign: "center", borderRight: i < 3 ? "1px solid var(--border)" : "none" }}>
              <div style={{ fontWeight: 800, fontSize: 20, color: "var(--accent)" }}>{s.num}</div>
              <div style={{ color: "var(--muted)", fontSize: 11, marginTop: 4, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }`}</style>
    </section>
  );
}
