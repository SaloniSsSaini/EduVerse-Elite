import type { Program } from "@/types";

export const PROGRAMS: Program[] = [
  {
    slug: "bba-imba",
    name: "BBA & Integrated MBA",
    shortName: "BBA / iMBA",
    category: "undergraduate",
    duration: "3–5 Years",
    degree: "Bachelor of Business Administration",
    description: "Industry-integrated business education with global immersion and startup incubation pathways.",
    overview:
      "Our BBA and integrated MBA pathway combines core management fundamentals with live industry projects, international exposure, and entrepreneurship mentoring from day one.",
    highlights: ["Industry Mentorship", "Global Immersion", "Startup Incubation", "Live Consulting Projects"],
    careers: ["Management Trainee", "Business Analyst", "Marketing Manager", "Entrepreneur"],
    syllabus: ["Financial Accounting", "Marketing Management", "Business Analytics", "Strategic Management", "International Trade"],
    fees: "₹2.4L – ₹3.8L per year",
    eligibility: "10+2 with 50% aggregate (45% reserved). Personal interview required.",
    intake: "August 2026",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80",
    icon: "briefcase",
    featured: true,
  },
  {
    slug: "btech-bca",
    name: "B.Tech & BCA",
    shortName: "B.Tech / BCA",
    category: "undergraduate",
    duration: "3–4 Years",
    degree: "Bachelor of Technology / Computer Applications",
    description: "Cutting-edge computer science with AI/ML labs, full-stack development, and capstone industry projects.",
    overview:
      "Build production-grade software skills through AI/ML labs, cloud architecture modules, and embedded internships with leading tech companies.",
    highlights: ["AI/ML Labs", "Capstone Projects", "Full-Stack Training", "Industry Certifications"],
    careers: ["Software Engineer", "Data Scientist", "Cloud Architect", "DevOps Engineer"],
    syllabus: ["Data Structures", "Machine Learning", "Cloud Computing", "Cyber Security", "Full-Stack Development"],
    fees: "₹2.8L – ₹4.2L per year",
    eligibility: "10+2 with Mathematics. JEE/state entrance preferred for B.Tech.",
    intake: "August 2026",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa43?w=1200&q=80",
    icon: "cpu",
    featured: true,
  },
  {
    slug: "bcom-bsc",
    name: "B.Com & B.Sc Programs",
    shortName: "B.Com / B.Sc",
    category: "undergraduate",
    duration: "3–4 Years",
    degree: "Bachelor of Commerce / Science",
    description: "Commerce and science streams with ACCA pathway, forensic science, and research lab access.",
    overview:
      "Multidisciplinary programmes aligned with NEP 2020 offering forensic science, nutrition science, and professional accounting pathways.",
    highlights: ["ACCA Pathway", "Research Labs", "Forensic Science", "Industry Workshops"],
    careers: ["Chartered Accountant", "Forensic Analyst", "Research Scientist", "Financial Analyst"],
    syllabus: ["Corporate Accounting", "Forensic Methods", "Statistics", "Research Methodology", "Taxation"],
    fees: "₹1.8L – ₹3.2L per year",
    eligibility: "10+2 in relevant stream with 50% aggregate.",
    intake: "August 2026",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&q=80",
    icon: "flask",
  },
  {
    slug: "mba-mcom",
    name: "MBA & M.Com",
    shortName: "MBA / M.Com",
    category: "postgraduate",
    duration: "2 Years",
    degree: "Master of Business Administration",
    description: "Executive leadership programme with live consulting, international trade focus, and C-suite mentorship.",
    overview:
      "Transform into a strategic leader through case-based learning, executive coaching, and cross-border business immersion.",
    highlights: ["Executive Coaching", "Live Consulting", "International Trade", "Leadership Labs"],
    careers: ["Product Manager", "Consultant", "Investment Banker", "Operations Head"],
    syllabus: ["Corporate Finance", "Digital Marketing", "Supply Chain", "Leadership", "Global Business"],
    fees: "₹4.5L – ₹6.5L total",
    eligibility: "Bachelor's degree with 50%. CAT/MAT/CMAT scores preferred.",
    intake: "July 2026",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    icon: "chart",
    featured: true,
  },
  {
    slug: "mca-msc-it",
    name: "MCA & MSc (IT)",
    shortName: "MCA / MSc IT",
    category: "postgraduate",
    duration: "2 Years",
    degree: "Master of Computer Applications",
    description: "Advanced IT specialization in AI full-stack, cyber forensics, and cloud-native architecture.",
    overview:
      "Deep technical mastery with specialization tracks in AI engineering, cybersecurity, and enterprise cloud solutions.",
    highlights: ["AI Full-Stack", "Cyber Forensics", "Cloud Architecture", "Research Publications"],
    careers: ["Senior Developer", "Security Analyst", "ML Engineer", "Solutions Architect"],
    syllabus: ["Advanced Algorithms", "Deep Learning", "DevSecOps", "Distributed Systems", "Research Project"],
    fees: "₹3.8L – ₹5.2L total",
    eligibility: "BCA/B.Tech or equivalent with 50% aggregate.",
    intake: "July 2026",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    icon: "code",
    featured: true,
  },
  {
    slug: "llm-specialized-msc",
    name: "LL.M & Specialized MSc",
    shortName: "LL.M / MSc",
    category: "postgraduate",
    duration: "2 Years",
    degree: "Master of Laws / Specialized Science",
    description: "Advanced programmes in law, clinical research, quantum computing, and digital forensics.",
    overview:
      "Niche postgraduate pathways designed for specialists pursuing research, policy, and advanced technical careers.",
    highlights: ["Clinical Research", "Quantum Computing", "Digital Forensics", "Policy Labs"],
    careers: ["Legal Counsel", "Research Fellow", "Policy Advisor", "Quantum Researcher"],
    syllabus: ["Advanced Legal Theory", "Research Ethics", "Quantum Algorithms", "Digital Investigation"],
    fees: "₹3.2L – ₹5.8L total",
    eligibility: "Relevant bachelor's degree with 55% aggregate. Interview required.",
    intake: "July 2026",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    icon: "scale",
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return PROGRAMS.find((p) => p.slug === slug);
}

export function getAllProgramSlugs(): string[] {
  return PROGRAMS.map((p) => p.slug);
}

export function getProgramsByCategory(category: Program["category"]): Program[] {
  return PROGRAMS.filter((p) => p.category === category);
}
