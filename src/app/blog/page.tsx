import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/data/blog";
import { createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/shared/page-hero";
import { ScrollReveal } from "@/components/gsap/scroll-reveal";

export const metadata = createPageMetadata({
  title: "Blog & News",
  description: "Latest news, insights, and updates from EduVerse Elite.",
  path: "/blog",
});

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="News & Stories"
        description="Stay updated with campus news, academic insights, and student success stories."
        breadcrumbs={[{ label: "Blog" }]}
      />
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <Link href={`/blog/${featured.slug}`} className="group grid overflow-hidden rounded-2xl border border-border md:grid-cols-2 transition-all hover:border-primary/30 hover:shadow-xl">
              <div className="relative aspect-video md:aspect-auto md:min-h-[320px]">
                <Image src={featured.image} alt={featured.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-center p-8">
                <span className="text-sm font-medium text-primary">{featured.category}</span>
                <h2 className="mt-2 text-2xl font-bold group-hover:text-primary transition-colors">{featured.title}</h2>
                <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
                <p className="mt-4 text-sm text-muted-foreground">{featured.readTime} read · {featured.author}</p>
              </div>
            </Link>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`} className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg" data-cursor-hover>
                  <div className="relative aspect-video overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-medium text-primary">{post.category}</span>
                    <h3 className="mt-2 font-semibold group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
