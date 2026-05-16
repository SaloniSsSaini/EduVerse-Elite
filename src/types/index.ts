export type ProgramCategory = "undergraduate" | "postgraduate";

export interface Program {
  slug: string;
  name: string;
  shortName: string;
  category: ProgramCategory;
  duration: string;
  degree: string;
  description: string;
  overview: string;
  highlights: string[];
  careers: string[];
  syllabus: string[];
  fees: string;
  eligibility: string;
  intake: string;
  image: string;
  icon: string;
  featured?: boolean;
}

export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  department: string;
  specialization: string;
  education: string;
  image: string;
  email?: string;
}

export interface UniversityEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  endDate?: string;
  location: string;
  type: "open-day" | "webinar" | "workshop" | "fest";
  image: string;
  registrationUrl?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  image: string;
  readTime: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  program?: string;
}

export interface LeadPayload {
  fullName: string;
  email: string;
  phone: string;
  program?: string;
  message?: string;
  source: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}
