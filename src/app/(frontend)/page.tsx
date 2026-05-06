import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import HomeIntro from "@/components/HomeIntro";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import { ArrowUpRight } from "lucide-react";
import { getHomepageData } from "@/sanity/queries";

import ContactSection from "@/components/ContactSection";

export default async function Home() {
  let data;
  try {
    data = await getHomepageData();
  } catch (error) {
    console.error("Sanity fetch error:", error);
    data = null;
  }

  const contact = data?.contactInfo || {};

  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero data={data?.homepage} />

      {/* Intro Section */}
      <HomeIntro data={data?.homepage} />

      {/* Services Section */}
      <ServicesSection data={data?.services} />

      {/* Projects Section */}
      <ProjectsSection data={data?.projects} />

      {/* Rotating Gallery (Our Tools) */}
      <RotatingGallery data={data?.tools} />

      {/* LET'S CONNECT (Homepage Only) */}
      <ContactSection contactInfo={contact} />
    </div>
  );
}
