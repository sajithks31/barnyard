"use client";

import { motion, useScroll, type Variants } from "framer-motion";
import { useRef } from "react";
import { urlFor } from "@/sanity/client";

interface ProjectProps {
  data?: {
    title: string;
    year: string;
    image: any;
  }[];
}

const placeholderProjects = [
  {
    title: "MOTN • 2025",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop",
    style: "md:top-[15%] md:left-[10%] w-full md:w-72",
    aspect: "aspect-[4/3]"
  },
  {
    title: "TVC CAMPAIGN",
    img: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=600&auto=format&fit=crop",
    style: "md:top-[35%] md:right-[10%] w-full md:w-80",
    aspect: "aspect-square"
  },
  {
    title: "EPIC STORIES",
    img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=600&auto=format&fit=crop",
    style: "md:top-[55%] md:left-[5%] w-full md:w-80",
    aspect: "aspect-[4/3]"
  },
  {
    title: "EVENT COVERAGE",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop",
    style: "md:top-[75%] md:right-[5%] w-full md:w-72",
    aspect: "aspect-square"
  }
];

export default function ProjectsSection({ data }: ProjectProps) {
  const displayProjects = data && data.length > 0 
    ? data.map((p, i) => ({
        ...p,
        img: p.image?.asset ? urlFor(p.image).url() : (typeof p.image === 'string' ? p.image : (typeof p.imageUrl === 'string' ? p.imageUrl : placeholderProjects[i % 4].img)),
        title: p.title + (p.year ? ` • ${p.year}` : ""),
        style: placeholderProjects[i % 4].style,
        aspect: placeholderProjects[i % 4].aspect
      })) 
    : placeholderProjects;

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const bloomVariants: Variants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0,
      filter: "blur(15px)"
    },
    show: { 
      scale: 1, 
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      }
    }
  };

  return (
    <section ref={sectionRef} className="h-auto md:h-[300vh] relative bg-background py-20 md:py-0" id="our-work">
      {/* Sticky Container for Central Lens - Static on Mobile */}
      <div className="md:sticky top-0 h-auto md:h-screen w-full flex items-center justify-center overflow-hidden mb-20 md:mb-0">
        <motion.div 
          className="relative w-[22rem] h-[22rem] md:w-[40rem] md:h-[40rem] flex items-center justify-center z-10"
        >
          {/* Blue detailed ring */}
          <div className="absolute inset-0 rounded-full border-[1px] border-blue-500/20 shadow-[0_0_80px_rgba(0,100,255,0.2)_inset] md:shadow-[0_0_150px_rgba(0,100,255,0.2)_inset]" />
          <div className="absolute inset-2 rounded-full border border-blue-400/30 md:border-[2px]" />
          <div className="absolute inset-4 rounded-full border-[3px] md:border-[6px] border-blue-900/40" />
          
          <div className="absolute inset-10 md:inset-20 rounded-full bg-gradient-to-tr from-blue-950 to-background flex flex-col items-center justify-center p-6 md:p-12 text-center border border-blue-500/10 shadow-3xl">
            <span className="pill-badge mb-4 md:mb-6 border-white/20 text-[9px] md:text-[11px]">OUR WORK</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none uppercase mb-6 md:mb-8">
              CREATIVITY<br/>IN ACTION
            </h2>
            <button className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-white hover:text-accent-orange transition-colors">
              VIEW PORTFOLIO
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scrolling Content - Flex on Mobile, Absolute on Desktop */}
      <div className="relative md:absolute inset-0 z-20 pointer-events-none flex flex-col gap-10 px-6 md:px-0">
        {displayProjects.map((project: any, idx) => (
          <div key={idx} className={`relative md:absolute ${project.style} pointer-events-auto`}>
            <motion.div 
              variants={bloomVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white p-4 rounded-xl text-black flex flex-col shadow-2xl"
            >
              <div className="text-[10px] font-bold tracking-[0.1em] mb-3 uppercase">{project.title}</div>
              <div className={`w-full ${project.aspect} rounded-lg overflow-hidden`}>
                <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
