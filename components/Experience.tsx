"use client";

const jobs = [
  {
    company: "Kinectrics",
    role: "AI Engineer Co-op",
    period: "Sep 2025 – Dec 2025",
    location: "Toronto, ON",
    plain: "Built an AI-powered search system for a nuclear & energy testing company so engineers can instantly search thousands of technical documents by asking questions in plain English, replacing hours of manual lookup.",
    highlights: [
      "Architected the full RAG pipeline: document ingestion & chunking with Pandas, vector embedding in ChromaDB, retrieval orchestration via LangChain, and LLM generation using Azure OpenAI, each stage optimised for accuracy and latency",
      "Applied LangGraph to explore multi-step agentic orchestration, enabling stateful and complex query workflows",
      "Implemented automated evaluation frameworks and prompt engineering to monitor LLM performance and reduce hallucinations",
      "Built robust ETL pipelines using NumPy & Pandas to process structured and unstructured industrial data sources",
      "Developed REST API endpoints to expose the RAG system as a backend service; contributed React front-end features on a digital learning platform",
      "Produced thorough documentation and conducted unit testing and code reviews to meet enterprise-grade standards ahead of stakeholder handoff",
    ],
    tags: ["Python", "LangChain", "LangGraph", "ChromaDB", "Azure OpenAI", "Pandas", "NumPy", "ETL", "REST API", "React"],
  },
  {
    company: "NetWeb Software",
    role: "Software Developer (Acting Team Lead)",
    period: "Jan 2023 – Dec 2023",
    location: "India",
    plain: "Built scalable backend systems and client-facing dashboards for multiple enterprise clients; stepped up as acting team lead when senior engineers were unavailable, keeping every project on track.",
    highlights: [
      "Engineered scalable backend APIs and database integrations in .NET Core and C#, with SQL schema optimisation for high-traffic applications",
      "Created Power BI and Excel dashboards that gave clients clear, actionable visibility into their data",
      "Stepped up as Acting Team Lead: ran sprint planning, managed client requirement gathering, and ensured on-time delivery across concurrent projects",
      "Integrated IoT sensor data and Python into a human-following robot prototype, bridging hardware and software",
    ],
    tags: [".NET Core", "C#", "SQL", "PostgreSQL", "REST APIs", "JavaScript", "MongoDB", "Azure", "Power BI"],
  },
  {
    company: "Tntra",
    role: "Software Intern",
    period: "Sep 2022 – Dec 2022",
    location: "Vadodara, India",
    plain: "First industry role: contributed to real client projects on a MERN stack team, learning professional engineering practices.",
    highlights: [
      "Contributed to MERN stack and Python projects for real client deliverables",
      "Implemented MVC structures to improve project organisation and code maintainability",
    ],
    tags: ["MERN", "Python", "MVC", "JavaScript"],
  },
  {
    company: "Vulphere Technologies",
    role: "WordPress Developer",
    period: "Sep 2020 – Jan 2021",
    location: "Vadodara, India",
    plain: "Built custom websites and web applications for foreign clients at an early-stage IT startup.",
    highlights: [
      "Delivered customised websites and personalised web apps for international clients",
    ],
    tags: ["WordPress", "Web Development", "CSS", "JavaScript"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: "var(--bg3)" }}>
      <div className="container" style={{ maxWidth: 920 }}>
        <h2 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 800, marginBottom: 8, textAlign: "center" }}>Experience</h2>
        <p style={{ color: "var(--muted)", textAlign: "center", marginBottom: 48 }}>Where I&apos;ve built things that matter</p>

        <div style={{ position: "relative", paddingLeft: 32 }}>
          <div style={{ position: "absolute", left: 8, top: 8, bottom: 8, width: 2, background: "var(--border)" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {jobs.map((job, i) => (
              <div key={i} style={{ position: "relative" }}>
                <div style={{
                  position: "absolute", left: -28, top: 22,
                  width: 12, height: 12, background: i === 0 ? "var(--accent)" : "var(--border)",
                  borderRadius: "50%", border: "2px solid var(--bg)",
                }} />
                <div className="card" style={{ padding: 28 }}>
                  {/* Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                    <div>
                      <h3 style={{ fontWeight: 800, fontSize: 19 }}>{job.company}</h3>
                      <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: 14 }}>{job.role}</p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <p style={{ color: "var(--muted)", fontSize: 13 }}>{job.period}</p>
                      <p style={{ color: "var(--muted)", fontSize: 13 }}>{job.location}</p>
                    </div>
                  </div>

                  {/* Plain English summary */}
                  <p style={{ color: "var(--text)", fontSize: 14, lineHeight: 1.7, fontStyle: "italic", borderLeft: "3px solid var(--accent)", paddingLeft: 12, marginBottom: 16, opacity: 0.85 }}>
                    {job.plain}
                  </p>

                  {/* Technical bullets */}
                  <ul style={{ color: "var(--muted)", fontSize: 13.5, lineHeight: 1.9, paddingLeft: 18, marginBottom: 16 }}>
                    {job.highlights.map((h, j) => <li key={j}>{h}</li>)}
                  </ul>

                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {job.tags.map(tag => <span key={tag} className="skill-tag">{tag}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
