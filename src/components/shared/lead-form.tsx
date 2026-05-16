"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Loader2 } from "lucide-react";
import { leadSchema, type LeadInput } from "@/lib/validations";
import { PROGRAMS } from "@/data/programs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { useState } from "react";

interface LeadFormProps {
  source?: string;
  showMessage?: boolean;
  defaultProgram?: string;
}

export function LeadForm({ source = "website", showMessage = false, defaultProgram }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: { source, program: defaultProgram },
  });

  const onSubmit = async (data: LeadInput) => {
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, source }),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Submission failed");
    }

    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input id="fullName" placeholder="Your full name" {...register("fullName")} />
        {errors.fullName && <p className="text-xs text-red-500">{errors.fullName.message}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@email.com" {...register("email")} />
          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" placeholder="+91 XXXXX XXXXX" {...register("phone")} />
          {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="program">Programme of Interest</Label>
        <select
          id="program"
          {...register("program")}
          className="flex h-11 w-full rounded-lg border border-border bg-background/50 px-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="">Select a programme</option>
          {PROGRAMS.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.shortName}
            </option>
          ))}
        </select>
      </div>

      {showMessage && (
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            {...register("message")}
            rows={4}
            className="flex w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="Your message..."
          />
        </div>
      )}

      <input type="hidden" {...register("source")} />

      <MagneticButton type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : submitted ? (
          "Submitted Successfully!"
        ) : (
          <>
            Submit Inquiry
            <Send className="h-4 w-4" />
          </>
        )}
      </MagneticButton>
    </form>
  );
}
