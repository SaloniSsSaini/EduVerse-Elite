import { notFound } from "next/navigation";
import Image from "next/image";
import { getBlogBySlug, getAllBlogSlugs } from "@/data/blog";
import { createPageMetadata } from "@/lib/metadata";
import { getArticleSchema, getBreadcrumbSchema } from "@/lib/schema";
import { PageHero } from "@/components/shared/page-hero";
import { SITE_CONFIG } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    image: post.image,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const schema = getArticleSchema(post);
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Blog", url: `${SITE_CONFIG.url}/blog` },
    { name: post.title, url: `${SITE_CONFIG.url}/blog/${slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={`${post.readTime} read · By ${post.author} · ${post.publishedAt}`}
        breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
      />

      <article className="section-padding">
        <div className="container-wide max-w-3xl">
          <div className="relative mb-10 aspect-video overflow-hidden rounded-2xl border border-border">
            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          </div>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p>
            <p className="mt-6 text-foreground leading-relaxed">{post.content}</p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              At EduVerse Elite, we continue to invest in programmes and infrastructure that prepare students for
              global careers. Contact our admissions team to learn more about how you can be part of our next cohort.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
