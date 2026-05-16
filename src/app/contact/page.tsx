import { Mail, MapPin, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/shared/page-hero";
import { ContactForm } from "@/components/pages/contact-form";
import { ScrollReveal } from "@/components/gsap/scroll-reveal";

export const metadata = createPageMetadata({
  title: "Contact Us",
  description: "Get in touch with EduVerse Elite admissions and support teams.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="We'd Love to Hear From You"
        description="Reach our admissions team for programme details, campus visits, and application support."
        breadcrumbs={[{ label: "Contact" }]}
      />
      <section className="section-padding">
        <div className="container-wide grid gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <div className="space-y-8">
              {[
                { icon: MapPin, label: "Address", value: SITE_CONFIG.address },
                { icon: Phone, label: "Phone", value: SITE_CONFIG.phone },
                { icon: Mail, label: "Email", value: SITE_CONFIG.email },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{label}</p>
                    <p className="mt-1 font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="text-xl font-semibold">Send a Message</h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
