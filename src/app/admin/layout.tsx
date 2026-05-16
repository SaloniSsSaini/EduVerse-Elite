import Link from "next/link";
import { SITE_CONFIG } from "@/data/site";

export const metadata = {
  title: "Admin Dashboard",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-secondary/20">
      <header className="border-b border-border bg-card">
        <div className="container-wide flex h-16 items-center justify-between px-4">
          <Link href="/admin" className="font-semibold">
            {SITE_CONFIG.name} Admin
          </Link>
          <nav className="flex gap-4 text-sm">
            <Link href="/admin" className="text-muted-foreground hover:text-foreground">
              Overview
            </Link>
            <Link href="/admin/leads" className="text-muted-foreground hover:text-foreground">
              Leads
            </Link>
            <Link href="/" className="text-primary hover:underline">
              View Site
            </Link>
          </nav>
        </div>
      </header>
      <div className="container-wide px-4 py-8">{children}</div>
    </div>
  );
}
