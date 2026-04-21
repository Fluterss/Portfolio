/**
 * ============================================================
 * PORTFOLIO DATA — Alan Kardasz
 * ============================================================
 * Edit this file to update all content on the website.
 * Each section is clearly labeled. Just change the values!
 * ============================================================
 */

// ─── PERSONAL INFO ───────────────────────────────────────────
export const personalInfo = {
  name: "Alan Kardasz",
  tagline: "Graphic Design",
  subtitle: "Projektant graficzny z Rzeszowa. Specjalizuję się w grafice cyfrowej oraz digital marketingu.",
  email: "alankardasz2@gmail.com",
  phone: "883 025 970",
  location: "Rzeszów",
  birthdate: "02.08.2001",
  // Social links (set to empty string "" to hide)
  instagram: "",
  linkedin: "",
  behance: "",
};

// ─── ABOUT ME ────────────────────────────────────────────────
export const aboutMe = {
  heading: "O mnie",
  paragraphs: [
    "Grafiką interesuję się od 10 lat, a pierwsze zlecenia wykonuję od 2018 roku. Posiadam tytuł licencjata w zakresie grafiki i produkcji multimedialnej. Obecnie kontynuuję naukę na studiach drugiego stopnia na profilu Digital Marketing w Wyższej Szkole Informatyki i Zarządzania w Rzeszowie. Równocześnie zajmuję się tworzeniem treści reklamowych dla agencji reklamowej oraz małych biznesów.",
    "Cechuje mnie szeroki warsztat multimedialny. Specjalizuję się w tworzeniu projektów 2D i treści internetowych, ale posiadam również umiejętności montażu wideo, fotografii produktowej czy nawet produkcji audio. Lubię wyzwania, a co za tym idzie - ciągłe poszerzanie swoich kompetencji. Śledzę przy tym branżowe nowinki i na bieżąco wdrażam rozwiązania automatyzujące moją pracę.",
    "Łączę przygotowanie projektowe z wiedzą o procesach marketingowych. Moje umiejętności obejmują nie tylko grafikę, ale także operacyjne aspekty marketingu. Orientuję się w mechanizmach SEO, e-commerce oraz zasadach funkcjonowania social mediów. Potrafię również poruszać się w zagadnieniach mediaplaningu i technologii programmatic, co pozwala mi na sprawne wsparcie działań sprzedażowych i komunikacyjnych na wielu etapach.",
  ],
  // Replace with your own photo URL or leave as the generated placeholder
  photoUrl: "/manus-storage/alan_profile_photo_bb24f5d3.webp",
};

// ─── SKILLS ──────────────────────────────────────────────────
// Each category has a title, icon (emoji), and list of skills
// Skills can be "highlighted" (shown in cyan) or normal
export const skillCategories = [
  {
    id: "design",
    title: "Umiejętności",
    icon: "",
    skills: [
      { name: "Grafika 2D", highlighted: false },
      { name: "Grafika 3D", highlighted: true },
      { name: "Projektowanie opakowań", highlighted: true },
      { name: "Automatyzacja treści", highlighted: false },
      { name: "DTP", highlighted: false },
      { name: "Copywriting", highlighted: true },
      { name: "Montaż i eksploatacja systemów komputerowych", highlighted: false },
      { name: "SEO i on-page", highlighted: false },
      { name: "Projektowanie i zarządzanie stronami internetowymi", highlighted: false },
      { name: "AI Prompting", highlighted: true },
      { name: "Google Ads", highlighted: false },
      { name: "Fotografia produktowa", highlighted: false },
      { name: "Montaż wideo", highlighted: true },
      { name: "Wideo Mapping", highlighted: false },
      { name: "Produkcja Audio", highlighted: true },
      { name: "Programmatic", highlighted: true },
      { name: "Mediaplaning", highlighted: true },
      { name: "Data analysis", highlighted: false },
    ],
  },
];

// ─── TOOLS / ENVIRONMENTS ────────────────────────────────────
export const toolGroups = [
  {
    id: "adobe",
    title: "Programy pakietu Adobe",
    icon: "A",
    tools: [
      { name: "Adobe Illustrator", highlighted: true },
      { name: "Adobe Photoshop", highlighted: false },
      { name: "Adobe InDesign", highlighted: true },
      { name: "Adobe Premiere", highlighted: false },
      { name: "Adobe After Effects", highlighted: true },
      { name: "Adobe XD", highlighted: false },
    ],
  },
  {
    id: "other",
    title: "Pozostałe programy",
    icon: "🎨",
    tools: [
      { name: "FL Studio 20", highlighted: false },
      { name: "Figma", highlighted: true },
      { name: "Canva", highlighted: false },
      { name: "CorelDraw", highlighted: false },
      { name: "Blender", highlighted: true },
      { name: "InkScape", highlighted: false },
    ],
  },
  {
    id: "web",
    title: "Inne narzędzia",
    icon: "</>",
    tools: [
      { name: "HTML / CSS / PHP", highlighted: true },
      { name: "WordPress", highlighted: false },
      { name: "MySQL", highlighted: true },
      { name: "Make.com", highlighted: false },
      { name: "Manus", highlighted: true },
      { name: "Midjourney", highlighted: true },
      { name: "SEMrush", highlighted: false },
      { name: "Hotjar", highlighted: false },
    ],
  },
];

// ─── LANGUAGES ───────────────────────────────────────────────
export const languages = [
  { name: "Polski", level: "Ojczysty", percent: 100 },
  { name: "Angielski", level: "Komunikatywny", percent: 70 },
];

