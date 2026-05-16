"use client";

import { useState } from "react";
import { PROGRAMS } from "@/data/programs";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

export function ComparePrograms() {
  const featured = PROGRAMS.filter((p) => p.featured).slice(0, 3);
  const [selected, setSelected] = useState<string[]>(featured.map((p) => p.slug));

  const programs = selected
    .map((slug) => PROGRAMS.find((p) => p.slug === slug))
    .filter(Boolean) as typeof PROGRAMS;

  const toggle = (slug: string) => {
    setSelected((prev) => {
      if (prev.includes(slug)) return prev.filter((s) => s !== slug);
      if (prev.length >= 3) return [...prev.slice(1), slug];
      return [...prev, slug];
    });
  };

  const rows = [
    { label: "Duration", key: "duration" as const },
    { label: "Fees", key: "fees" as const },
    { label: "Eligibility", key: "eligibility" as const },
    { label: "Intake", key: "intake" as const },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {PROGRAMS.map((p) => (
          <button
            key={p.slug}
            onClick={() => toggle(p.slug)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all",
              selected.includes(p.slug)
                ? "bg-gradient-premium text-white shadow-md"
                : "border border-border bg-card hover:border-primary/30"
            )}
          >
            {p.shortName}
          </button>
        ))}
      </div>

      {programs.length > 0 && (
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[600px] text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary/30">
                <th className="p-4 text-left font-medium text-muted-foreground">Compare</th>
                {programs.map((p) => (
                  <th key={p.slug} className="p-4 text-left font-semibold">
                    {p.shortName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.key} className="border-b border-border">
                  <td className="p-4 font-medium text-muted-foreground">{row.label}</td>
                  {programs.map((p) => (
                    <td key={p.slug} className="p-4">
                      {p[row.key]}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="p-4 font-medium text-muted-foreground">AI/ML Focus</td>
                {programs.map((p) => (
                  <td key={p.slug} className="p-4">
                    {p.highlights.some((h) => h.toLowerCase().includes("ai")) ? (
                      <Check className="h-5 w-5 text-green-500" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground" />
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
