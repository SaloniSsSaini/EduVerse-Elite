/** @deprecated Use @/data/* or @/lib/cms — kept for backward compatibility */
export * from "@/data/site";
export * from "@/data/content";
export { PROGRAMS, getProgramBySlug } from "@/data/programs";
export { FACULTY, DEPARTMENTS } from "@/data/faculty";
export { EVENTS } from "@/data/events";
export { BLOG_POSTS, getBlogBySlug } from "@/data/blog";

// Legacy home anchor links
export const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Programs", href: "/programs" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Campus", href: "/campus-life" },
  { label: "Admissions", href: "/admissions" },
  { label: "FAQ", href: "/#faq" },
];
