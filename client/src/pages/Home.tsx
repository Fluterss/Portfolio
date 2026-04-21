/**
 * Home — Main portfolio page
 * Assembles all sections: Hero, About, Skills, Gallery, Contact
 * Design: Soft Gradient Glassmorphism — CV-Faithful
 */
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
