import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import HomeIntro from "@/components/HomeIntro";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import { ArrowUpRight } from "lucide-react";
import { getHomepageData } from "@/sanity/queries";

import ContactSection from "@/components/ContactSection";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomepageData();
  const seo = data?.homepage?.seo;
  const siteSettings = data?.siteSettings;

  const title = seo?.title || siteSettings?.siteTitle || "Barnyard Productions";
  const description = seo?.description || "Creative-led production studio crafting cinematic video, photography, and visual content.";
  const ogImage = seo?.ogImageUrl;

  return {
    title,
    description,
    alternates: {
      canonical: seo?.canonical || siteSettings?.baseUrl,
    },
    openGraph: {
      title,
      description,
      images: ogImage ? [{ url: ogImage }] : [],
    },
    robots: seo?.noIndex ? "noindex, nofollow" : "index, follow",
    verification: {
      google: siteSettings?.googleSearchConsole,
    },
  };
}

export default async function Home() {
  let data;
  try {
    data = await getHomepageData();
  } catch (error) {
    console.error("Sanity fetch error:", error);
    data = null;
  }

  const contact = data?.contactInfo || {};
  const siteSettings = data?.siteSettings;
  const homepageSeo = data?.homepage?.seo;

  return (
    <div className="relative">
      {/* Global Schema */}
      {siteSettings?.globalSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: siteSettings.globalSchema }}
        />
      )}
      {/* Page Schema */}
      {homepageSeo?.schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: homepageSeo.schemaMarkup }}
        />
      )}
      {/* Hero Section */}
      <Hero data={data?.homepage} />

      {/* Intro Section */}
      <HomeIntro data={data?.homepage} />

      {/* Services Section */}
      <ServicesSection data={data?.services} settings={data?.homepage} />

      {/* Projects Section */}
      <ProjectsSection data={data?.projects} settings={data?.homepage} />

      {/* LET'S CONNECT (Homepage Only) */}
      <ContactSection contactInfo={contact} />
    </div>
  );
}
