"use client";

import { motion } from "framer-motion";

import React from "react";
import { urlFor } from "@/sanity/client";

interface ServicesProps {
  data?: any[];
}

const servicesPlaceholder = [
  {
    title: "VIDEO PRODUCTION",
    description: "We bring stories to life through visual motion. Using high-end cinema cameras and seamless execution, our team creates TVCs, branded content, documentaries and more.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop",
    tags: ["STORYTELLING", "CONCEPTUALIZING", "DIRECTING", "POST PRODUCTION"]
  },
  {
    title: "PHOTOGRAPHY",
    description: "From striking commercial campaigns to product photography and styling, capturing the perfect image to elevate your brand is our specialty.",
    image: "https://images.unsplash.com/photo-1621600411688-4be93cd68504?q=80&w=1000&auto=format&fit=crop",
    tags: ["COMMERCIAL", "FASHION & BRAND", "PRODUCT", "LIFESTYLE & EDITORIAL"]
  },
  {
    title: "CREATIVE & PRE-PRODUCTION",
    description: "A great piece of content starts with a strong idea. We handle every step of pre-production, planning & logistics to ensure a seamless shoot.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop",
    tags: ["SCRIPT WRITING", "STORYBOARDING", "STYLING", "LOCATION SCOUTING"]
  },
  {
    title: "POST PRODUCTION",
    description: "The magic happens in the edit suite. Our post-production team specializes in offline & online editing, color grading, sound design and VFX.",
    image: "https://images.unsplash.com/photo-1535016120720-40c746a6580c?q=80&w=1000&auto=format&fit=crop",
    tags: ["OFFLINE EDIT", "COLOR GRADING", "VFX / CGI", "SOUND DESIGN & AUDIO"]
  },
  {
    title: "ON-SITE SERVICES",
    description: "As an extension of your internal marketing function, we integrate right across your business to offer dedicated, on-demand creative and digital services.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
    tags: ["EQUIPMENT RENTAL", "STUDIO HIRE", "CREW & TALENT", "ART DEPARTMENT"]
  }
];

export default function ClientServices({ data }: any) {
  const pageSettings = data?.pageSettings;
  const displayServices = data?.services && data.services.length > 0 ? data.services : servicesPlaceholder;

  return (
    <div className="bg-black text-white selection:bg-white selection:text-black min-h-screen">
      {/* Hero Section */}
      <section className="px-6 md:px-16 lg:px-24 pt-32 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[120%] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_60%)]" />
        </div>
        
        <div className="max-w-[1440px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
             <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[9.5vw] font-bold tracking-tighter uppercase leading-[0.85]">
               {pageSettings?.title || "FROM CONCEPT TO FINAL FRAME"}
             </h1>
          </motion.div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="px-6 md:px-12 lg:px-24 pb-32">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-6 md:gap-8">
          {displayServices.map((service: any, idx: number) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white text-black rounded-[24px] md:rounded-[32px] p-6 md:p-12 lg:p-14 flex flex-col lg:flex-row gap-10 lg:gap-14 group hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500"
            >
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="mb-8 md:mb-10">
                    <img src="/overlapping-circles.png" alt="service icon" className="w-12 md:w-14 h-auto opacity-100" />
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tighter uppercase mb-6 leading-[0.9] text-black">
                    {service.title.split(' ').map((word: string, i: number) => (
                      <span key={i} className="block">{word}</span>
                    ))}
                  </h2>
                  
                  <p className="text-[13px] md:text-[15px] lg:text-[16px] font-normal text-black/70 max-w-xl leading-relaxed mb-10 md:mb-14">
                    {service.description || service.desc}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 md:gap-3 mt-auto">
                  {(service.tags || []).map((pill: string, pIdx: number) => (
                    <span 
                      key={pIdx}
                      className="rounded-full border border-black/10 px-4 md:px-5 py-1.5 text-[8px] md:text-[9px] font-bold tracking-[0.15em] uppercase text-black/60"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="w-full lg:w-[48%] h-[300px] md:h-[400px] lg:h-auto overflow-hidden rounded-[16px] md:rounded-[24px] bg-black/5 mt-auto mb-auto aspect-[16/10] lg:aspect-auto flex-shrink-0">
                <img 
                  src={service.image?.asset ? urlFor(service.image).width(800).url() : (typeof service.image === 'string' ? service.image : service.img)} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
