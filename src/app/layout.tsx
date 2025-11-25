import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { safeFetch } from "@/sanity/client";
import { groq } from "next-sanity";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Query for SEO metadata
const seoQuery = groq`*[_type == "siteSettings"][0] {
  siteName,
  seo {
    metaTitle,
    metaDescription,
    "ogImageUrl": ogImage.asset->url
  }
}`;

interface SeoData {
  siteName?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImageUrl?: string;
  };
}

// Default metadata
const defaultMetadata: Metadata = {
  title: "SiteGuard99 - Design as a Subscription",
  description: "The #1 design subscription service for agencies, startups, and entrepreneurs.",
  openGraph: {
    title: "SiteGuard99 - Design as a Subscription",
    description: "The #1 design subscription service for agencies, startups, and entrepreneurs.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SiteGuard99 - Design as a Subscription",
    description: "The #1 design subscription service for agencies, startups, and entrepreneurs.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const data = await safeFetch<SeoData>(seoQuery);

  if (!data?.seo) {
    return defaultMetadata;
  }

  const title = data.seo.metaTitle || `${data.siteName || 'SiteGuard99'} - Design as a Subscription`;
  const description = data.seo.metaDescription || defaultMetadata.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description: description as string,
      type: "website",
      ...(data.seo.ogImageUrl && {
        images: [{ url: data.seo.ogImageUrl }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: description as string,
      ...(data.seo.ogImageUrl && {
        images: [data.seo.ogImageUrl],
      }),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${figtree.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
