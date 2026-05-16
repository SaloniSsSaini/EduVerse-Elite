import type { LeadInput } from "@/lib/validations";
import { SITE_CONFIG } from "@/data/site";

export function isEmailEnabled(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}

export async function sendLeadConfirmation(lead: LeadInput): Promise<boolean> {
  if (!isEmailEnabled()) {
    console.info("[email] Demo mode — would send confirmation to:", lead.email);
    return false;
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM || SITE_CONFIG.email,
        to: lead.email,
        subject: `Thank you for your interest — ${SITE_CONFIG.name}`,
        html: `
          <h2>Hello ${lead.fullName},</h2>
          <p>Thank you for reaching out to ${SITE_CONFIG.name}. Our admissions team will contact you within 24 hours.</p>
          <p><strong>Programme:</strong> ${lead.program || "General Inquiry"}</p>
          <p>Best regards,<br/>Admissions Team</p>
        `,
      }),
    });

    if (!res.ok) {
      console.error("[email] Failed:", await res.text());
      return false;
    }

    // Notify admin
    if (process.env.EMAIL_TO) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || SITE_CONFIG.email,
          to: process.env.EMAIL_TO,
          subject: `New Lead: ${lead.fullName}`,
          html: `<p>New inquiry from ${lead.fullName} (${lead.email}) — ${lead.program || "N/A"}</p>`,
        }),
      });
    }

    return true;
  } catch (error) {
    console.error("[email] Error:", error);
    return false;
  }
}
