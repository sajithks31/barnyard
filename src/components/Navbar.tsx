"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface NavbarProps {
  data?: {
    navLinks?: { title: string; url: string }[];
    contactInfo?: { socialLinks?: { platform: string; url: string }[] };
  };
}

export default function Navbar({ data }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const desiredOrder = ['ABOUT US', 'SERVICES', 'OUR SERVICES', 'OUR WORK', 'CONTACT US'];
  
  const rawLinks = data?.navLinks?.length ? data.navLinks : [
    { title: 'ABOUT US', url: '/about' },
    { title: 'SERVICES', url: '/services' },
    { title: 'OUR WORK', url: '/projects' },
    { title: 'CONTACT US', url: '/contact' },
  ];

  const navLinks = [...rawLinks].sort((a, b) => {
    const indexA = desiredOrder.indexOf(a.title.toUpperCase());
    const indexB = desiredOrder.indexOf(b.title.toUpperCase());
    return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
  });
  
  const desktopLinks = navLinks.filter(item => item.title !== 'CONTACT US');
  const socialLinks = data?.contactInfo?.socialLinks || [
    { platform: "Instagram", url: "#" },
    { platform: "Linkedin", url: "#" },
    { platform: "Youtube", url: "#" }
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
            {desktopLinks.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className="text-[11px] md:text-[13px] font-medium tracking-[0.12em] uppercase text-white hover:opacity-50 transition-opacity"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Right: CTA Button (Desktop) & Hamburger (Mobile) */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="pointer-events-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pill-button !hidden md:!flex items-center justify-center gap-2"
              >
                CONTACT US
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.button>
            </Link>

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
                  key={link.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <Link
                    href={link.url}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-bold tracking-tighter uppercase text-white hover:text-white/50 transition-colors"
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Social Links (Text based) */}
            <div className="flex items-center justify-center gap-8 py-10 opacity-60">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.url} 
                  className="text-[10px] font-bold tracking-[0.2em] text-white hover:opacity-50 transition-opacity uppercase"
                >
                  {social.platform}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
