import type { BlogPost } from "@/types";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "nep-2020-flexibility-guide",
    title: "How NEP 2020 Creates Flexible Career Pathways",
    excerpt: "Understanding multiple entry-exit options and interdisciplinary learning at EduVerse Elite.",
    content:
      "The National Education Policy 2020 revolutionizes how students approach higher education. At EduVerse Elite, we've embedded multidisciplinary flexibility, credit transfer systems, and industry-aligned capstone projects into every programme...",
    author: "Dr. Vaibhav Shah",
    publishedAt: "2026-01-15",
    category: "Academics",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&q=80",
    readTime: "6 min",
  },
  {
    slug: "ai-labs-inauguration",
    title: "Inside Our New AI & Machine Learning Research Lab",
    excerpt: "A look at the ₹12 crore investment in next-generation computing infrastructure.",
    content:
      "Our newly inaugurated AI lab features NVIDIA workstations, robotics kits, and collaborative spaces designed for student startups and faculty research...",
    author: "Dr. Hitesh Harwani",
    publishedAt: "2026-01-08",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1677440866532-49ef80cc4e3d?w=1200&q=80",
    readTime: "4 min",
  },
  {
    slug: "placement-record-2025",
    title: "95% Placement Rate: 2025 Highlights",
    excerpt: "Top recruiters, package trends, and student success stories from the latest placement season.",
    content:
      "The 2025 placement season saw record participation from Fortune 500 companies and high-growth startups, with the highest package reaching ₹28 LPA...",
    author: "Career Services",
    publishedAt: "2025-12-20",
    category: "Placements",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80",
    readTime: "5 min",
  },
  {
    slug: "global-exchange-program",
    title: "Student Exchange: Singapore & UK Partners",
    excerpt: "How our international collaborations open doors for global exposure.",
    content:
      "Selected students now have semester-abroad opportunities with partner universities in Singapore and the United Kingdom...",
    author: "International Office",
    publishedAt: "2025-12-05",
    category: "Global",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80",
    readTime: "7 min",
  },
  {
    slug: "startup-incubation-success",
    title: "5 Student Startups Secured Seed Funding",
    excerpt: "Innovation Hub incubation programme delivers real entrepreneurial outcomes.",
    content:
      "From ed-tech to sustainable packaging, EduVerse incubated startups raised combined funding of ₹2.1 crore in 2025...",
    author: "Innovation Hub",
    publishedAt: "2025-11-18",
    category: "Entrepreneurship",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&q=80",
    readTime: "5 min",
  },
  {
    slug: "scholarship-guide-2026",
    title: "Complete Scholarship Guide for 2026 Intake",
    excerpt: "Merit, sports, and need-based aid — everything you need to apply.",
    content:
      "EduVerse Elite offers scholarships up to 100% tuition waiver. Early applicants receive priority consideration for the merit pool...",
    author: "Admissions Office",
    publishedAt: "2025-11-01",
    category: "Admissions",
    image: "https://images.unsplash.com/photo-1454165804603-c3d57bc86b40?w=1200&q=80",
    readTime: "8 min",
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
