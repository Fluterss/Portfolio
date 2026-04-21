/**
 * AboutSection — About me with photo and personal details
 * Design: Glass card layout, photo left (stacked), info below photo, text on right
 */
import { useEffect, useRef, useState } from "react";
import { aboutMe, personalInfo } from "@/lib/portfolioData";
import { Mail, Phone, MapPin } from "lucide-react";
import OptimizedBackground from "./OptimizedBackground";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden gradient-bg"
      ref={ref}
    >
      <OptimizedBackground grainOpacity={0.4} />

      {/* MISSPRINT DOODLES - Easy to remove by commenting out this entire SVG */}
      <svg
        className="absolute -right-20 top-10 w-96 h-96 opacity-[0.08] pointer-events-none"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Misaligned circles - CS:GO Missprint style */}
        <circle cx="80" cy="80" r="60" fill="#009FE3" opacity="0.6" />
        <circle cx="85" cy="85" r="60" fill="#005A8F" opacity="0.4" />
        {/* Misaligned rectangles */}
        <rect x="150" y="40" width="80" height="80" fill="#009FE3" opacity="0.5" />
        <rect x="155" y="45" width="80" height="80" fill="#005A8F" opacity="0.3" />
        {/* Misaligned lines */}
        <line x1="40" y1="200" x2="200" y2="200" stroke="#009FE3" strokeWidth="3" opacity="0.5" />
        <line x1="40" y1="205" x2="200" y2="205" stroke="#005A8F" strokeWidth="3" opacity="0.3" />
        {/* Misaligned triangles */}
        <polygon points="100,250 150,280 50,280" fill="#009FE3" opacity="0.4" />
        <polygon points="105,255 155,285 55,285" fill="#005A8F" opacity="0.2" />
      </svg>

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
            01 / O mnie
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-[#1C2B3A]"
            style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700 }}
          >
            O mnie
          </h2>
          <div className="mt-3 w-16 h-1 rounded-full bg-[#009FE3]" />
        </div>

        {/* Main layout: Left column (photo + info) | Right column (text) */}
        <div className="grid md:grid-cols-12 gap-8">
          {/* Left column: Photo (top) + Contact info (bottom) */}
          <div className="md:col-span-4 order-1 md:order-1 space-y-6">
            {/* Photo square */}
            <div
              className={`transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0.15s" }}
            >
              <div className="relative group">
                {/* Outer glass frame */}
                <div className="glass-card rounded-2xl p-4">
                  {/* Inner dynamic square with aspect ratio */}
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-[#009FE3]/10 to-[#0078B8]/10 border border-[#009FE3]/20">
                    {/* Photo */}
                    <img
                      src={aboutMe.photoUrl}
                      alt="Alan Kardasz"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C2B3A]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Decorative corner accents */}
                    <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#009FE3]/40" />
                    <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#009FE3]/40" />
                  </div>
                </div>
              </div>
            </div>


          </div>

          {/* Right column: Bio text */}
          <div
            className={`md:col-span-8 order-3 md:order-2 transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "0.35s" }}
          >
            <div className="glass-card rounded-2xl p-6 md:p-8 h-auto">
              <div className="space-y-4">
                {aboutMe.paragraphs.map((p: string, i: number) => (
                  <p
                    key={i}
                    className="text-[#1C2B3A]/75 leading-relaxed text-base"
                    style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 400 }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Subtle scroll indicator */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() =>
              document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
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

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-2 min-w-0">
      <span className="mt-0.5 text-[#009FE3]/60 flex-shrink-0">{icon}</span>
      <div className="min-w-0 flex-1">
        <p
          className="text-xs text-[#1C2B3A]/35 uppercase tracking-widest mb-0.5 truncate"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          {label}
        </p>
        {href ? (
          <a
            href={href}
            className="text-xs sm:text-sm font-medium text-[#1C2B3A] hover:text-[#009FE3] transition-colors break-words line-clamp-2"
            style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 500 }}
          >
            {value}
          </a>
        ) : (
          <p
            className="text-xs sm:text-sm font-medium text-[#1C2B3A] break-words line-clamp-2"
            style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 500 }}
          >
            {value}
          </p>
        )}
      </div>
    </div>
  );
}
