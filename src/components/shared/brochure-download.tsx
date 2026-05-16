"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Download, Loader2 } from "lucide-react";
import { brochureSchema, type BrochureInput } from "@/lib/validations";
import { PROGRAMS } from "@/data/programs";
import { Input } from "@/components/ui/input";
import { MagneticButton } from "@/components/effects/magnetic-button";

export function BrochureDownload() {
  const [done, setDone] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<BrochureInput>({
    resolver: zodResolver(brochureSchema),
  });

  const onSubmit = async (data: BrochureInput) => {
    const res = await fetch("/api/brochure", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed");
    setDone(true);
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 glass">
      <h3 className="text-lg font-semibold">Download Brochure</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Get the complete programme guide delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 flex flex-col gap-3 sm:flex-row">
        <Input type="email" placeholder="your@email.com" {...register("email")} className="flex-1" />
        <select
          {...register("program")}
          className="h-11 rounded-lg border border-border bg-background/50 px-3 text-sm"
        >
          <option value="">All Programmes</option>
          {PROGRAMS.map((p) => (
            <option key={p.slug} value={p.slug}>{p.shortName}</option>
          ))}
        </select>
        <MagneticButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : done ? "Sent!" : <><Download className="h-4 w-4" /> Download</>}
        </MagneticButton>
      </form>
      {errors.email && <p className="mt-2 text-xs text-red-500">{errors.email.message}</p>}
    </div>
  );
}
