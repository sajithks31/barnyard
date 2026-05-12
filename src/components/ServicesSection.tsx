"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { urlFor } from "@/sanity/client";

interface ServiceProps {
  data?: {
    title: string;
    description: string;
    tags?: string[];
    image: any;
  }[];
}

const servicesPlaceholder = [
  {
    title: "VIDEO PRODUCTION",
    desc: "We bring stories to life through visual motion. Using high-end cinema cameras and seamless execution, our team creates TVCs, branded content, documentaries and more.",
    img: "https://images.unsplash.com/photo-1574719266848-692ab8d0ca28?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "PHOTOGRAPHY",
    desc: "From striking commercial campaigns to product photography and styling, capturing the perfect image to elevate your brand is our specialty.",
    img: "https://images.unsplash.com/photo-1621600411688-4be93cd68504?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "CREATIVE & PRE-PRODUCTION",
    desc: "A great piece of content starts with a strong idea. We handle every step of pre-production, planning & logistics to ensure a seamless shoot.",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "POST PRODUCTION",
    desc: "The magic happens in the edit state. Our post-production team specializes in offline & online editing, color grading, sound design and VFX.",
    img: "https://images.unsplash.com/photo-1535016120720-40c746a6580c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "ON-SITE SERVICES",
    desc: "As an extension of your internal marketing function, we integrate right across your business to offer dedicated, on-demand creative and digital services.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
  }
];

const ServiceCard = ({ 
  service, 
  idx, 
  progress, 
  range, 
  targetScale,
  isLast
}: { 
  service: any, 
  idx: number, 
  progress: MotionValue<number>, 
  range: [number, number], 
  targetScale: number,
  isLast: boolean
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(progress, range, [1, isLast ? 1 : 0]);
  const contentOpacity = useTransform(progress, range, [1, isLast ? 1 : -1]);

  return (
    <div ref={container} className="h-[100vh] flex items-center justify-center sticky top-0 px-4 md:px-0">
      <motion.div 
        style={{ 
          scale, 
          opacity,
          zIndex: (idx + 1) * 10,
          top: `calc(8% + ${idx * 28}px)`
        }}
        className="relative bg-[#FAFAFA] text-black rounded-[32px] md:rounded-[48px] p-5 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12 hover:bg-white transition-all duration-500 group w-full max-w-[1400px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20 overflow-hidden"
      >
        <motion.div 
          style={{ opacity: contentOpacity }}
          className="flex-1 flex flex-col justify-between order-1 md:order-1 h-full"
        >
          <div>
            <div className="mb-6 md:mb-10">
              <img src="/overlapping-circles.svg" alt="icon" className="w-10 md:w-12 h-auto opacity-100" />
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal tracking-tighter uppercase mb-4 leading-[0.85] pr-4 md:pr-12">
              {service.title.split(' ').map((word: string, i: number) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h3>
            <p className="text-[12px] md:text-[14px] lg:text-[15px] font-normal opacity-60 max-w-full md:max-w-[90%] leading-[1.6] mb-6 md:mb-8">
              {service.description || service.desc}
            </p>
            
            {service.tags && service.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map((tag: string, i: number) => (
                  <span key={i} className="px-3 py-1 rounded-full border border-black/10 text-[9px] font-bold tracking-wider uppercase opacity-40">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <button className="rounded-full border border-black/10 px-5 md:px-7 py-2 md:py-2.5 text-[9px] md:text-[10px] font-bold tracking-[0.25em] uppercase text-black flex items-center justify-center gap-2 md:gap-3 w-max hover:bg-black hover:text-white transition-all duration-300 group/btn self-start mt-auto shadow-sm">
            LEARN MORE
            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1.5 group-hover/btn:-translate-y-1.5 transition-transform duration-300" />
          </button>
        </motion.div>
        
        <motion.div 
          style={{ opacity: contentOpacity }}
          className="w-full md:w-[46%] h-[220px] md:h-auto md:aspect-[4/3.2] overflow-hidden rounded-[20px] md:rounded-[32px] bg-black/5 order-2 md:order-2 mt-4 md:mt-0 relative shadow-inner"
        >
          <motion.div style={{ scale: imageScale }} className="w-full h-full">
            <img 
              src={service.image ? urlFor(service.image).url() : service.img} 
              alt={service.title} 
              className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default function ServicesSection({ data }: ServiceProps) {
  const container = useRef(null);
  const displayServices = data && data.length > 0 ? data : servicesPlaceholder;
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={container} className="bg-background relative z-10" id="services">
      <div className="max-w-[1600px] px-6 md:px-12 lg:px-24 mx-auto pt-20 pb-60 lg:pt-28 lg:pb-[40vh]">
        <div className="mb-16 md:mb-24 flex flex-col items-start text-left">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 0.9, x: 0 }}
            viewport={{ once: true }}
            className="rounded-full border border-white/40 px-10 py-3 text-[11px] font-normal tracking-[0.2em] uppercase inline-block mb-10 text-white/80"
          >
            OUR SERVICES
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-normal tracking-tighter leading-[0.9] uppercase text-white"
          >
            <span className="block">FROM CONCEPT</span>
            <span className="block text-white/50">TO FINAL FRAME</span>
          </motion.h2>
        </div>

        <div className="relative">
          {displayServices.map((service: any, idx) => {
            const isLast = idx === displayServices.length - 1;
            const targetScale = isLast ? 1 : 1 - ((displayServices.length - idx) * 0.04);
            const start = (idx + 1) * (1 / displayServices.length);
            
            // Use [0, 1] range for the last card to avoid Web Animation API errors, 
            // but the output will remain constant at 1.
            const range: [number, number] = isLast ? [0, 1] : [start, 1];
            
            return (
              <ServiceCard 
                key={idx} 
                service={service} 
                idx={idx} 
                progress={scrollYProgress} 
                range={range} 
                targetScale={targetScale}
                isLast={isLast}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
