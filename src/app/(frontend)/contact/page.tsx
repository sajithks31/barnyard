"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-black text-white selection:bg-white selection:text-black min-h-screen relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/contact-bg.mp4" type="video/mp4" />
        </video>
        {/* Grain Overlay */}
        <div className="absolute inset-0 bg-black/20" />
        <div 
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 pt-40 pb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-stretch">
          
          {/* Left Column: Let's Connect */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between h-full"
          >
            <div>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10vw] font-medium tracking-tighter uppercase leading-[0.85] mb-8">
                LET'S<br />CONNECT
              </h1>
              <div className="mb-12 opacity-80">
                <img src="/overlapping-circles.svg" alt="icon" className="w-20 md:w-24 h-auto invert" />
              </div>
            </div>

            <div className="flex flex-col gap-10 mt-auto">
              <div className="pt-8">
                <p className="text-[10px] uppercase tracking-[0.2em] opacity-40 mb-3">EMAIL</p>
                <a href="mailto:hello@barnyard.ae" className="text-xl md:text-2xl font-normal hover:text-white/60 transition-colors">hello@barnyard.ae</a>
              </div>
              
              <div className="border-t border-white/20 pt-8">
                <p className="text-[10px] uppercase tracking-[0.2em] opacity-40 mb-3">PHONE</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <a href="tel:+97126743054" className="text-xl md:text-2xl font-normal hover:text-white/60 transition-colors">+971 2 674 3054</a>
                  <span className="text-xl md:text-2xl font-normal opacity-40">|</span>
                  <a href="tel:+971523129765" className="text-xl md:text-2xl font-normal hover:text-white/60 transition-colors">+971 52 312 9765</a>
                </div>
              </div>

              <div className="border-t border-white/20 pt-8">
                <p className="text-[10px] uppercase tracking-[0.2em] opacity-40 mb-3">ADDRESS</p>
                <address className="not-italic text-xl md:text-2xl font-normal leading-snug opacity-80 max-w-md">
                  Yas Creative Hub. Building 4, P2.<br />
                  Abu Dhabi, United Arab Emirates
                </address>
              </div>

              <div className="border-t border-white/20 pt-8">
                <p className="text-[10px] uppercase tracking-[0.2em] opacity-40 mb-4">SOCIAL MEDIA</p>
                <a href="https://instagram.com/barnyard.ae" target="_blank" className="inline-flex items-center gap-3 text-lg font-normal hover:text-white/60 transition-colors">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col h-full"
          >
            <form className="flex flex-col gap-6 h-full">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-light opacity-60 ml-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-5 px-6 outline-none focus:border-white/30 transition-all text-lg font-light backdrop-blur-md"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-light opacity-60 ml-1">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-5 px-6 outline-none focus:border-white/30 transition-all text-lg font-light backdrop-blur-md"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-light opacity-60 ml-1">Mobile Number</label>
                <input 
                  type="tel" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-5 px-6 outline-none focus:border-white/30 transition-all text-lg font-light backdrop-blur-md"
                />
              </div>

              <div className="flex flex-col gap-2 flex-grow">
                <label className="text-sm font-light opacity-60 ml-1">What would you like to discuss?</label>
                <textarea 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-5 px-6 outline-none focus:border-white/30 transition-all text-lg font-light backdrop-blur-md resize-none h-full min-h-[150px]"
                />
              </div>

              <button className="inline-flex items-center justify-between px-8 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black transition-all duration-500 mt-4 group w-max gap-8">
                <span className="text-sm font-bold tracking-[0.2em] uppercase">SUBMIT</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
