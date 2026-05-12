"use client";

import { ArrowUpRight } from "lucide-react";

interface FooterProps {
  navLinks?: { title: string; url: string }[];
  footerNavLinks?: { title: string; url: string }[];
  contactInfo?: {
    footerCopyright?: string;
    logoUrl?: string;
    footerCta?: { label: string; url: string };
    termsUrl?: string;
    privacyUrl?: string;
  };
}

export default function Footer({ navLinks, footerNavLinks, contactInfo }: FooterProps) {
  const contact = contactInfo || {};
  const logoUrl = contact.logoUrl || "/logo.png";
  const cta = contact.footerCta || { label: "CONTACT", url: "/contact" };
  
  // Use footerNavLinks if available, otherwise fallback to regular navLinks or default
  const links = footerNavLinks || navLinks || [
    { title: "About US", url: "/about" },
    { title: "Services", url: "/services" },
    { title: "Our Work", url: "/projects" }
  ];

  return (
    <footer className="bg-white text-black pt-12 pb-8 px-6 md:px-16 lg:px-24 rounded-t-[30px] w-full relative z-10 mt-[-30px]">
      <div className="max-w-[1800px] xl:max-w-[2200px] 2xl:max-w-[2400px] mx-auto">
        {/* Top of footer */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-10">
          <img 
            src={logoUrl} 
            alt="Farm Studio" 
            className="w-auto h-[24px] md:h-[36px] object-contain invert" 
          />
          
          <div className="flex flex-col sm:flex-row items-center gap-8 lg:gap-12">
            <nav className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-[11px] md:text-[12px] font-bold tracking-[0.12em] uppercase">
              {links.map((link: any, i: number) => (
                <a key={i} href={link.url} className="hover:opacity-60 transition-opacity">{link.title}</a>
              ))}
            </nav>

            <a href={cta.url} className="w-full sm:w-auto">
              <button className="w-full sm:w-auto rounded-full border border-black px-8 py-4 text-[11px] md:text-[12px] font-bold tracking-[0.15em] uppercase hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-4 shrink-0 pointer-events-auto">
                {cta.label}
                <ArrowUpRight className="w-4 h-4 transition-transform" />
              </button>
            </a>
          </div>
        </div>
        
        <div className="w-full h-px bg-black/10 mb-8" />
        
        {/* Bottom of footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[11px] font-normal tracking-wide opacity-40 gap-6 text-center md:text-left">
          <p>{contact.footerCopyright || "© 2026 BARNYARD PRODUCTIONS. ALL RIGHTS RESERVED"}</p>
          <div className="flex gap-8">
            <a href={contact.termsUrl || "#"} className="hover:opacity-100 transition-opacity uppercase">TERMS</a>
            <a href={contact.privacyUrl || "#"} className="hover:opacity-100 transition-opacity uppercase">PRIVACY</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
