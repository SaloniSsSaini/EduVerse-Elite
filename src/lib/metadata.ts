import type { Metadata } from "next";
import { SITE_CONFIG } from "@/data/site";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function createPageMetadata({
  title,
  description,
  path = "",
  image = "/og-image.svg",
}: PageMeta): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      images: [image],
    },
  };
}
