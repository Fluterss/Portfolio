/**
 * Navigation — Floating glass pill nav bar
 * Design: Soft Gradient Glassmorphism
 */
import { useState, useEffect } from "react";
import { personalInfo } from "@/lib/portfolioData";

const navLinks = [
  { href: "#hero", label: "Start" },
  { href: "#about", label: "O mnie" },
  { href: "#skills", label: "Umiejętności" },
  { href: "#gallery", label: "Galeria" },
  { href: "#contact", label: "Kontakt" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
      style={{ transition: "all 0.3s ease" }}
    >
      <div
        className={`flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-300 ${
          scrolled
            ? "glass-card shadow-lg"
            : "bg-white/20 backdrop-blur-sm border border-white/30"
        }`}
        style={{ maxWidth: "700px", width: "100%" }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("#hero")}
          className="mr-4 font-display font-bold text-[#1C2B3A] text-sm tracking-widest uppercase flex-shrink-0"
          style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "0.12em" }}
        >
          <span className="text-[#00BCD4]">A</span>K
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#00BCD4]/20 text-[#00838F] font-semibold"
                    : "text-[#1C2B3A]/70 hover:text-[#1C2B3A] hover:bg-white/40"
                }`}
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <a
          href={`mailto:${personalInfo.email}`}
          className="hidden md:block ml-4 px-4 py-1.5 rounded-full text-sm font-semibold text-white flex-shrink-0 transition-all duration-200 hover:opacity-90 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #00BCD4, #0097A7)",
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          Napisz
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-auto p-2 text-[#1C2B3A]/70"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 w-5">
            <span
              className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="absolute top-full mt-2 left-4 right-4 glass-card rounded-2xl p-4 flex flex-col gap-2"
          style={{ maxWidth: "700px", margin: "8px auto 0" }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-left px-4 py-2.5 rounded-xl text-[#1C2B3A] font-medium hover:bg-[#00BCD4]/10 transition-colors"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {link.label}
            </button>
          ))}
          <a
            href={`mailto:${personalInfo.email}`}
            className="mt-2 px-4 py-2.5 rounded-xl text-center text-white font-semibold"
            style={{ background: "linear-gradient(135deg, #00BCD4, #0097A7)" }}
          >
            Napisz do mnie
          </a>
        </div>
      )}
    </nav>
  );
}
