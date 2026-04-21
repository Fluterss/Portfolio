/**
 * SkillsSection — Skills and tools
 * Design: Glass cards, skill tags (alternating white-blue), unified tools section
 */
import { useEffect, useRef, useState } from "react";
import { skillCategories, toolGroups } from "@/lib/portfolioData";
import OptimizedBackground from "./OptimizedBackground";

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Flatten all tools from all groups into a single array
  const allTools = toolGroups.flatMap((group) => group.tools);

  return (
    <section id="skills" className="relative py-24 overflow-hidden" ref={ref}>
      <OptimizedBackground grainOpacity={0.6} />

      <div className="container relative z-10">
        {/* Section header */}
        <div
          className={`mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className="section-number block mb-2"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            02 / Umiejętności
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-[#1C2B3A]"
            style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700 }}
          >
            Umiejętności
          </h2>
          <div className="mt-3 w-16 h-1 rounded-full bg-[#009FE3]" />
        </div>

        {/* Skills tags */}
        {skillCategories.map((cat, ci) => (
          <div
            key={cat.id}
            className={`mb-12 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${ci * 0.1}s` }}
          >
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3
                  className="text-xl font-bold text-[#1C2B3A]"
                  style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700 }}
                >
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, idx) => {
                  const isBlue = idx % 2 === 0;
                  return (
                    <span
                      key={skill.name}
                      className={`skill-tag px-3 py-1.5 rounded-full text-sm border transition-all duration-200 ${
                        isBlue
                          ? "bg-[#009FE3]/15 border-[#009FE3]/50 text-[#005A8F] font-semibold"
                          : "bg-white/60 border-[#1C2B3A]/15 text-[#1C2B3A]/75"
                      }`}
                      style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 500 }}
                    >
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        ))}

        {/* Unified Tools section */}
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-xs font-mono tracking-[0.15em] uppercase text-[#005A8F]"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              Narzędzia
            </span>
            <div className="flex-1 h-px bg-[#009FE3]/20" />
          </div>

          {/* Single unified tools card */}
          <div
            className={`glass-card rounded-2xl p-6 md:p-8 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.25s" }}
          >
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {allTools.map((tool, idx) => {
                const isBlue = idx % 2 === 0;
                return (
                  <li
                    key={tool.name}
                    className="flex items-center gap-2"
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        isBlue ? "bg-[#009FE3]" : "bg-[#1C2B3A]/25"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        isBlue
                          ? "text-[#005A8F] font-semibold"
                          : "text-[#1C2B3A]/70"
                      }`}
                      style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 500 }}
                    >
                      {tool.name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Subtle scroll indicator */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() =>
              document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-[#1C2B3A]/30 hover:text-[#009FE3] transition-colors cursor-pointer p-1"
            aria-label="Scroll to next section"
          >
            <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
