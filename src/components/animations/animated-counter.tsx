"use client";

import { useEffect, useRef, useState } from "react";
import { useCounter } from "@/hooks/use-counter";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  className?: string;
  duration?: number;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  className,
  duration = 2000,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const count = useCounter({ end: value, duration, enabled: inView });

  const display =
    value >= 10000
      ? count >= 10000
        ? `${Math.floor(count / 1000)}K`
        : count.toLocaleString()
      : count.toLocaleString();

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <p className="text-3xl font-bold tracking-tight text-gradient sm:text-4xl md:text-5xl">
        {prefix}
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
