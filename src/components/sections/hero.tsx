"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import { FadeIn } from "@/components/animations/fade-in";
import { TextReveal } from "@/components/gsap/text-reveal";
import { ParallaxLayer } from "@/components/gsap/parallax-layer";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { HERO_STATS, SITE_CONFIG, TRUST_BADGES } from "@/data/site";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden mesh-gradient">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <ParallaxLayer speed={0.2} className="absolute -top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
        <ParallaxLayer speed={0.15} className="absolute -bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/15 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="container-wide relative z-10 px-4 pt-32 pb-20 sm:px-6 lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn delay={0.1}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">
                Admissions Open · <span className="font-medium text-foreground">Scholarships up to 100%</span>
              </span>
            </div>
          </FadeIn>

          <TextReveal
            as="h1"
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {`Shape Your Future at ${SITE_CONFIG.name}`}
          </TextReveal>

          <FadeIn delay={0.3}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
              {SITE_CONFIG.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MagneticButton asChild size="lg" className="w-full sm:w-auto">
                <Link href="/admissions">
                  Start Application
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </MagneticButton>
              <MagneticButton asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/programs">Explore Programs</Link>
              </MagneticButton>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {TRUST_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-border bg-card/50 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.6} className="mt-16 lg:mt-20">
          <div className="grid grid-cols-2 gap-6 rounded-2xl glass p-6 sm:grid-cols-4 sm:p-8 lg:mx-auto lg:max-w-4xl">
            {HERO_STATS.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </FadeIn>
      </div>

      <motion.a
        href="#prestige"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to learn more"
      >
        <span className="text-xs font-medium">Discover More</span>
        <ChevronDown className="h-5 w-5" />
      </motion.a>
    </section>
  );
}
