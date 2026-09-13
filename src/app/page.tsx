import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <CtaSection />
    </>
  );
}
