import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Database, FileText, Mail, Layers } from "lucide-react";

const modules = [
  {
    title: "Lead Management",
    description: "View and manage admission inquiries from all forms.",
    href: "/admin/leads",
    icon: Mail,
  },
  {
    title: "Content (CMS Ready)",
    description: "Connect Sanity or Contentful to manage programmes, blog, and events.",
    href: "#",
    icon: FileText,
  },
  {
    title: "Database",
    description: "PostgreSQL via Prisma — configure DATABASE_URL in .env",
    href: "#",
    icon: Database,
  },
  {
    title: "Architecture",
    description: "Modular API routes, validation layer, and email integration.",
    href: "/programs",
    icon: Layers,
  },
];

export default function AdminDashboardPage() {
  return (
  <div>
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p className="mt-2 text-muted-foreground">
        Production-ready admin architecture. Connect database and CMS for full functionality.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {modules.map((mod) => (
          <div key={mod.title} className="rounded-2xl border border-border bg-card p-6">
            <mod.icon className="h-8 w-8 text-primary" />
            <h2 className="mt-4 text-lg font-semibold">{mod.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{mod.description}</p>
            {mod.href !== "#" && (
              <Button asChild variant="outline" size="sm" className="mt-4">
                <Link href={mod.href}>Open</Link>
              </Button>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-dashed border-border p-6 text-sm text-muted-foreground">
        <p>
          <strong>Setup:</strong> Copy <code>.env.example</code> to <code>.env</code>, set{" "}
          <code>DATABASE_URL</code>, run <code>npx prisma db push</code>, and set{" "}
          <code>ADMIN_SECRET</code> for API access.
        </p>
      </div>
    </div>
  );
}
