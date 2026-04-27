"use client";

import { ArrowUpRight } from "lucide-react";

interface ContactSectionProps {
  contactInfo?: {
    email?: string;
    phonePrimary?: string;
    phoneSecondary?: string;
    addressLines?: string[];
    socialLinks?: { platform: string; url: string }[];
  };
}

export default function ContactSection({ contactInfo = {} }: ContactSectionProps) {
  const contact = contactInfo;
  
  return (
    <section className="py-32 lg:py-40 relative overflow-hidden" id="contact">
      {/* Colorful Gradient Background matching Figma */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Gradient%201.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 relative z-10 flex flex-col lg:flex-row justify-between lg:items-stretch gap-16 lg:gap-8">
        {/* Left Side: Headline and Details */}
        <div className="w-full lg:w-[40%] text-left flex flex-col">
          <div className="mb-12 lg:mb-20">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[7vw] font-normal tracking-tighter uppercase leading-[0.9] mb-8 md:mb-10">
              LET'S<br/>CONNECT
            </h2>
            <div className="text-3xl md:text-4xl font-light opacity-80">+</div>
          </div>
          
          <div className="flex flex-col flex-1 gap-4 mt-0">
            <div className="border-b border-white/20 pb-4">
              <p className="text-[9px] sm:text-[11px] font-normal tracking-[0.1em] uppercase opacity-60 mb-2">EMAIL</p>
              <a href={`mailto:${contact.email || "hello@barnyard.ae"}`} className="text-[13px] md:text-[14px] font-normal hover:opacity-70 transition-opacity">{contact.email || "hello@barnyard.ae"}</a>
            </div>
            <div className="border-b border-white/20 pb-4">
              <p className="text-[9px] sm:text-[11px] font-normal tracking-[0.1em] uppercase opacity-60 mb-2">PHONE</p>
              <div className="text-[13px] md:text-[14px] font-normal flex flex-col sm:flex-row sm:flex-wrap gap-2">
                <a href={`tel:${contact.phonePrimary?.replace(/\s/g, '') || "+97126743054"}`} className="hover:opacity-70 transition-opacity">{contact.phonePrimary || "+971 2 674 3054"}</a>
                <span className="hidden sm:inline opacity-40">|</span>
                <a href={`tel:${contact.phoneSecondary?.replace(/\s/g, '') || "+971523129765"}`} className="hover:opacity-70 transition-opacity">{contact.phoneSecondary || "+971 52 312 9765"}</a>
              </div>
            </div>
            <div className="border-b border-white/20 pb-4">
              <p className="text-[9px] sm:text-[11px] font-normal tracking-[0.1em] uppercase opacity-60 mb-2">ADDRESS</p>
              <div className="text-[13px] md:text-[14px] font-normal max-w-full md:max-w-[280px] leading-[1.5]">
                {(contact.addressLines || ["Yas Creative Hub. Building 4, P2.", "Abu Dhabi, UAE"]).map((line: string, i: number) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </div>
            </div>
            <div className="pt-1 mt-auto">
              <p className="text-[9px] sm:text-[11px] font-normal tracking-[0.1em] uppercase opacity-60 mb-2">FOLLOW US</p>
              <div className="flex gap-4">
                {(contact.socialLinks || [{ platform: "Instagram", url: "#" }]).map((social: any, idx: number) => (
                  <a key={idx} href={social.url} className="text-[13px] md:text-[14px] font-normal flex items-center gap-2 hover:opacity-70 transition-opacity w-max">
                    {idx === 0 && (
                      <svg className="w-[14px] h-[14px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                      </svg>
                    )}
                    {social.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side: Contact Form */}
        <div className="w-full lg:w-[48%] flex flex-col mt-16 lg:mt-0">
          <form className="flex flex-col h-full">
            <div className="flex flex-col gap-3 mb-6 lg:mb-8">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-light opacity-60 pl-1">Full Name</label>
                <input type="text" className="w-full bg-transparent border border-white/20 rounded-[8px] py-2.5 px-4 outline-none focus:border-white/60 transition-colors text-[14px] font-light" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-light opacity-60 pl-1">Email</label>
                <input type="email" className="w-full bg-transparent border border-white/20 rounded-[8px] py-2.5 px-4 outline-none focus:border-white/60 transition-colors text-[14px] font-light" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-light opacity-60 pl-1">Mobile Number</label>
                <input type="tel" className="w-full bg-transparent border border-white/20 rounded-[8px] py-2.5 px-4 outline-none focus:border-white/60 transition-colors text-[14px] font-light" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-light opacity-60 pl-1">What would you like to discuss?</label>
                <textarea className="w-full bg-transparent border border-white/20 rounded-[8px] py-2.5 px-4 outline-none focus:border-white/60 transition-colors text-[14px] font-light min-h-[80px] resize-none" />
              </div>
            </div>
            <div className="mt-auto pt-2">
              <button className="w-full md:w-max rounded-[100px] border border-white/30 px-8 py-3 text-[11px] md:text-[12px] font-medium tracking-[0.1em] uppercase hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-3 text-white bg-transparent">
                SUBMIT
                <ArrowUpRight className="w-4 h-4 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
