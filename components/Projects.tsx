"use client";

const projects = [
  {
    title: "Enterprise RAG Chatbot",
    where: "Kinectrics Co-op · Toronto",
    plain: "Engineers spent hours manually searching thousands of pages of technical documents. I built a system where they simply type a question and get a precise, sourced answer in seconds, like Google Search but trained on your company's own knowledge.",
    tech: "Designed the full pipeline: document chunking with Pandas → vector embeddings → ChromaDB storage → LangChain retrieval → Azure OpenAI generation. Used LangGraph for agentic multi-step queries. Exposed as a REST API service.",
    tags: ["Python", "LangChain", "LangGraph", "ChromaDB", "Azure OpenAI", "Pandas", "REST API"],
    highlight: "Production-ready",
    category: "AI / ML",
  },
  {
    title: "RAG Customer Support Chatbot",
    where: "George Brown College · Applied AI Program",
    plain: "A chatbot that learned from thousands of past customer support conversations and can now answer new support questions on its own, achieving 95% accuracy on data it had never seen before.",
    tech: "Python, LangChain, OpenAI GPT, ChromaDB. Ingested and preprocessed support transcripts with Pandas. Evaluated on a held-out test set with clear accuracy metrics.",
    tags: ["Python", "LangChain", "GPT", "ChromaDB", "Pandas", "NLP"],
    highlight: "95% accuracy",
    category: "AI / ML",
  },
  {
    title: "Real-Time News Sentiment Pipeline",
    where: "Conestoga College · Big Data Program",
    plain: "A fully automated system that reads thousands of news articles the moment they are published, classifies whether they are positive or negative, and visualises the trends live. No human analysts needed.",
    tech: "Full big data pipeline: Kafka → HDFS → Spark ML. Logistic Regression classifier. 85% accuracy. Live low-latency inference demo with Power BI visualisation.",
    tags: ["Python", "Apache Spark", "Kafka", "Hadoop", "Scala", "PySpark", "Power BI"],
    highlight: "85% accuracy",
    category: "Big Data",
  },
  {
    title: "Real-Time Intruder Detection",
    where: "George Brown College · Applied AI Exam",
    plain: "A security system that watches a live camera feed and automatically raises an alert the moment it detects an intruder. No human monitoring required, processing every frame in real time.",
    tech: "Python, OpenCV, NumPy. Background subtraction and motion detection pipelines. Evaluated with precision and recall metrics. Optimised inference latency for edge deployment.",
    tags: ["Python", "OpenCV", "NumPy", "Computer Vision"],
    highlight: "Real-time detection",
    category: "AI / ML",
  },
  {
    title: "Multilingual NLP Support Chatbot",
    where: "George Brown College · Deep Learning",
    plain: "A customer support chatbot that works in multiple languages, fine-tuned to understand the specific vocabulary and tone of support ticket conversations, deployed as a live API.",
    tech: "Fine-tuned a multilingual Hugging Face Transformer model on historical support ticket data. Deployed as a Flask REST API endpoint for real-time inference across diverse query patterns.",
    tags: ["Python", "Hugging Face", "Transformers", "Flask", "NLP"],
    highlight: "Multilingual",
    category: "AI / ML",
  },
  {
    title: "Loan Management & Risk Platform",
    where: "Citi Simulation + GSFC University B.Tech",
    plain: "A complete loan lifecycle management system with an AI component that scores whether a loan applicant is likely to repay, helping financial institutions make smarter, faster lending decisions.",
    tech: "Java, Random Forest credit risk model, 12-state UML diagrams, stock market risk visualisation tool. Unit tests for financial audit compliance.",
    tags: ["Java", "Random Forest", "Scikit-learn", "UML", "ML"],
    highlight: "Full ML pipeline",
    category: "Full-Stack",
  },
  {
    title: "AI Portfolio Website",
    where: "Personal Project · Live in Production",
    plain: "This site. A responsive portfolio with a built-in AI assistant that answers questions about my background. The chatbot uses context injection so it can speak accurately about my experience without hallucinating.",
    tech: "Next.js (App Router), TypeScript, Tailwind CSS, Groq API (llama-3.1-8b-instant), Edge Runtime for zero cold-start latency. Deployed on Vercel with CI/CD. Two-repo strategy: private with API key, public clean version.",
    tags: ["Next.js", "TypeScript", "Groq API", "Vercel", "Edge Runtime", "React"],
    highlight: "Live now",
    category: "Full-Stack",
  },
];

const categoryColor: Record<string, string> = {
  "AI / ML": "#06b6d4",
  "Big Data": "#8b5cf6",
  "Full-Stack": "#10b981",
};

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ background: "var(--bg)" }}>
      <div className="container">
        <h2 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 800, marginBottom: 8, textAlign: "center" }}>Projects</h2>
        <p style={{ color: "var(--muted)", textAlign: "center", marginBottom: 48 }}>
          Real work · Real metrics · Things I can talk to in depth
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(340px, 100%), 1fr))", gap: 24 }}>
          {projects.map((p, i) => (
            <div key={i}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 32px rgba(6,182,212,0.09)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}
              style={{ padding: 26, display: "flex", flexDirection: "column", gap: 12, transition: "transform 0.2s, box-shadow 0.2s", background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12 }}
            >
              {/* Category + metric */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                <span style={{
                  fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em",
                  color: categoryColor[p.category] || "var(--accent)",
                  background: `${categoryColor[p.category]}18`,
                  padding: "3px 8px", borderRadius: 4,
                }}>{p.category}</span>
                <span style={{ color: "var(--accent2)", fontSize: 12, fontWeight: 700 }}>✦ {p.highlight}</span>
              </div>

              {/* Title + where */}
              <div>
                <h3 style={{ fontWeight: 700, fontSize: 17 }}>{p.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: 11, marginTop: 2 }}>{p.where}</p>
              </div>

              {/* Plain English */}
              <p style={{ color: "var(--text)", fontSize: 13.5, lineHeight: 1.75, opacity: 0.9 }}>{p.plain}</p>

              {/* Tech detail */}
              <p style={{ color: "var(--muted)", fontSize: 12, lineHeight: 1.7, borderTop: "1px solid var(--border)", paddingTop: 10 }}>
                <span style={{ color: "var(--accent)", fontWeight: 600, fontSize: 11 }}>TECH → </span>
                {p.tech}
              </p>

              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {p.tags.map(tag => <span key={tag} className="skill-tag">{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
