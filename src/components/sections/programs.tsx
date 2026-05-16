"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/sections/section-header";
import { ScrollReveal } from "@/components/gsap/scroll-reveal";
import { ProgramCard } from "@/components/shared/program-card";
import { PROGRAMS } from "@/data/programs";
import { MagneticButton } from "@/components/effects/magnetic-button";

export function ProgramsSection() {
  const featured = PROGRAMS.filter((p) => p.featured);

  return (
    <section id="programs" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Academic Excellence"
          title="Programmes Designed for Tomorrow"
          description="Industry-aligned undergraduate and postgraduate programmes with integrated internships and global exposure."
        />

        <ScrollReveal className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </ScrollReveal>

        <ScrollReveal className="mt-10 text-center">
          <MagneticButton asChild size="lg">
            <Link href="/programs">
              View All Programmes
              <ArrowRight className="h-4 w-4" />
            </Link>
          </MagneticButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
