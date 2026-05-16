import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/site";
import { getAllProgramSlugs } from "@/data/programs";
import { getAllBlogSlugs } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;

  const staticRoutes = [
    "",
    "/programs",
    "/admissions",
    "/campus-life",
    "/faculty",
    "/events",
    "/blog",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const programRoutes = getAllProgramSlugs().map((slug) => ({
    url: `${base}/programs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = getAllBlogSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...programRoutes, ...blogRoutes];
}
