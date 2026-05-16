import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { leadSchema } from "@/lib/validations";
import { prisma, isDatabaseEnabled } from "@/lib/db";
import { saveLeadFallback } from "@/lib/leads-store";
import { sendLeadConfirmation } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Validation failed", errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { fullName, email, phone, subject, message } = parsed.data;
    const leadData = leadSchema.parse({
      fullName,
      email,
      phone,
      message: `${subject}: ${message}`,
      source: "contact-form",
    });

    if (isDatabaseEnabled()) {
      await prisma.lead.create({
        data: {
          fullName: leadData.fullName,
          email: leadData.email,
          phone: leadData.phone,
          message: leadData.message ?? null,
          source: "contact-form",
        },
      });
    } else {
      await saveLeadFallback({
        ...leadData,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
      });
    }

    await sendLeadConfirmation(leadData);

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("[api/contact]", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
