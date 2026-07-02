import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SectorsSection from "@/components/sections/SectorsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <SectorsSection />
      <WhyUsSection />
      <ProcessSection />
      <GallerySection />
      <TestimonialsSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
