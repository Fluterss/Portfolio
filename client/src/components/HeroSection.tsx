/**
 * HeroSection — Landing page hero with carousel
 * Design: Viewport-height section with soft gradient and rotating gallery showcase
 */
import { useEffect, useState } from "react";
import { personalInfo, galleryItems } from "@/lib/portfolioData";
import OptimizedBackground from "./OptimizedBackground";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };



  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <OptimizedBackground grainOpacity={0.6} />

      {/* Subtle vector shapes */}
      <svg
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: "100%", height: "100%" }}
      >
        <defs>
          <linearGradient id="shapeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#009FE3", stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: "#005A8F", stopOpacity: 0.1 }} />
          </linearGradient>
        </defs>
        {/* Subtle curved lines */}
        <path
          d="M 0 100 Q 300 50 600 100 T 1200 100"
          stroke="url(#shapeGrad)"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />
        <path
          d="M 0 700 Q 300 750 600 700 T 1200 700"
          stroke="url(#shapeGrad)"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />
        {/* Subtle circles */}
        <circle cx="100" cy="150" r="80" fill="#009FE3" opacity="0.08" />
        <circle cx="1100" cy="650" r="100" fill="#009FE3" opacity="0.06" />
      </svg>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center justify-center text-center">
        {/* Badge */}
        <div
          className={`inline-block mb-6 px-3 py-1.5 rounded-full border border-[#009FE3]/40 bg-white/30 backdrop-blur-sm transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          <span className="text-xs font-mono tracking-[0.15em] uppercase text-[#005A8F]">
            Portfolio
          </span>
        </div>

        {/* Main heading */}
        <div
          className={`mb-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          <h1
            className="text-5xl md:text-7xl font-black leading-none text-[#1C2B3A] tracking-tight"
            style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700 }}
          >
            Alan
            <br />
            <span className="text-[#009FE3]">Kardasz</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`mb-10 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.3s" }}
        >
          <p
            className="text-xs font-mono tracking-[0.15em] uppercase text-[#1C2B3A]/60 mb-3"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            ▸ Graphic Design
          </p>
          <p
            className="text-lg md:text-xl text-[#1C2B3A]/75 leading-relaxed max-w-md mx-auto"
            style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 400 }}
          >
            {personalInfo.subtitle}
          </p>
        </div>



        {/* CTA Buttons */}
        <div
          className={`flex flex-wrap gap-4 justify-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          <button
            onClick={() =>
              document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 rounded-full text-white font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #009FE3, #0078B8)",
              fontFamily: "'Ubuntu', sans-serif",
              fontWeight: 500,
              boxShadow: "0 4px 20px rgba(0,188,212,0.3)",
            }}
          >
            Zobacz projekty
          </button>
          <button
            onClick={scrollToAbout}
            className="px-6 py-3 rounded-full text-[#1C2B3A] font-semibold border border-[#1C2B3A]/20 bg-white/40 backdrop-blur-sm transition-all duration-200 hover:bg-white/60"
            style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 500 }}
          >
            O mnie
          </button>
        </div>
      </div>
    </section>
  );
}
