"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/sections/section-header";
import { FadeIn } from "@/components/animations/fade-in";
import { CAMPUS_FEATURES } from "@/lib/constants";

export function CampusSection() {
  return (
    <section id="campus" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Campus Life"
          title="A Vibrant Ecosystem for Growth"
          description="Experience world-class facilities, innovation labs, and a thriving student community on our smart campus."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {CAMPUS_FEATURES.map((feature, i) => (
            <FadeIn
              key={feature.title}
              delay={i * 0.1}
              className={i === 0 ? "md:col-span-2 md:row-span-2" : ""}
            >
              <div
                className={`group relative overflow-hidden rounded-2xl border border-border ${
                  i === 0 ? "h-full min-h-[400px]" : "h-[240px]"
                }`}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={i === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {feature.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
