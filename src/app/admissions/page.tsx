import { createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/shared/page-hero";
import { LeadForm } from "@/components/shared/lead-form";
import { BrochureDownload } from "@/components/shared/brochure-download";
import { FAQ_ITEMS } from "@/data/content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/gsap/scroll-reveal";
import { GraduationCap, Clock, Award } from "lucide-react";

export const metadata = createPageMetadata({
  title: "Admissions",
  description: "Apply to EduVerse Elite. Scholarships up to 100%, early decision benefits, and rolling admissions.",
  path: "/admissions",
});

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Join Us"
        title="Begin Your Journey"
        description="Secure your seat for 2026 intake. Early applicants receive priority scholarship consideration."
        breadcrumbs={[{ label: "Admissions" }]}
      />

      <section className="section-padding">
        <div className="container-wide grid gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <div className="space-y-8">
              <div className="rounded-2xl bg-gradient-premium p-8 text-primary-foreground">
                <p className="text-sm opacity-80">Early Decision closes March 31</p>
                <h2 className="mt-2 text-2xl font-bold">Scholarships up to 100%</h2>
              </div>
              {[
                { icon: Award, text: "Merit-based full tuition waivers" },
                { icon: GraduationCap, text: "On-campus placement assistance" },
                { icon: Clock, text: "Response within 24 hours" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-primary" />
                  <span>{text}</span>
                </div>
              ))}
              <BrochureDownload />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="text-xl font-semibold">Application Inquiry</h2>
              <p className="mt-2 text-sm text-muted-foreground">Our team will contact you shortly.</p>
              <div className="mt-6">
                <LeadForm source="admissions-page" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-center mb-8">Admission FAQ</h2>
          <Accordion type="single" collapsible>
            {FAQ_ITEMS.slice(0, 4).map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
