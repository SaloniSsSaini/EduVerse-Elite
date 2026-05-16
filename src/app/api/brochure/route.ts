import { NextResponse } from "next/server";
import { brochureSchema } from "@/lib/validations";
import { prisma, isDatabaseEnabled } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = brochureSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ message: "Invalid email" }, { status: 400 });
    }

    const { email, program } = parsed.data;

    if (isDatabaseEnabled()) {
      await prisma.brochureDownload.create({
        data: { email, program: program ?? null },
      });
    }

    console.info("[brochure] Download requested:", email, program);

    return NextResponse.json({
      success: true,
      message: "Brochure will be sent to your email shortly",
    });
  } catch (error) {
    console.error("[api/brochure]", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
