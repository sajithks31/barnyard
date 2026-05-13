import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getHomepageData } from "@/sanity/queries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFoundClient from "./NotFoundClient";

export default async function NotFound() {
  let data;
  try {
    data = await getHomepageData();
  } catch (error) {
    console.error("Sanity fetch error in 404:", error);
    data = null;
  }

  const contact = data?.contactInfo || {};
  const navLinks = data?.navigation?.menuItems;
  const footerNavLinks = data?.navigation?.footerMenuItems;

  return (
    <div className="flex flex-col min-h-screen bg-black overflow-x-hidden">
      <Navbar data={{ navLinks, contactInfo: contact }} />
      
      <main className="flex-grow flex items-center justify-center relative min-h-[80vh]">
        <NotFoundClient />
      </main>

      <Footer navLinks={navLinks} footerNavLinks={footerNavLinks} contactInfo={contact} />
    </div>
  );
}
