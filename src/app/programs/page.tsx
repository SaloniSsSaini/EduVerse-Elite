import { PROGRAMS } from "@/data/programs";
import { createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/shared/page-hero";
import { ProgramCard } from "@/components/shared/program-card";
import { ComparePrograms } from "@/components/shared/compare-programs";
import { BrochureDownload } from "@/components/shared/brochure-download";
import { ScrollReveal } from "@/components/gsap/scroll-reveal";

export const metadata = createPageMetadata({
  title: "Academic Programmes",
  description: "Explore undergraduate and postgraduate programmes at EduVerse Elite.",
  path: "/programs",
});

export default function ProgramsPage() {
  const ug = PROGRAMS.filter((p) => p.category === "undergraduate");
  const pg = PROGRAMS.filter((p) => p.category === "postgraduate");

  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Programmes Designed for Tomorrow"
        description="Industry-aligned degrees with integrated internships, capstone projects, and global exposure."
        breadcrumbs={[{ label: "Programs" }]}
      />

      <section className="section-padding">
        <div className="container-wide space-y-16">
          <ScrollReveal>
            <h2 className="text-2xl font-bold">Undergraduate</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {ug.map((p) => (
                <ProgramCard key={p.slug} program={p} />
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-bold">Postgraduate</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pg.map((p) => (
                <ProgramCard key={p.slug} program={p} />
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-8">Compare Programmes</h2>
            <ComparePrograms />
          </ScrollReveal>

          <BrochureDownload />
        </div>
      </section>
    </>
  );
}
