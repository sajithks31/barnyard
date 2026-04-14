"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'OUR SERVICES', href: '#services' },
    { name: 'OUR WORK', href: '#our-work' },
    { name: 'ABOUT US', href: '#about-us' },
    { name: 'CONTACT US', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 w-full z-[100] pointer-events-none"
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 py-6 md:py-8 flex items-center justify-between pointer-events-auto">
          {/* Left: Logo Section */}
          <Link href="/" className="flex items-center group pointer-events-auto">
            <img 
              src="/logo.png" 
              alt="Farm Studio" 
              className="w-auto h-[25px] md:h-[40px] lg:h-[45px] object-contain hover:opacity-80 transition-opacity" 
            />
          </Link>

          {/* Center: Navigation Menu (Desktop) */}
          <nav className="hidden md:flex items-center gap-10 lg:gap-14">
            {['ABOUT US', 'SERVICES', 'OUR WORK'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-[11px] md:text-[13px] font-medium tracking-[0.12em] uppercase text-white hover:opacity-50 transition-opacity"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Right: CTA Button (Desktop) & Hamburger (Mobile) */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pill-button !hidden md:!flex items-center justify-center gap-2"
            >
              CONTACT US
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.button>

            {/* Hamburger Button */}
            <button 
              onClick={() => setIsOpen(true)}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white md:hidden hover:bg-white/10 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[200] flex flex-col p-6 md:hidden"
          >
            {/* Header in Menu */}
            <div className="flex items-center justify-between mb-20">
              <img 
                src="/logo.png" 
                alt="Farm Studio" 
                className="w-auto h-[25px] object-contain" 
              />
              <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col items-center gap-8 flex-1">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-bold tracking-tighter uppercase text-white hover:text-white/50 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Social Links (Text based) */}
            <div className="flex items-center justify-center gap-8 py-10 opacity-60">
              <span className="text-[10px] font-bold tracking-[0.2em] text-white cursor-pointer uppercase">Instagram</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-white cursor-pointer uppercase">Linkedin</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-white cursor-pointer uppercase">Youtube</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
