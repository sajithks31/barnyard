"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
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

export default function ServicesSection() {
  return (
    <section className="py-32 lg:py-40 bg-background relative z-10" id="services">
      <div className="max-w-[1440px] px-6 md:px-12 lg:px-24 mx-auto">
        <div className="mb-14 md:mb-20 flex flex-col items-start text-left">
          <span className="rounded-full border border-white/50 px-8 py-2 md:py-2.5 text-[10px] sm:text-[11px] font-normal tracking-[0.15em] uppercase inline-block opacity-90 mb-10 text-white">
            OUR SERVICES
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[85px] font-normal tracking-tighter leading-[0.95] uppercase text-white">
            FROM CONCEPT<br/>
            TO FINAL FRAME
          </h2>
        </div>

        <div className="flex flex-col gap-0">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              style={{ 
                top: `${120 + (idx * 20)}px`,
                zIndex: (idx + 1) * 10 
              }}
              className="md:sticky bg-[#FAFAFA] text-black rounded-[24px] md:rounded-[40px] p-6 md:p-14 flex flex-col md:flex-row gap-8 md:gap-10 hover:bg-white transition-all duration-500 group mb-6 md:mb-[10vh]"
            >
              <div className="flex-1 flex flex-col justify-between order-1 md:order-1">
                <div>
                  <div className="text-3xl md:text-4xl font-light mb-8 md:mb-20 opacity-60">+</div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-normal tracking-tighter uppercase mb-6 leading-[0.9] pr-4 md:pr-8">
                    {service.title.split(' ').map((word, i) => (
                      <span key={i} className="block">{word}</span>
                    ))}
                  </h3>
                  <p className="text-[13px] md:text-[15px] lg:text-[16px] font-normal opacity-70 max-w-full md:max-w-[85%] leading-[1.6] mb-8 md:mb-12">
                    {service.desc}
                  </p>
                </div>
                <button className="rounded-full border border-black/10 px-6 md:px-8 py-2.5 md:py-3 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-black flex items-center justify-center gap-2 md:gap-3 w-max hover:bg-black hover:text-white transition-colors group/btn self-start">
                  LEARN MORE
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>
              <div className="w-full md:w-[48%] h-[240px] md:h-auto md:aspect-[4/3.5] overflow-hidden rounded-[20px] md:rounded-[30px] bg-black/5 order-2 md:order-2 mt-4 md:mt-0">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
