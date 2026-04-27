"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-black text-white selection:bg-white selection:text-black min-h-screen relative overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050505]" />
        
        {/* Animated Radial Glows for Mesh Effect */}
        <div className="absolute top-[10%] left-[20%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,_rgba(255,100,0,0.15)_0%,_transparent_70%)] blur-[100px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,_rgba(100,50,255,0.2)_0%,_transparent_70%)] blur-[100px]" />
        <div className="absolute top-[40%] right-[30%] w-[40%] h-[40%] bg-[radial-gradient(circle_at_center,_rgba(255,0,100,0.1)_0%,_transparent_70%)] blur-[80px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 pt-40 pb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          
          {/* Left Column: Let's Connect */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between"
          >
            <div>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10vw] font-normal tracking-tighter uppercase leading-[0.85] mb-12">
                LET'S<br />CONNECT
              </h1>
              <div className="text-3xl md:text-4xl font-light opacity-50">+</div>
            </div>

            <div className="flex flex-col gap-10 mt-20 md:mt-32">
              <div className="border-b border-white/10 pb-8">
                <p className="text-[10px] uppercase tracking-[0.2em] opacity-40 mb-4">EMAIL</p>
                <a href="mailto:hello@barnyard.ae" className="text-xl md:text-2xl font-normal hover:text-white/60 transition-colors">hello@barnyard.ae</a>
              </div>
              
              <div className="border-b border-white/10 pb-8">
                <p className="text-[10px] uppercase tracking-[0.2em] opacity-40 mb-4">PHONE</p>
                <div className="flex flex-col gap-2">
                  <a href="tel:+97126743054" className="text-xl md:text-2xl font-normal hover:text-white/60 transition-colors">+971 2 674 3054</a>
                  <a href="tel:+971523129765" className="text-xl md:text-2xl font-normal hover:text-white/60 transition-colors">+971 52 312 9765</a>
                </div>
              </div>

              <div className="border-b border-white/10 pb-8">
                <p className="text-[10px] uppercase tracking-[0.2em] opacity-40 mb-4">ADDRESS</p>
                <address className="not-italic text-xl md:text-2xl font-normal leading-snug opacity-80">
                  Yas Creative Hub. Building 4, P2.<br />
                  Abu Dhabi, UAE
                </address>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] opacity-40 mb-5">FOLLOW US</p>
                <a href="https://instagram.com/barnyard.ae" target="_blank" className="inline-flex items-center gap-3 text-lg font-normal hover:text-white/60 transition-colors">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  INSTAGRAM
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <form className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] opacity-40 ml-1">FULL NAME</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 outline-none focus:border-white/30 transition-all text-lg font-light placeholder:opacity-20 backdrop-blur-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] opacity-40 ml-1">EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 outline-none focus:border-white/30 transition-all text-lg font-light placeholder:opacity-20 backdrop-blur-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] opacity-40 ml-1">MOBILE NUMBER</label>
                <input 
                  type="tel" 
                  placeholder="+971 -- --- ----" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 outline-none focus:border-white/30 transition-all text-lg font-light placeholder:opacity-20 backdrop-blur-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] opacity-40 ml-1">WHAT WOULD YOU LIKE TO DISCUSS?</label>
                <textarea 
                  rows={5} 
                  placeholder="Your message here..." 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 outline-none focus:border-white/30 transition-all text-lg font-light placeholder:opacity-20 backdrop-blur-sm resize-none"
                />
              </div>

              <button className="w-full rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black transition-all duration-500 py-6 text-[12px] font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-3 mt-4">
                SUBMIT
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
