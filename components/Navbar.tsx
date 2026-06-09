"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggle = () => setTheme(t => (t === "dark" ? "light" : "dark"));
  const navLinks = ["About", "Experience", "Projects", "Skills", "Education", "Contact"];

  const iconBtn = {
    background: "var(--bg2)", border: "1px solid var(--border)",
    borderRadius: 8, cursor: "pointer", color: "var(--text)",
    fontWeight: 600, transition: "border-color 0.2s",
    display: "flex", alignItems: "center",
  } as React.CSSProperties;

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled || menuOpen ? "var(--bg2)" : "transparent",
      borderBottom: scrolled || menuOpen ? "1px solid var(--border)" : "none",
      backdropFilter: scrolled && !menuOpen ? "blur(12px)" : "none",
      transition: "background 0.3s, border-color 0.3s",
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <span style={{ fontWeight: 800, fontSize: 18 }} className="gradient-text">VP</span>

        {/* ── Desktop nav links (hidden on mobile via CSS) ── */}
        <div className="nav-desktop" style={{ gap: 28, alignItems: "center" }}>
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              style={{ color: "var(--muted)", fontSize: 14, fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}>
              {link}
            </a>
          ))}
          <button onClick={toggle} style={{ ...iconBtn, gap: 6, padding: "6px 14px", fontSize: 13 }}>
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        {/* ── Mobile controls: theme toggle + hamburger (hidden on desktop via CSS) ── */}
        <div className="nav-mobile" style={{ alignItems: "center", gap: 8 }}>
          <button onClick={toggle} style={{ ...iconBtn, padding: "7px 11px", fontSize: 15 }}>
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button
            onClick={() => setMenuOpen(m => !m)}
            aria-label="Toggle menu"
            style={{ ...iconBtn, padding: "7px 13px", fontSize: 17, lineHeight: 1 }}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown panel ── */}
      {menuOpen && (
        <div style={{ borderTop: "1px solid var(--border)", background: "var(--bg2)" }}>
          {navLinks.map((link, i) => (
            <a key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "14px 24px",
                color: "var(--muted)",
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
                borderBottom: i < navLinks.length - 1 ? "1px solid var(--border)" : "none",
                transition: "color 0.15s, background 0.15s",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.background = "var(--bg)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.background = "transparent"; }}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
