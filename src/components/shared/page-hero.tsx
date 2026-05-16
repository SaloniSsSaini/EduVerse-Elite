"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ParallaxLayer } from "@/components/gsap/parallax-layer";
import { TextReveal } from "@/components/gsap/text-reveal";
import { cn } from "@/lib/utils";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  description: string;
  eyebrow?: string;
  breadcrumbs?: Breadcrumb[];
  className?: string;
}

export function PageHero({ title, description, eyebrow, breadcrumbs, className }: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden mesh-gradient pt-32 pb-20 md:pt-40 md:pb-28", className)}>
      <ParallaxLayer speed={0.15} className="pointer-events-none absolute -top-1/4 right-0 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <ParallaxLayer speed={0.1} className="pointer-events-none absolute -bottom-1/4 left-0 h-80 w-80 rounded-full bg-accent/15 blur-[100px]" />

      <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
        {breadcrumbs && (
          <nav className="mb-6 flex flex-wrap items-center gap-1 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb) => (
              <span key={crumb.label} className="flex items-center gap-1">
                <ChevronRight className="h-4 w-4" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-foreground transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-foreground">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
        )}
        <TextReveal as="h1" className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </TextReveal>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </section>
  );
}
