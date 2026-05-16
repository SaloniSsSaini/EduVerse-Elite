import { promises as fs } from "fs";
import path from "path";
import type { LeadInput } from "@/lib/validations";

const LEADS_FILE = path.join(process.cwd(), "data", "leads.json");

export async function saveLeadFallback(lead: LeadInput & { id: string; createdAt: string }) {
  try {
    await fs.mkdir(path.dirname(LEADS_FILE), { recursive: true });
    let leads: (LeadInput & { id: string; createdAt: string })[] = [];
    try {
      const raw = await fs.readFile(LEADS_FILE, "utf-8");
      leads = JSON.parse(raw);
    } catch {
      leads = [];
    }
    leads.push(lead);
    await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2));
  } catch (error) {
    console.error("[leads] Fallback save failed:", error);
  }
}

export async function getLeadsFallback() {
  try {
    const raw = await fs.readFile(LEADS_FILE, "utf-8");
    return JSON.parse(raw) as (LeadInput & { id: string; createdAt: string })[];
  } catch {
    return [];
  }
}
