import { getAboutPageData, getHomepageData } from "@/sanity/queries";
import ClientAbout from "./ClientAbout";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  let data;
  let homeData;
  try {
    data = await getAboutPageData();
    homeData = await getHomepageData();
  } catch (error) {
    console.error("Sanity fetch error in About page metadata:", error);
  }
  
  const seo = data?.about?.seo;
  const siteSettings = homeData?.siteSettings;

  const title = seo?.title || "About — Barnyard Productions";
  const description = seo?.description || "Creative-led production studio crafting cinematic video, photography, and visual content.";
  const ogImage = seo?.ogImageUrl;

  return {
    title,
    description,
    alternates: {
      canonical: seo?.canonical || `${siteSettings?.baseUrl || "https://barnyard.ae"}/about`,
    },
    openGraph: {
      title,
      description,
      images: ogImage ? [{ url: ogImage }] : [],
    },
    robots: seo?.noIndex ? "noindex, nofollow" : "index, follow",
  };
}

export default async function AboutPage() {
  let data;
  let homeData;
  try {
    data = await getAboutPageData();
    homeData = await getHomepageData();
  } catch (error) {
    console.error("Sanity fetch error in About page:", error);
    data = null;
    homeData = null;
  }

  const aboutSeo = data?.about?.seo;

  return (
    <>
      {aboutSeo?.schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: aboutSeo.schemaMarkup }}
        />
      )}
      <ClientAbout data={data} />
    </>
  );
}
