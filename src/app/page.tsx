import { HeroSection } from "@/components/sections/hero-section";
import { QuickRouteSection } from "@/components/sections/quick-route-section";
import { ServicesSection } from "@/components/sections/services-section";
import { FleetSection } from "@/components/sections/fleet-section";
import { PackagesPreviewSection } from "@/components/sections/packages-preview-section";
import { DestinationsPreviewSection } from "@/components/sections/destinations-preview-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { CtaSection } from "@/components/sections/cta-section";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickRouteSection />
      <ServicesSection />
      <FleetSection />
      <PackagesPreviewSection />
      <DestinationsPreviewSection />
      <FeaturesSection />
      <CtaSection />
      <FloatingWhatsApp />
    </>
  );
}
