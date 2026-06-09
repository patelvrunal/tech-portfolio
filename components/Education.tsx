"use client";

const education = [
  {
    school: "George Brown College",
    degree: "Postgraduate Certificate",
    field: "Applied AI Solutions",
    period: "Jan 2025 – Dec 2025",
    location: "Toronto, ON",
    icon: "🎓",
  },
  {
    school: "Conestoga College",
    degree: "Postgraduate Certificate",
    field: "Big Data Solution Architecture",
    period: "Jan 2024 – Aug 2024",
    location: "Kitchener, ON",
    icon: "🎓",
  },
  {
    school: "GSFC University",
    degree: "Bachelor of Technology (BTech)",
    field: "Computer Science & Technology",
    period: "Jun 2019 – May 2023",
    location: "Gujarat, India",
    icon: "🏛️",
  },
];

const certs = [
  { name: "ISTQB® Certified Tester, Foundation Level (v4.0)", sub: "Cert #26-CTFL 4-273922-12 · Feb 2026", icon: "✅" },
  { name: "Citi ICG Technology Software Development Simulation", sub: "Forage · Oct 2025", icon: "🏦" },
];

export default function Education() {
  return (
    <section id="education" className="section" style={{ background: "var(--bg)" }}>
      <div className="container">
        <h2 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 800, marginBottom: 8, textAlign: "center" }}>Education</h2>
        <p style={{ color: "var(--muted)", textAlign: "center", marginBottom: 48 }}>Academic background & certifications</p>

        <div className="edu-grid">
          {/* Degrees */}
          <div>
            <h3 style={{ fontWeight: 700, fontSize: 14, color: "var(--accent)", marginBottom: 20, textTransform: "uppercase", letterSpacing: "0.08em" }}>Degrees</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {education.map((edu, i) => (
                <div key={i} className="card" style={{ padding: 20 }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 24 }}>{edu.icon}</span>
                    <div>
                      <h4 style={{ fontWeight: 700, fontSize: 15 }}>{edu.school}</h4>
                      <p style={{ color: "var(--accent)", fontSize: 13, fontWeight: 600 }}>{edu.degree}</p>
                      <p style={{ color: "var(--muted)", fontSize: 13 }}>{edu.field}</p>
                      <p style={{ color: "var(--muted)", fontSize: 12, marginTop: 4 }}>{edu.period} · {edu.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certs + Languages */}
          <div>
            <h3 style={{ fontWeight: 700, fontSize: 14, color: "var(--accent2)", marginBottom: 20, textTransform: "uppercase", letterSpacing: "0.08em" }}>Certifications</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {certs.map((cert, i) => (
                <div key={i} className="card" style={{ padding: 20, display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{cert.icon}</span>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.5 }}>{cert.name}</p>
                    <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>{cert.sub}</p>
                  </div>
                </div>
              ))}

              {/* Languages */}
              <div className="card" style={{ padding: 20 }}>
                <h4 style={{ fontWeight: 700, fontSize: 14, marginBottom: 14 }}>Languages</h4>
                {[
                  { lang: "English", level: "Full Professional" },
                  { lang: "Hindi", level: "Professional Working" },
                  { lang: "Gujarati", level: "Native / Bilingual" },
                ].map(l => (
                  <div key={l.lang} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontSize: 13, fontWeight: 600 }}>{l.lang}</span>
                    <span style={{ fontSize: 12, color: "var(--muted)" }}>{l.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
