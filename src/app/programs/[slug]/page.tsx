import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PROGRAMS, getProgramBySlug, getAllProgramSlugs } from "@/data/programs";
import { createPageMetadata } from "@/lib/metadata";
import { getCourseSchema, getBreadcrumbSchema } from "@/lib/schema";
import { PageHero } from "@/components/shared/page-hero";
import { LeadForm } from "@/components/shared/lead-form";
import { ScrollReveal } from "@/components/gsap/scroll-reveal";
import { SITE_CONFIG } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllProgramSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return {};
  return createPageMetadata({
    title: program.name,
    description: program.description,
    path: `/programs/${slug}`,
    image: program.image,
  });
}

export default async function ProgramDetailPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  const related = PROGRAMS.filter(
    (p) => p.category === program.category && p.slug !== program.slug
  ).slice(0, 2);

  const courseSchema = getCourseSchema(program);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Programs", url: `${SITE_CONFIG.url}/programs` },
    { name: program.shortName, url: `${SITE_CONFIG.url}/programs/${slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        eyebrow={program.category}
        title={program.name}
        description={program.description}
        breadcrumbs={[
          { label: "Programs", href: "/programs" },
          { label: program.shortName },
        ]}
      />

      <section className="section-padding">
        <div className="container-wide grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <ScrollReveal>
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-border">
                <Image src={program.image} alt={program.name} fill className="object-cover" priority />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="text-2xl font-bold">Overview</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{program.overview}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Duration", value: program.duration },
                  { label: "Fees", value: program.fees },
                  { label: "Intake", value: program.intake },
                  { label: "Eligibility", value: program.eligibility },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-border p-4">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-semibold text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="text-2xl font-bold">Highlights</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {program.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="text-2xl font-bold">Career Outcomes</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {program.careers.map((c) => (
                  <span key={c} className="rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm">
                    {c}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="text-2xl font-bold">Syllabus Overview</h2>
              <ul className="mt-4 space-y-2">
                {program.syllabus.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {s}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          <div className="space-y-6">
            <div className="sticky top-28 rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold">Apply for {program.shortName}</h3>
              <p className="mt-2 text-sm text-muted-foreground">Request admission information</p>
              <div className="mt-6">
                <LeadForm source={`program-${slug}`} defaultProgram={slug} />
              </div>
            </div>

            {related.length > 0 && (
              <div className="rounded-2xl border border-border p-6">
                <h3 className="font-semibold">Related Programmes</h3>
                <ul className="mt-4 space-y-3">
                  {related.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/programs/${p.slug}`} className="flex items-center gap-2 text-sm hover:text-primary">
                        {p.shortName} <ArrowRight className="h-4 w-4" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
