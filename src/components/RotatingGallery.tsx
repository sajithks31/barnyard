"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const images = [
  { url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop", title: "Cinema Rig 1" },
  { url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop", title: "Lens Detail" },
  { url: "https://images.unsplash.com/photo-1542204113-e93847e21a4d?q=80&w=1000&auto=format&fit=crop", title: "On Set" },
  { url: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?q=80&w=1000&auto=format&fit=crop", title: "Mastering" },
  { url: "https://images.unsplash.com/photo-1524169358666-79f22534bc6e?q=80&w=1000&auto=format&fit=crop", title: "Audio Gear" },
];

export default function RotatingGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  return (
    <div className="relative py-24">
      <div className="container mx-auto px-6 mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">OUR TOOLS</h2>
          <p className="text-white/60 mt-4 max-w-md">Precision meets creativity through our state-of-the-art production kit.</p>
        </div>
        <div className="flex gap-2">
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-colors">
            ←
          </div>
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-colors">
            →
          </div>
        </div>
      </div>

      <div 
        ref={containerRef}
        className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 md:px-[20vw]"
      >
        {images.map((img, i) => (
          <GalleryItem key={i} img={img} index={i} />
        ))}
      </div>
    </div>
  );
}

function GalleryItem({ img, index }: { img: any; index: number }) {
  const itemRef = useRef(null);

  return (
    <motion.div
      ref={itemRef}
      whileHover={{ scale: 1.02 }}
      className="min-w-[300px] md:min-w-[450px] aspect-[4/5] relative rounded-3xl overflow-hidden snap-center cursor-grab active:cursor-grabbing"
    >
      <img 
        src={img.url} 
        alt={img.title} 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
        <h3 className="text-2xl font-bold">{img.title}</h3>
        <p className="text-white/60 text-sm mt-2">TECHNICAL EXCELLENCE</p>
      </div>
    </motion.div>
  );
}
