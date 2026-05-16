"use client";

import {
  Layers,
  GraduationCap,
  Building2,
  Globe,
  Rocket,
  Brain,
} from "lucide-react";
import { SectionHeader } from "@/components/sections/section-header";
import { StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { WHY_CHOOSE_ITEMS } from "@/lib/constants";

const iconMap = {
  layers: Layers,
  graduation: GraduationCap,
  building: Building2,
  globe: Globe,
  rocket: Rocket,
  brain: Brain,
};

export function WhyChooseSection() {
  return (
    <section id="why-us" className="section-padding">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Why EduVerse Elite"
          title="The Competitive Edge You Deserve"
          description="Discover what sets us apart — from world-class faculty to a campus built for innovation and global careers."
        />

        <StaggerContainer
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.08}
        >
          {WHY_CHOOSE_ITEMS.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <StaggerItem key={item.title}>
                <div
                  className={`group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg ${
                    i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-premium text-white shadow-md shadow-primary/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
