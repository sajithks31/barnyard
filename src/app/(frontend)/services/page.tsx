import { getServicesData, getHomepageData } from "@/sanity/queries";
import ClientServices from "./ClientServices";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getServicesData();
  const homepageData = await getHomepageData();
  const seo = data?.pageSettings?.seo;
  const siteSettings = homepageData?.siteSettings;

  const title = seo?.title || "Our Services | Barnyard Productions";
  const description = seo?.description || "High-end cinema cameras and seamless execution for TVCs, branded content, and more.";

  return {
    title,
    description,
    alternates: {
      canonical: seo?.canonical || (siteSettings?.baseUrl ? `${siteSettings.baseUrl}/services` : undefined),
    },
    openGraph: {
      title,
      description,
      images: seo?.ogImageUrl ? [{ url: seo.ogImageUrl }] : [],
    },
    robots: seo?.noIndex ? "noindex, nofollow" : "index, follow",
  };
}

export default async function ServicesPage() {
  let data;
  try {
    data = await getServicesData();
  } catch (error) {
    console.error("Sanity fetch error in Services page:", error);
    data = null;
  }

  return <ClientServices data={data} />;
}
