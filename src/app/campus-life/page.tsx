import Image from "next/image";
import { createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/shared/page-hero";
import { CAMPUS_FEATURES } from "@/data/content";
import { ScrollReveal } from "@/components/gsap/scroll-reveal";

export const metadata = createPageMetadata({
  title: "Campus Life",
  description: "Explore world-class facilities, innovation labs, and vibrant student life at EduVerse Elite.",
  path: "/campus-life",
});

export default function CampusLifePage() {
  return (
    <>
      <PageHero
        eyebrow="Student Experience"
        title="A Campus Built for Innovation"
        description="50-acre smart campus with labs, clubs, sports, and an entrepreneurial ecosystem."
        breadcrumbs={[{ label: "Campus Life" }]}
      />
      <section className="section-padding">
        <div className="container-wide grid gap-6 md:grid-cols-2">
          {CAMPUS_FEATURES.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.1} className={i === 0 ? "md:col-span-2" : ""}>
              <div className={`group relative overflow-hidden rounded-2xl border border-border ${i === 0 ? "aspect-[21/9]" : "aspect-[4/3]"}`}>
                <Image src={feature.image} alt={feature.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground max-w-xl">{feature.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
