"use client";

import Link from "next/link";
import { Clock, GraduationCap } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { ScrollReveal } from "@/components/gsap/scroll-reveal";
import { LeadForm } from "@/components/shared/lead-form";
import { MagneticButton } from "@/components/effects/magnetic-button";

export function AdmissionsSection() {
  return (
    <section id="admissions" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="container-wide relative">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="relative bg-gradient-premium p-8 text-primary-foreground sm:p-12 lg:p-16">
              <ScrollReveal direction="right">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm backdrop-blur-sm">
                  <Clock className="h-4 w-4" />
                  Early Decision · Closes March 31
                </div>
                <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                  Secure Your Seat. Unlock Scholarships.
                </h2>
                <p className="mt-4 text-primary-foreground/80 leading-relaxed">
                  Apply early for priority scholarship consideration — up to 100% tuition waiver.
                </p>
                <ul className="mt-8 space-y-4">
                  {["Merit scholarships up to 100%", "On-campus placement assistance", "Global exchange opportunities"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <GraduationCap className="h-5 w-5 shrink-0 opacity-80" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <MagneticButton asChild variant="glass" className="mt-8 text-foreground">
                  <Link href="/admissions">Full Admissions Page</Link>
                </MagneticButton>
              </ScrollReveal>
            </div>
            <div className="p-8 sm:p-12 lg:p-16">
              <FadeIn direction="left">
                <h3 className="text-xl font-semibold">Request Admission Information</h3>
                <p className="mt-2 text-sm text-muted-foreground">Our team will contact you within 24 hours.</p>
                <div className="mt-8">
                  <LeadForm source="home-admissions" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
