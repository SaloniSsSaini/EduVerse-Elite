export const SITE_CONFIG = {
  name: "EduVerse Elite",
  tagline: "Where Future Leaders Are Forged",
  description:
    "A new-age, tech-driven university offering industry-aligned programmes that prepare students for employment and entrepreneurship in the global economy.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://eduverse-elite.vercel.app",
  email: "admissions@eduverseelite.edu",
  phone: "+91 79 1234 5678",
  address: "Knowledge Park, Ahmedabad, Gujarat 380015, India",
};

export const MAIN_NAV: { label: string; href: string }[] = [
  { label: "Programs", href: "/programs" },
  { label: "Admissions", href: "/admissions" },
  { label: "Campus", href: "/campus-life" },
  { label: "Faculty", href: "/faculty" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV = {
  academics: [
    { label: "All Programs", href: "/programs" },
    { label: "Admissions", href: "/admissions" },
    { label: "Faculty", href: "/faculty" },
    { label: "Events", href: "/events" },
  ],
  campus: [
    { label: "Campus Life", href: "/campus-life" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
};

export const HERO_STATS = [
  { value: 60, suffix: "+", label: "Years of Legacy" },
  { value: 95, suffix: "%", label: "Placement Rate" },
  { value: 200, suffix: "+", label: "Industry Partners" },
  { value: 15000, suffix: "+", label: "Alumni Network" },
];

export const TRUST_BADGES = ["UGC Approved", "NAAC A+", "NEP 2020", "ISO Certified"];

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
];
