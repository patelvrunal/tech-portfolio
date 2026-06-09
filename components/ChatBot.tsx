"use client";
import { useState, useRef, useEffect } from "react";

type Message = { role: "user" | "bot"; text: string };

const SUGGESTIONS = [
  "What is Vrunal's experience with RAG?",
  "Is Vrunal open to relocation?",
  "What certifications does Vrunal have?",
  "Tell me about Vrunal's AI projects",
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hi! I'm Vrunal's AI assistant. Ask me anything about his experience, skills, or availability." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text: string) => {
    if (!text.trim() || loading) return;
    setMessages(prev => [...prev, { role: "user", text }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "bot", text: data.reply || "Sorry, I couldn't get a response." }]);
    } catch {
      setMessages(prev => [...prev, { role: "bot", text: "Connection error. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          position: "fixed", bottom: 32, right: 32, zIndex: 200,
          width: 56, height: 56,
          background: "linear-gradient(135deg, var(--accent), var(--accent2))",
          border: "none", borderRadius: "50%",
          cursor: "pointer", fontSize: 24,
          boxShadow: "0 4px 20px rgba(6,182,212,0.4)",
          transition: "transform 0.2s, box-shadow 0.2s",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = ""; }}
        aria-label="Open chat"
      >
        {open ? "✕" : "🤖"}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          style={{
            position: "fixed", bottom: 100, right: 32, zIndex: 200,
            width: 360, maxWidth: "calc(100vw - 48px)",
            background: "var(--bg2)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
            display: "flex", flexDirection: "column",
            overflow: "hidden",
            animation: "fadeIn 0.2s ease",
          }}
        >
          {/* Header */}
          <div style={{
            padding: "14px 18px",
            background: "linear-gradient(135deg, var(--accent), var(--accent2))",
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <span style={{ fontSize: 20 }}>🤖</span>
            <div>
              <p style={{ color: "white", fontWeight: 700, fontSize: 14 }}>Ask About Vrunal</p>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 12 }}>Powered by local AI · Free & private</p>
            </div>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: 16, display: "flex", flexDirection: "column", gap: 10, maxHeight: 320 }}>
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "chat-bubble-user" : "chat-bubble-bot"}>
                {m.text}
              </div>
            ))}
            {loading && (
              <div className="chat-bubble-bot typing">
                <span /><span /><span />
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          {messages.length === 1 && (
            <div style={{ padding: "0 16px 10px", display: "flex", gap: 6, flexWrap: "wrap" }}>
              {SUGGESTIONS.map(s => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  style={{
                    background: "var(--bg3, var(--bg))",
                    border: "1px solid var(--border)",
                    borderRadius: 20,
                    padding: "4px 10px",
                    fontSize: 12,
                    color: "var(--muted)",
                    cursor: "pointer",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLButtonElement).style.color = "var(--accent)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLButtonElement).style.color = "var(--muted)"; }}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{ padding: 12, borderTop: "1px solid var(--border)", display: "flex", gap: 8 }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send(input)}
              placeholder="Ask about Vrunal..."
              disabled={loading}
              style={{
                flex: 1,
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: "8px 12px",
                color: "var(--text)",
                fontSize: 13,
                outline: "none",
              }}
            />
            <button
              onClick={() => send(input)}
              disabled={loading || !input.trim()}
              className="btn-primary"
              style={{ padding: "8px 14px", fontSize: 14 }}
            >
              ↑
            </button>
          </div>
        </div>
      )}

      <style>{`@keyframes fadeIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:none; } }`}</style>
    </>
  );
}
