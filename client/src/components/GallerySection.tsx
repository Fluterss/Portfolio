/**
 * GallerySection — Portfolio work gallery with category filter and lightbox
 * Design: Masonry-style grid, glass cards, hover zoom, lightbox overlay
 * To add projects: edit galleryItems in /src/lib/portfolioData.ts
 */
import { useEffect, useRef, useState } from "react";
import { galleryItems } from "@/lib/portfolioData";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import OptimizedBackground from "./OptimizedBackground";

// Collect unique categories
const ALL = "Wszystkie";

export default function GallerySection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(ALL);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Close lightbox on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight" && lightboxIndex !== null) {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filtered.length : null
        );
      }
      if (e.key === "ArrowLeft" && lightboxIndex !== null) {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filtered.length) % filtered.length : null
        );
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex]);

  const categories = [
    ALL,
    ...Array.from(new Set(galleryItems.map((i) => i.category))),
  ];

  const filtered =
    activeCategory === ALL
      ? galleryItems
      : galleryItems.filter((i) => i.category === activeCategory);

  const currentItem =
    lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <section id="gallery" className="relative py-24 overflow-hidden" ref={ref}>
      <OptimizedBackground grainOpacity={0.05} />

      <div className="container relative z-10">
        {/* Section header */}
        <div
          className={`mb-10 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className="section-number block mb-2"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            03 / Galeria
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-[#1C2B3A]"
            style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700 }}
          >
            Galeria
          </h2>
          <div className="mt-3 w-16 h-1 rounded-full bg-[#009FE3]" />
        </div>

        {/* Category filter */}
        <div
          className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#009FE3] text-white shadow-md"
                  : "glass-card text-[#1C2B3A]/70 hover:text-[#1C2B3A] hover:bg-white/60"
              }`}
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, index) => (
            <div
              key={item.id}
              className={`group cursor-pointer transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${0.15 + index * 0.08}s` }}
              onClick={() => setLightboxIndex(index)}
            >
              <div className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#1C2B3A]/0 group-hover:bg-[#1C2B3A]/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-semibold bg-[#009FE3]/80 px-4 py-2 rounded-full">
                      Zobacz
                    </span>
                  </div>
                  {/* Category badge */}
                  <span
                    className="absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm text-[#005A8F] font-semibold"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Card content */}
                <div className="p-4">
                  <h3
                    className="font-bold text-[#1C2B3A] text-base mb-1"
                    style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700 }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm text-[#1C2B3A]/60 leading-relaxed"
                    style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 400 }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-16 text-[#1C2B3A]/40">
            <p style={{ fontFamily: "'Outfit', sans-serif" }}>
              Brak projektów w tej kategorii.
            </p>
          </div>
        )}

        {/* Add project hint */}
        <p
          className="mt-8 text-center text-xs text-[#1C2B3A]/35"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          Aby dodać projekty, edytuj plik{" "}
          <code className="bg-[#009FE3]/10 px-1 py-0.5 rounded text-[#005A8F]">
            src/lib/portfolioData.ts
          </code>
        </p>

        {/* Subtle scroll indicator */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
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

      {/* Lightbox */}
      {currentItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)" }}
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden bg-white"
            onClick={(e) => e.stopPropagation()}
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}
          >
            <img
              src={currentItem.imageUrl}
              alt={currentItem.title}
              className="w-full max-h-[70vh] object-contain"
              style={{ boxShadow: "inset 0 0 30px rgba(0,0,0,0.08)" }}
            />
            <div className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <span
                    className="text-xs text-[#005A8F] font-semibold"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    {currentItem.category}
                  </span>
                  <h3
                    className="text-xl font-black text-[#1C2B3A] mt-1"
                    style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700 }}
                  >
                    {currentItem.title}
                  </h3>
                  <p
                    className="text-sm text-[#1C2B3A]/60 mt-1"
                    style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 400 }}
                  >
                    {currentItem.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Close */}
            <button
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/70 flex items-center justify-center text-[#1C2B3A] hover:bg-white transition-colors"
              onClick={() => setLightboxIndex(null)}
            >
              <X size={16} />
            </button>

            {/* Prev/Next */}
            {filtered.length > 1 && (
              <>
                <button
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/70 flex items-center justify-center text-[#1C2B3A] hover:bg-white transition-colors"
                  onClick={() =>
                    setLightboxIndex(
                      (lightboxIndex! - 1 + filtered.length) % filtered.length
                    )
                  }
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/70 flex items-center justify-center text-[#1C2B3A] hover:bg-white transition-colors"
                  onClick={() =>
                    setLightboxIndex((lightboxIndex! + 1) % filtered.length)
                  }
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
