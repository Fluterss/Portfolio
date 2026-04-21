/**
 * Footer — Minimal footer with name and copyright
 */
import { personalInfo } from "@/lib/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-8 border-t border-[#1C2B3A]/10"
      style={{
        background: "rgba(200,240,245,0.3)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span
            className="font-black text-lg text-[#1C2B3A] tracking-widest"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            <span className="text-[#00BCD4]">A</span>K
          </span>
          <span
            className="text-xs text-[#1C2B3A]/40 tracking-[0.15em] uppercase"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Graphic Design
          </span>
        </div>

        {/* Copyright */}
        <p
          className="text-xs text-[#1C2B3A]/40"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          © {year} {personalInfo.name}. Wszelkie prawa zastrzeżone.
        </p>

        {/* Email */}
        <a
          href={`mailto:${personalInfo.email}`}
          className="text-xs text-[#00838F] hover:text-[#00BCD4] transition-colors"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          {personalInfo.email}
        </a>
      </div>
    </footer>
  );
}
