import Navbar from "@/components/Navbar";
import {
  DeliverySection,
  FaqSection,
  FinalCtaSection,
  HeroSection,
  GuidesSection,
  HowToOrderSection,
  LegalSection,
  MadeToOrderSection,
  PlateStylesSection,
  SiteFooter,
  SupplierSection,
  WhyReplacingSection,
} from "@/components/sections/HomePage";

export default function HomePage() {
  return (
    <main className="bg-[#080C14]">
      <Navbar />
      <HeroSection />
      <WhyReplacingSection />
      <PlateStylesSection />
      <DeliverySection />
      <HowToOrderSection />
      <LegalSection />
      <GuidesSection />
      <SupplierSection />
      <FaqSection />
      <MadeToOrderSection />
      <FinalCtaSection />
      <SiteFooter />
    </main>
  );
}
