"use client";

import React, { useRef, useState, useEffect } from "react";

interface MarqueeProps {
  images: string[];
  speed?: number;
  reverse?: boolean;
}

export default function Marquee({ images, speed = 40, reverse = false }: MarqueeProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    let animationFrameId: number;
    
    // Calculate pixels per frame based on speed. speed=40 means 40s for full cycle in framer motion?
    // Let's use a constant speed. 1.5 pixels per frame is a nice smooth speed.
    const pixelsPerFrame = 1.0; 
    
    const scroll = () => {
      if (scrollRef.current && !isHovered && !isDragging) {
        const el = scrollRef.current;
        if (el.children.length > 0) {
          const setWidth = el.children[0].clientWidth;
          el.scrollLeft += reverse ? -pixelsPerFrame : pixelsPerFrame;
          
          if (el.scrollLeft >= setWidth * 2) {
             el.scrollLeft -= setWidth;
          } else if (el.scrollLeft <= 0) {
             el.scrollLeft += setWidth;
          }
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging, reverse]);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startX.current = e.pageX - scrollRef.current!.offsetLeft;
    scrollLeft.current = scrollRef.current!.scrollLeft;
  };
  
  const onMouseLeave = () => { 
    setIsDragging(false); 
    setIsHovered(false); 
  };
  
  const onMouseUp = () => { 
    setIsDragging(false); 
  };
  
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; 
    
    const el = scrollRef.current;
    if (el.children.length > 0) {
      const setWidth = el.children[0].clientWidth;
      let newScrollLeft = scrollLeft.current - walk;
      
      if (newScrollLeft >= setWidth * 2) {
         newScrollLeft -= setWidth;
         scrollLeft.current -= setWidth;
      } else if (newScrollLeft <= 0) {
         newScrollLeft += setWidth;
         scrollLeft.current += setWidth;
      }
      
      el.scrollLeft = newScrollLeft;
    }
  };

  return (
    <div className="relative flex overflow-hidden py-10 select-none">
      <div
        ref={scrollRef}
        className={`flex flex-nowrap shrink-0 overflow-x-hidden ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={onMouseLeave}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {/* Render 3 identical sets of images to enable infinite wrapping */}
        {[0, 1, 2].map((setIndex) => (
          <div key={setIndex} className="flex shrink-0 gap-6 pr-6">
            {images.map((src, idx) => (
              <div
                key={idx}
                className="relative shrink-0 w-[300px] md:w-[450px] aspect-[4/5] rounded-[30px] overflow-hidden bg-neutral-900 border border-white/5 pointer-events-none"
              >
                <img
                  src={src}
                  alt={`Gallery Image ${idx}`}
                  draggable={false}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 hover:scale-105 pointer-events-auto"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
