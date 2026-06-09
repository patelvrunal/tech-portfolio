"use client";

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ background: "var(--bg3)" }}>
      <div className="container" style={{ maxWidth: 700, textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 800, marginBottom: 8 }}>Let&apos;s Build Something</h2>
        <p style={{ color: "var(--muted)", marginBottom: 48, fontSize: 16, lineHeight: 1.7 }}>
          Open to AI engineering, full-stack, .NET, and leadership roles across Canada.
          Based in Toronto. Open to relocation.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
          <a href="mailto:vrunal.s.patel@gmail.com" className="btn-primary" style={{ textDecoration: "none", fontSize: 15, padding: "14px 36px" }}>
            📧 vrunal.s.patel@gmail.com
          </a>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="https://www.linkedin.com/in/vrunal-patel-91011619b/" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              💼 LinkedIn
            </a>
            <a href="tel:+15194897095" className="btn-ghost">
              📞 +1 (519) 489-7095
            </a>
          </div>
        </div>

        <p style={{ color: "var(--muted)", marginTop: 48, fontSize: 13 }}>
          Based in Toronto · Open to relocation across Canada
        </p>
      </div>
    </section>
  );
}
