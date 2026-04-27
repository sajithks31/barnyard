"use client";

import { ArrowUpRight } from "lucide-react";

interface FooterProps {
  navLinks?: { title: string; url: string }[];
  contactInfo?: {
    footerCopyright?: string;
  };
}

export default function Footer({ navLinks, contactInfo }: FooterProps) {
  const contact = contactInfo || {};
  
  return (
    <footer className="bg-white text-black pt-12 pb-8 px-6 md:px-16 lg:px-24 rounded-t-[30px] w-full relative z-10 mt-[-30px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Top of footer */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-10">
          <img 
            src="/logo.png" 
            alt="Farm Studio" 
            className="w-auto h-[24px] md:h-[36px] object-contain invert" 
          />
          
          <div className="flex flex-col sm:flex-row items-center gap-8 lg:gap-12">
            <nav className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-[11px] md:text-[12px] font-bold tracking-[0.12em] uppercase">
              {(navLinks || [
                { title: "SERVICES", url: "/#services" },
                { title: "WORK", url: "/#our-work" },
                { title: "ABOUT", url: "/about" }
              ]).map((link: any, i: number) => (
                <a key={i} href={link.url} className="hover:opacity-60 transition-opacity">{link.title}</a>
              ))}
            </nav>

            <button className="w-full sm:w-auto rounded-full border border-black px-8 py-4 text-[11px] md:text-[12px] font-bold tracking-[0.15em] uppercase hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-4 shrink-0 pointer-events-auto">
              CONTACT
              <ArrowUpRight className="w-4 h-4 transition-transform" />
            </button>
          </div>
        </div>
        
        <div className="w-full h-px bg-black/10 mb-8" />
        
        {/* Bottom of footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[11px] font-normal tracking-wide opacity-40 gap-6 text-center md:text-left">
          <p>{contact.footerCopyright || "© 2026 BARNYARD PRODUCTIONS. ALL RIGHTS RESERVED"}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:opacity-100 transition-opacity">TERMS</a>
            <a href="#" className="hover:opacity-100 transition-opacity">PRIVACY</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
