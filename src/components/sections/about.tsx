"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/sections/section-header";
import { FadeIn } from "@/components/animations/fade-in";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import { ABOUT_COUNTERS } from "@/lib/constants";

const pillars = [
  "Mission-driven education for the digital age",
  "Vision to become India's most innovative private university",
  "Legacy of 60+ years through ASIA Charitable Trust",
  "Innovation through NEP 2020 aligned curricula",
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn direction="right">
            <SectionHeader
              align="left"
              eyebrow="About Us"
              title="Pioneering Education Since 1965"
              description="EduVerse Elite is a new-age, tech-driven university offering programmes that evolve with industry demand — enabling seamless pathways to employment and entrepreneurship."
            />
            <ul className="mt-8 space-y-4">
              {pillars.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {ABOUT_COUNTERS.map((counter) => (
                <AnimatedCounter
                  key={counter.label}
                  value={counter.value}
                  suffix={counter.suffix}
                  label={counter.label}
                />
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-premium opacity-20 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-border shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80"
                  alt="EduVerse Elite campus aerial view"
                  width={800}
                  height={600}
                  className="aspect-[4/3] w-full object-cover"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-4">
                  <p className="text-sm font-medium">Campus Life</p>
                  <p className="text-xs text-muted-foreground">
                    50-acre smart campus in Ahmedabad, Gujarat
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
