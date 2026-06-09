"use client";

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SI = "https://cdn.simpleicons.org";

const skillGroups = [
  {
    title: "Generative AI & LLMs",
    icon: "🤖",
    logos: [
      { name: "Python",      src: `${DI}/python/python-original.svg` },
      { name: "LangChain",   src: `${SI}/langchain` },
      { name: "HuggingFace", src: `${SI}/huggingface` },
      { name: "PyTorch",     src: `${DI}/pytorch/pytorch-original.svg` },
    ],
    tags: ["RAG Architectures", "LangGraph", "ChromaDB", "Azure OpenAI", "Prompt Engineering", "Agentic Workflows", "Semantic Search"],
  },
  {
    title: "Data & Machine Learning",
    icon: "📈",
    logos: [
      { name: "NumPy",       src: `${DI}/numpy/numpy-original.svg` },
      { name: "Pandas",      src: `${DI}/pandas/pandas-original.svg` },
      { name: "Scikit-learn",src: `${DI}/scikitlearn/scikitlearn-original.svg` },
      { name: "OpenCV",      src: `${DI}/opencv/opencv-original.svg` },
    ],
    tags: ["Logistic Regression", "Random Forest", "NLP", "Computer Vision", "Model Evaluation"],
  },
  {
    title: "Backend Engineering",
    icon: "⚙️",
    logos: [
      { name: ".NET Core",  src: `${DI}/dotnetcore/dotnetcore-original.svg` },
      { name: "C#",         src: `${DI}/csharp/csharp-original.svg` },
      { name: "Flask",      src: `${DI}/flask/flask-original.svg` },
      { name: "Java",       src: `${DI}/java/java-original.svg` },
    ],
    tags: ["ASP.NET", "FastAPI", "REST APIs", "MVC", "SQL", "Agile/Scrum"],
  },
  {
    title: "Databases & Cloud",
    icon: "☁️",
    logos: [
      { name: "PostgreSQL", src: `${DI}/postgresql/postgresql-original.svg` },
      { name: "MongoDB",    src: `${DI}/mongodb/mongodb-original.svg` },
      { name: "MySQL",      src: `${DI}/mysql/mysql-original.svg` },
      { name: "Azure",      src: `${DI}/azure/azure-original.svg` },
    ],
    tags: ["ChromaDB", "Vector DBs", "Azure SQL", "Data Warehousing"],
  },
  {
    title: "Big Data",
    icon: "📊",
    logos: [
      { name: "Spark",  src: `${SI}/apachespark` },
      { name: "Kafka",  src: `${SI}/apachekafka` },
      { name: "Hadoop", src: `${DI}/hadoop/hadoop-original.svg` },
      { name: "Scala",  src: `${DI}/scala/scala-original.svg` },
    ],
    tags: ["PySpark", "HDFS", "ETL Pipelines", "Stream Processing", "Batch Processing"],
  },
  {
    title: "Frontend & Tools",
    icon: "🛠️",
    logos: [
      { name: "React",      src: `${DI}/react/react-original.svg` },
      { name: "JavaScript", src: `${DI}/javascript/javascript-original.svg` },
      { name: "Git",        src: `${DI}/git/git-original.svg` },
      { name: "Jira",       src: `${DI}/jira/jira-original.svg` },
    ],
    tags: ["Power BI", "HTML5", "CSS3", "jQuery", "ISTQB", "Unit Testing", "Code Reviews"],
  },
];

function Logo({ name, src }: { name: string; src: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
      <div
        style={{
          width: 44, height: 44,
          background: "var(--bg)",
          border: "1px solid var(--border)",
          borderRadius: 8,
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: 8,
          transition: "border-color 0.2s, transform 0.2s",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "var(--accent)";
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
          (e.currentTarget as HTMLDivElement).style.transform = "";
        }}
      >
        <img src={src} alt={name} width={26} height={26} style={{ objectFit: "contain" }}
          onError={e => {
            const el = e.currentTarget as HTMLImageElement;
            el.style.display = "none";
            const p = el.parentElement;
            if (p) p.innerHTML = `<span style="font-size:8px;font-weight:700;color:var(--muted);text-align:center;line-height:1.2;word-break:break-all">${name.slice(0, 5)}</span>`;
          }}
        />
      </div>
      <span style={{ fontSize: 10, color: "var(--muted)", fontWeight: 500, textAlign: "center", maxWidth: 44 }}>{name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: "var(--bg3)" }}>
      <div className="container">
        <h2 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 800, marginBottom: 8, textAlign: "center" }}>Skills</h2>
        <p style={{ color: "var(--muted)", textAlign: "center", marginBottom: 48 }}>Tools I reach for when building: used in production work, co-ops, and coursework</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))", gap: 24 }}>
          {skillGroups.map(group => (
            <div key={group.title} className="card" style={{ padding: 24 }}>
              <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
                <span>{group.icon}</span>{group.title}
              </h3>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 16 }}>
                {group.logos.map(l => <Logo key={l.name} {...l} />)}
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {group.tags.map(tag => <span key={tag} className="skill-tag">{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
