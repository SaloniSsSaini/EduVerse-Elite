import { z } from "zod";

export const leadSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  program: z.string().optional(),
  message: z.string().optional(),
  source: z.string(),
});

export const brochureSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  program: z.string().optional(),
});

export const contactSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  subject: z.string().min(3),
  message: z.string().min(10),
});

export type LeadInput = z.infer<typeof leadSchema>;
export type BrochureInput = z.infer<typeof brochureSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