// ─── GALLERY ─────────────────────────────────────────────────
// Add your own projects here. Each item needs:
//   title, category, description, imageUrl
// Categories: "Branding", "Packaging", "Web", "3D", "Video", "Print", "Other"
export const galleryItems = [
  { id: 1, title: "Projekt 1", category: "Digital Advertising", description: "Profesjonalny projekt do reklamy online.", imageUrl: "/manus-storage/gallery_1_b2c3a176.jpg" },
  { id: 2, title: "Projekt 2", category: "Infografiki", description: "Kreatywna infografika do kampanii cyfrowej.", imageUrl: "/manus-storage/gallery_2_517ea125.jpg" },
  { id: 3, title: "Projekt 3", category: "Print", description: "Projekt do druku z zaawansowaną typografią.", imageUrl: "/manus-storage/gallery_3_8db418fa.jpg" },
  { id: 4, title: "Projekt 4", category: "Opakowania", description: "Projekt opakowaniowy z nowoczesnym designem.", imageUrl: "/manus-storage/gallery_4_7f17965f.jpg" },
  { id: 5, title: "Projekt 5", category: "Opakowania", description: "Projekt opakowaniowy do druku.", imageUrl: "/manus-storage/gallery_5_16720928.png" },
  { id: 6, title: "Projekt 6", category: "Infografiki", description: "Infografika do kampanii cyfrowej.", imageUrl: "/manus-storage/gallery_6_20c020ef.jpg" },
  { id: 7, title: "Projekt 7", category: "Print", description: "Materiały drukowane z nowoczesnym designem.", imageUrl: "/manus-storage/gallery_7_f1d1695d.png" },
  { id: 8, title: "Projekt 8", category: "Print", description: "Projekt do druku z bogatą typografią.", imageUrl: "/manus-storage/gallery_8_fa27212f.png" },
  { id: 9, title: "Projekt 9", category: "Digital Advertising", description: "Kreatywna kampania reklamowa online.", imageUrl: "/manus-storage/gallery_9_24ce712c.png" },
  { id: 10, title: "Projekt 10", category: "Opakowania", description: "Projekt opakowaniowy.", imageUrl: "/manus-storage/gallery_10_5e9feae5.png" },
  { id: 11, title: "Projekt 11", category: "Digital Advertising", description: "Profesjonalna kampania cyfrowa.", imageUrl: "/manus-storage/gallery_11_803c83f4.png" },
  { id: 12, title: "Projekt 12", category: "Print", description: "Materiały drukowane z designem.", imageUrl: "/manus-storage/gallery_12_48fd490d.png" },
  { id: 13, title: "Projekt 13", category: "Infografiki", description: "Infografika do mediów społecznych.", imageUrl: "/manus-storage/gallery_13_bbf87383.png" },
  { id: 14, title: "Projekt 14", category: "Print", description: "Projekt do druku.", imageUrl: "/manus-storage/gallery_14_36a7a3fb.png" },
  { id: 15, title: "Projekt 15", category: "Digital Advertising", description: "Kampania reklamowa do sieci.", imageUrl: "/manus-storage/gallery_15_e7fd991e.png" },
  { id: 16, title: "Projekt 16", category: "Print", description: "Projekt materiałów promocyjnych.", imageUrl: "/manus-storage/gallery_16_aaaf7c28.png" },
  { id: 17, title: "Projekt 17", category: "Opakowania", description: "Projekt opakowaniowy do reklamy.", imageUrl: "/manus-storage/gallery_17_9cbf8fa0.png" },
  { id: 18, title: "Projekt 18", category: "Print", description: "Materiały do druku.", imageUrl: "/manus-storage/gallery_18_d397e756.png" },
  { id: 19, title: "Projekt 19", category: "Digital Advertising", description: "Profesjonalna kampania cyfrowa.", imageUrl: "/manus-storage/gallery_19_03a3809d.png" },
  { id: 20, title: "Projekt 20", category: "Print", description: "Materiały drukowane.", imageUrl: "/manus-storage/gallery_20_8b37eeee.png" },
  { id: 21, title: "Projekt 21", category: "Infografiki", description: "Infografika do kampanii.", imageUrl: "/manus-storage/gallery_21_fd769a4b.png" },
  { id: 22, title: "Projekt 22", category: "Opakowania", description: "Projekt opakowaniowy.", imageUrl: "/manus-storage/gallery_22_8f2eb3fe.png" },
  { id: 23, title: "Projekt 23", category: "Digital Advertising", description: "Kampania reklamowa online.", imageUrl: "/manus-storage/gallery_23_5eb5e614.png" },
  { id: 24, title: "Projekt 24", category: "Print", description: "Projekt materiałów do druku.", imageUrl: "/manus-storage/gallery_24_ca7cb041.png" },
  { id: 25, title: "Projekt 25", category: "Infografiki", description: "Profesjonalna infografika cyfrowa.", imageUrl: "/manus-storage/gallery_25_f21c43f4.png" },
];

// ─── CONTACT ─────────────────────────────────────────────────
export const contactInfo = {
  heading: "Kontakt",
  subheading: "Masz projekt? Porozmawiajmy.",
  email: "alankardasz2@gmail.com",
  phone: "883 025 970",
  location: "Rzeszów, Polska",
  availability: "Dostępny do współpracy",
  availabilityHours: {
    weekday: "Poniedziałek - Czwartek: 10:00 - 20:00",
    weekend: "Piątek - Sobota: 10:00 - 16:00",
  },
}
