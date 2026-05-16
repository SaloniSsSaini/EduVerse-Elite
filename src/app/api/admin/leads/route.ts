import { NextResponse } from "next/server";
import { prisma, isDatabaseEnabled } from "@/lib/db";
import { getLeadsFallback } from "@/lib/leads-store";

function isAuthorized(request: Request): boolean {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return process.env.NODE_ENV === "development";
  const auth = request.headers.get("authorization");
  return auth === `Bearer ${secret}`;
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    if (isDatabaseEnabled()) {
      const leads = await prisma.lead.findMany({
        orderBy: { createdAt: "desc" },
        take: 100,
      });
      return NextResponse.json({ leads, source: "database" });
    }

    const leads = await getLeadsFallback();
    return NextResponse.json({ leads, source: "file" });
  } catch (error) {
    console.error("[api/admin/leads]", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
