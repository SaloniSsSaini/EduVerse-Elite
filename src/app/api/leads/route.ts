import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validations";
import { prisma, isDatabaseEnabled } from "@/lib/db";
import { saveLeadFallback } from "@/lib/leads-store";
import { sendLeadConfirmation } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Validation failed", errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const id = crypto.randomUUID();
    const createdAt = new Date().toISOString();

    if (isDatabaseEnabled()) {
      await prisma.lead.create({
        data: {
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          program: data.program ?? null,
          message: data.message ?? null,
          source: data.source,
        },
      });
    } else {
      await saveLeadFallback({ ...data, id, createdAt });
    }

    await sendLeadConfirmation(data);

    return NextResponse.json({ success: true, id, message: "Lead submitted successfully" });
  } catch (error) {
    console.error("[api/leads]", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
