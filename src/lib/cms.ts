/**
 * CMS adapter layer — swap implementations for Sanity/Contentful without changing UI.
 * Currently uses local data files; replace fetchers when CMS is connected.
 */

export { PROGRAMS, getProgramBySlug, getAllProgramSlugs, getProgramsByCategory } from "@/data/programs";
export { FACULTY, DEPARTMENTS } from "@/data/faculty";
export { EVENTS } from "@/data/events";
export { BLOG_POSTS, getBlogBySlug, getAllBlogSlugs } from "@/data/blog";
export { SITE_CONFIG, MAIN_NAV, FOOTER_NAV } from "@/data/site";
export * from "@/data/content";

// Future CMS integration example:
// export async function getPrograms() {
//   return sanityClient.fetch(`*[_type == "program"]`);
// }
