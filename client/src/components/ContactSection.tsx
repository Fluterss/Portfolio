/**
 * ContactSection — Contact information and form
 * Design: Glass card layout, cyan accents, geometric decorations
 */
import { useEffect, useRef, useState } from "react";
import { contactInfo, personalInfo } from "@/lib/portfolioData";
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from "lucide-react";
import OptimizedBackground from "./OptimizedBackground";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);
  const [nextAvailability, setNextAvailability] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Check availability based on Polish timezone
  const checkAvailability = () => {
    const now = new Date();
    // Convert to Polish timezone (CET/CEST)
    const polishTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Warsaw' }));
    const day = polishTime.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hour = polishTime.getHours();

    // Monday-Thursday (1-4): 10-20
    if (day >= 1 && day <= 4) {
      return hour >= 10 && hour < 20;
    }
    // Friday-Saturday (5-6): 10-16
    if (day === 5 || day === 6) {
      return hour >= 10 && hour < 16;
    }
    // Sunday: not available
    return false;
  };

  // Get next availability time
  const getNextAvailability = () => {
    const now = new Date();
    const polishTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Warsaw' }));
    let day = polishTime.getDay();

    // Helper to format day name
    const dayNames = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];

    // If available now, shouldn't reach here
    if (checkAvailability()) {
      return null;
    }

    // Check each day starting from tomorrow
    for (let i = 1; i <= 7; i++) {
      const nextDay = (day + i) % 7;
      const isMonToThu = nextDay >= 1 && nextDay <= 4;
      const isFriSat = nextDay === 5 || nextDay === 6;

      if (isMonToThu || isFriSat) {
        // Next available is at 10:00
        if (i === 1) {
          return `jutro o 10:00`;
        } else {
          return `w ${dayNames[nextDay].toLowerCase()} o 10:00`;
        }
      }
    }
    return null;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Check availability on mount and update every minute
  useEffect(() => {
    const updateStatus = () => {
      setIsAvailable(checkAvailability());
      setNextAvailability(getNextAvailability());
    };
    updateStatus();
    const interval = setInterval(updateStatus, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Opens default email client with pre-filled content
    const subject = encodeURIComponent(`Wiadomość od ${formState.name}`);
    const body = encodeURIComponent(
      `Imię: ${formState.name}\nE-mail: ${formState.email}\n\n${formState.message}`
    );
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden" ref={ref}>
      <OptimizedBackground grainOpacity={0.6} />

      {/* Decorative triangle bottom-left */}
      <svg
        className="absolute left-0 bottom-0 w-48 h-48 opacity-10 pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="0,200 200,200 0,0" fill="#009FE3" />
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
            04 / Kontakt
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-[#1C2B3A]"
            style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700 }}
          >
            {contactInfo.heading}
          </h2>
          <div className="mt-3 w-16 h-1 rounded-full bg-[#009FE3]" />
          <p
            className="mt-4 text-lg text-[#1C2B3A]/60"
            style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 400 }}
          >
            {contactInfo.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Left: Contact info */}
          <div
            className={`md:col-span-2 space-y-5 transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
            style={{ transitionDelay: "0.15s" }}
          >
            {/* Availability badge */}
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <span
                  className={`w-2 h-2 rounded-full ${
                    isAvailable ? "bg-green-400 animate-pulse" : "bg-gray-300"
                  }`}
                />
                <span
                  className={`text-sm font-semibold ${
                    isAvailable ? "text-green-600" : "text-gray-500"
                  }`}
                  style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 500 }}
                >
                  {isAvailable ? "Dostępny teraz" : "Niedostępny"}
                </span>
              </div>

              {/* Next availability message */}
              {!isAvailable && nextAvailability && (
                <p
                  className="text-xs text-[#1C2B3A]/60 mb-4"
                  style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 400 }}
                >
                  Dostępny <span className="font-semibold text-[#1C2B3A]/80">{nextAvailability}</span>
                </p>
              )}

              {/* Availability hours */}
              {contactInfo.availabilityHours && (
                <div className="mb-4 pb-4 border-b border-[#1C2B3A]/10 space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock size={13} className="text-[#009FE3]/60" />
                    <p
                      className="text-xs text-[#1C2B3A]/50 uppercase tracking-widest"
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      Godziny dostępności
                    </p>
                  </div>
                  <p
                    className="text-xs text-[#1C2B3A]/70 font-medium ml-5"
                    style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 400 }}
                  >
                    {contactInfo.availabilityHours.weekday}
                  </p>
                  <p
                    className="text-xs text-[#1C2B3A]/70 font-medium ml-5"
                    style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 400 }}
                  >
                    {contactInfo.availabilityHours.weekend}
                  </p>
                </div>
              )}

              {/* Contact details */}
              <div className="space-y-3">
                <ContactItem
                  icon={<Mail size={16} />}
                  label="E-mail"
                  value={contactInfo.email}
                  href={`mailto:${contactInfo.email}`}
                />
                <ContactItem
                  icon={<Phone size={16} />}
                  label="Telefon"
                  value={contactInfo.phone}
                  href={`tel:${contactInfo.phone}`}
                />
                <ContactItem
                  icon={<MapPin size={16} />}
                  label="Lokalizacja"
                  value={contactInfo.location}
                />
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div
            className={`md:col-span-3 transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "0.25s" }}
          >
            <div className="glass-card rounded-2xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle size={48} className="text-[#009FE3] mb-4" />
                  <p
                    className="text-lg font-semibold text-[#1C2B3A]"
                    style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 600 }}
                  >
                    Wiadomość wysłana!
                  </p>
                  <p
                    className="text-sm text-[#1C2B3A]/60 mt-2"
                    style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 400 }}
                  >
                    Odpowiem Ci najszybciej jak się da.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      className="block text-xs font-semibold text-[#1C2B3A]/50 uppercase tracking-widest mb-1.5"
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      Imię i nazwisko
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, name: e.target.value }))
                      }
                      placeholder="Jan Kowalski"
                      className="w-full px-4 py-3 rounded-xl border border-[#1C2B3A]/10 bg-white/60 text-[#1C2B3A] placeholder-[#1C2B3A]/30 focus:outline-none focus:border-[#009FE3] focus:ring-2 focus:ring-[#009FE3]/20 transition-all"
                      style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 400 }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold text-[#1C2B3A]/50 uppercase tracking-widest mb-1.5"
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, email: e.target.value }))
                      }
                      placeholder="jan@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#1C2B3A]/10 bg-white/60 text-[#1C2B3A] placeholder-[#1C2B3A]/30 focus:outline-none focus:border-[#009FE3] focus:ring-2 focus:ring-[#009FE3]/20 transition-all"
                      style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 400 }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold text-[#1C2B3A]/50 uppercase tracking-widest mb-1.5"
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      Wiadomość
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, message: e.target.value }))
                      }
                      placeholder="Opisz swój projekt..."
                      className="w-full px-4 py-3 rounded-xl border border-[#1C2B3A]/10 bg-white/60 text-[#1C2B3A] placeholder-[#1C2B3A]/30 focus:outline-none focus:border-[#009FE3] focus:ring-2 focus:ring-[#009FE3]/20 transition-all resize-none"
                      style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 400 }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-semibold transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #009FE3, #0078B8)",
                      fontFamily: "'Ubuntu', sans-serif",
                      fontWeight: 500,
                      boxShadow: "0 4px 16px rgba(0,159,227,0.3)",
                    }}
                  >
                    <Send size={16} />
                    Wyślij wiadomość
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact item component
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
  const content = (
    <div className="flex gap-3">
      <span className="mt-0.5 text-[#009FE3] flex-shrink-0">{icon}</span>
      <div className="flex-1">
        <p
          className="text-xs uppercase tracking-widest text-[#1C2B3A]/50"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          {label}
        </p>
        <p
          className="text-sm font-medium text-[#1C2B3A] hover:text-[#009FE3] transition-colors"
          style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 500 }}
        >
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }
  return content;
}
