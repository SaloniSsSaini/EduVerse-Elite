"use client";

import {
  Award,
  TrendingUp,
  Briefcase,
  Globe,
  Building2,
  Users,
} from "lucide-react";
import { SectionHeader } from "@/components/sections/section-header";
import { StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { PRESTIGE_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap = {
  award: Award,
  trending: TrendingUp,
  briefcase: Briefcase,
  globe: Globe,
  building: Building2,
  users: Users,
};

export function PrestigeSection() {
  return (
    <section id="prestige" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Excellence & Recognition"
          title="Trusted by Industry Leaders Worldwide"
          description="Our accreditations, rankings, and placement outcomes reflect decades of educational excellence and innovation."
        />

        <StaggerContainer className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {PRESTIGE_ITEMS.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <StaggerItem key={item.title}>
                <div
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
                    i === 0 && "lg:col-span-1"
                  )}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
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
