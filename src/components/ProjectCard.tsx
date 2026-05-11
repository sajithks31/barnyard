"use client";

import { motion } from "framer-motion";
import { urlFor } from "@/sanity/client";

interface ProjectCardProps {
  project: {
    title: string;
    year?: string;
    category?: string;
    image?: any;
    imageUrl?: string;
    aspectRatio?: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const aspectClass = "aspect-[16/10]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.8, delay: (index % 2) * 0.1 }}
      className="group cursor-pointer select-none"
    >
      <div className={`relative ${aspectClass} overflow-hidden bg-[#111] ring-1 ring-white/5 mx-auto w-full max-w-full`}>
        <img 
          src={project.imageUrl || (project.image && typeof project.image !== 'string' ? urlFor(project.image).url() : project.image) || "https://images.unsplash.com/photo-1574719266848-692ab8d0ca28?q=80&w=1000&auto=format&fit=crop"} 
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
        />
        
        {/* Subtle Overlay on Hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      <div className="mt-6 text-left px-1">
        <h3 className="text-[1.1rem] md:text-[1.2rem] font-medium tracking-[-0.02em] uppercase leading-tight text-white/90">
          {project.title} <span className="opacity-30 ml-2 font-normal whitespace-nowrap">• {project.year || "2025"}</span>
        </h3>
      </div>
    </motion.div>
  );
}
