"use client";
import { BrainCircuit, ServerCog, DatabaseZap, ShieldCheck } from "lucide-react";

const capabilities = [
  {
    Icon: BrainCircuit,
    color: "#06b6d4",
    title: "AI & Intelligent Search",
    plain: "I build systems that let teams ask questions in plain English and instantly get precise answers from thousands of documents, like a knowledgeable colleague who has read everything.",
    tech: "RAG Architectures · LangChain · LangGraph · ChromaDB · Azure OpenAI · Prompt Engineering",
  },
  {
    Icon: ServerCog,
    color: "#8b5cf6",
    title: "Backend & API Engineering",
    plain: "I design the server-side systems that power applications: fast, reliable APIs that connect databases, AI models, and user interfaces into a seamless product.",
    tech: ".NET Core · C# · Python · Flask · FastAPI · REST APIs · SQL",
  },
  {
    Icon: DatabaseZap,
    color: "#10b981",
    title: "Data Pipelines & Big Data",
    plain: "I build automated pipelines that move, clean, and analyse large volumes of data in real time, so businesses always have accurate, up-to-date information without manual effort.",
    tech: "Apache Spark · Kafka · Hadoop · PySpark · Pandas · NumPy · ETL",
  },
  {
    Icon: ShieldCheck,
    color: "#f59e0b",
    title: "Quality & Reliable Systems",
    plain: "ISTQB certified. I treat testing as an engineering discipline, not an afterthought. I ensure AI systems behave predictably in production through rigorous evaluation and code review.",
    tech: "ISTQB v4.0 · Unit Testing · Model Evaluation · Code Reviews · Agile/Scrum",
  },
];

export default function WhatIDo() {
  return (
    <section style={{ padding: "80px 0", background: "var(--bg2)" }}>
      <div className="container">
        <h2 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 800, marginBottom: 8, textAlign: "center" }}>
          What I Do
        </h2>
        <p style={{ color: "var(--muted)", textAlign: "center", marginBottom: 48, fontSize: 15 }}>
          Four things I&apos;m genuinely good at
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
          {capabilities.map((c) => (
            <div key={c.title} className="card" style={{ padding: 28, display: "flex", flexDirection: "column", gap: 14, transition: "transform 0.2s, box-shadow 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${c.color}18`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}
            >
              <div style={{
                width: 48, height: 48,
                background: `${c.color}15`,
                border: `1px solid ${c.color}30`,
                borderRadius: 10,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <c.Icon size={22} color={c.color} strokeWidth={1.75} />
              </div>
              <h3 style={{ fontWeight: 700, fontSize: 16, lineHeight: 1.3 }}>{c.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.8, flex: 1 }}>{c.plain}</p>
              <p style={{ color: "var(--muted)", fontSize: 11, fontWeight: 600, lineHeight: 1.7, borderTop: "1px solid var(--border)", paddingTop: 12 }}>
                <span style={{ color: c.color }}>{c.tech.split(" · ")[0]}</span>
                {" · " + c.tech.split(" · ").slice(1).join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
