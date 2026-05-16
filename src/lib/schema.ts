import { SITE_CONFIG } from "@/data/site";
import { PROGRAMS } from "@/data/programs";
import type { Program, BlogPost } from "@/types";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address,
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "380015",
      addressCountry: "IN",
    },
  };
}

export function getCourseSchema(program: Program) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: program.name,
    description: program.description,
    provider: {
      "@type": "CollegeOrUniversity",
      name: SITE_CONFIG.name,
      sameAs: SITE_CONFIG.url,
    },
    educationalLevel: program.category === "undergraduate" ? "Undergraduate" : "Graduate",
    timeRequired: program.duration,
    offers: {
      "@type": "Offer",
      price: program.fees,
      priceCurrency: "INR",
    },
  };
}

export function getArticleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: post.author },
    datePublished: post.publishedAt,
    image: post.image,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getAllCoursesSchema() {
  return PROGRAMS.map(getCourseSchema);
}
