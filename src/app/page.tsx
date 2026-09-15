import { HeroSection } from "@/components/sections/hero-section";
import { QuickRouteSection } from "@/components/sections/quick-route-section";
import { ServicesSection } from "@/components/sections/services-section";
import { FleetSection } from "@/components/sections/fleet-section";
import { PackagesPreviewSection } from "@/components/sections/packages-preview-section";
import { DestinationsPreviewSection } from "@/components/sections/destinations-preview-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { CtaSection } from "@/components/sections/cta-section";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { getRoutes } from "@/sanity/lib/content";

export default async function HomePage() {
  const routes = await getRoutes();

  return (
    <>
      <HeroSection />
      <QuickRouteSection routes={routes} />
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
