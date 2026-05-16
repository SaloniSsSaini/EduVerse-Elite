import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Calendar, MapPin } from "lucide-react";
import { EVENTS } from "@/data/events";
import { createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/shared/page-hero";
import { ScrollReveal } from "@/components/gsap/scroll-reveal";
import { Button } from "@/components/ui/button";

export const metadata = createPageMetadata({
  title: "Events",
  description: "Open days, workshops, and campus events at EduVerse Elite.",
  path: "/events",
});

export default function EventsPage() {
  const sorted = [...EVENTS].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <>
      <PageHero
        eyebrow="Campus Events"
        title="Experience EduVerse Elite"
        description="Join open days, tech summits, cultural fests, and career connect sessions."
        breadcrumbs={[{ label: "Events" }]}
      />
      <section className="section-padding">
        <div className="container-wide space-y-8">
          {sorted.map((event, i) => (
            <ScrollReveal key={event.id} delay={i * 0.05}>
              <article className="group grid overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-[300px_1fr] transition-all hover:border-primary/30 hover:shadow-lg">
                <div className="relative aspect-video md:aspect-auto md:min-h-[200px]">
                  <Image src={event.image} alt={event.title} fill className="object-cover" />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-8">
                  <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary capitalize">
                    {event.type.replace("-", " ")}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold group-hover:text-primary transition-colors">{event.title}</h3>
                  <p className="mt-2 text-muted-foreground">{event.description}</p>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-primary" />
                      {format(new Date(event.date), "MMM d, yyyy · h:mm a")}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-primary" />
                      {event.location}
                    </span>
                  </div>
                  {event.registrationUrl && (
                    <Button asChild className="mt-4 w-fit" size="sm">
                      <Link href={event.registrationUrl}>Register</Link>
                    </Button>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
