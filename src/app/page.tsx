import { HeroSection } from "@/components/sections/hero";
import { PrestigeSection } from "@/components/sections/prestige";
import { AboutSection } from "@/components/sections/about";
import { ProgramsSection } from "@/components/sections/programs";
import { WhyChooseSection } from "@/components/sections/why-choose";
import { CampusSection } from "@/components/sections/campus";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { AdmissionsSection } from "@/components/sections/admissions";
import { FAQSection } from "@/components/sections/faq";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PrestigeSection />
      <AboutSection />
      <ProgramsSection />
      <WhyChooseSection />
      <CampusSection />
      <TestimonialsSection />
      <AdmissionsSection />
      <FAQSection />
    </>
  );
}
