import { createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/shared/page-hero";
import { FacultyDirectory } from "@/components/pages/faculty-directory";

export const metadata = createPageMetadata({
  title: "Faculty",
  description: "Meet our distinguished faculty from academia and industry.",
  path: "/faculty",
});

export default function FacultyPage() {
  return (
    <>
      <PageHero
        eyebrow="Our People"
        title="World-Class Faculty"
        description="Scholars and industry leaders dedicated to your academic and professional growth."
        breadcrumbs={[{ label: "Faculty" }]}
      />
      <FacultyDirectory />
    </>
  );
}
