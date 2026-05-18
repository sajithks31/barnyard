import { Metadata } from "next";
import ClientContact from "./ClientContact";
import { getHomepageData } from "@/sanity/queries";

export async function generateMetadata(): Promise<Metadata> {
  let homeData;
  try {
    homeData = await getHomepageData();
  } catch (error) {
    console.error("Sanity fetch error in Contact page metadata:", error);
  }

  const siteSettings = homeData?.siteSettings;

  const title = "Contact — Barnyard Productions";
  const description = "Get in touch with our creative production studio in Abu Dhabi.";

  return {
    title,
    description,
    alternates: {
      canonical: `${siteSettings?.baseUrl || "https://barnyard.ae"}/contact`,
    },
    openGraph: {
      title,
      description,
    },
  };
}

export default function ContactPage() {
  return <ClientContact />;
}
