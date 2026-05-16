"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { FACULTY, DEPARTMENTS } from "@/data/faculty";
import { cn } from "@/lib/utils";

export function FacultyDirectory() {
  const [department, setDepartment] = useState<string>("All");

  const filtered = useMemo(() => {
    if (department === "All") return FACULTY;
    return FACULTY.filter((f) => f.department === department);
  }, [department]);

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="flex flex-wrap gap-2 mb-10">
          {["All", ...DEPARTMENTS].map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDepartment(d)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                department === d
                  ? "bg-gradient-premium text-white"
                  : "border border-border hover:border-primary/30"
              )}
            >
              {d}
            </button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((member) => (
            <article
              key={member.id}
              className="group rounded-2xl border border-border bg-card overflow-hidden transition-all hover:border-primary/30 hover:shadow-lg"
              data-cursor-hover
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium text-primary uppercase">{member.department}</p>
                <h3 className="mt-1 font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.title}</p>
                <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{member.specialization}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
