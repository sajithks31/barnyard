import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import HomeIntro from "@/components/HomeIntro";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Intro Section */}
      <HomeIntro />

      {/* Services Section */}
      <ServicesSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* LET'S CONNECT Section with colorful background */}
      <section className="py-32 lg:py-40 relative overflow-hidden" id="contact">
        {/* Colorful Gradient Background matching Figma */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/Gradient%201.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 relative z-10 flex flex-col lg:flex-row justify-between lg:items-stretch gap-16 lg:gap-8">
          {/* Left Side: Headline and Details */}
          <div className="w-full lg:w-[40%] text-left flex flex-col justify-between">
            <div className="mb-12 lg:mb-0">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[7vw] font-normal tracking-tighter uppercase leading-[0.9] mb-8 md:mb-12">
                LET'S<br/>CONNECT
              </h2>
              <div className="text-3xl md:text-4xl font-light opacity-80">+</div>
            </div>
            
            <div className="flex flex-col gap-6 mt-12 md:mt-24 lg:mt-0">
              <div className="border-b border-white/20 pb-6">
                <p className="text-[9px] sm:text-[11px] font-normal tracking-[0.1em] uppercase opacity-60 mb-3">EMAIL</p>
                <a href="mailto:hello@barnyard.ae" className="text-[13px] md:text-[14px] font-normal hover:opacity-70 transition-opacity">hello@barnyard.ae</a>
              </div>
              <div className="border-b border-white/20 pb-6">
                <p className="text-[9px] sm:text-[11px] font-normal tracking-[0.1em] uppercase opacity-60 mb-3">PHONE</p>
                <div className="text-[13px] md:text-[14px] font-normal flex flex-col sm:flex-row sm:flex-wrap gap-2">
                  <a href="tel:+97126743054" className="hover:opacity-70 transition-opacity">+971 2 674 3054</a>
                  <span className="hidden sm:inline opacity-40">|</span>
                  <a href="tel:+971523129765" className="hover:opacity-70 transition-opacity">+971 52 312 9765</a>
                </div>
              </div>
              <div className="border-b border-white/20 pb-6">
                <p className="text-[9px] sm:text-[11px] font-normal tracking-[0.1em] uppercase opacity-60 mb-3">ADDRESS</p>
                <p className="text-[13px] md:text-[14px] font-normal max-w-full md:max-w-[280px] leading-[1.5]">
                  Yas Creative Hub. Building 4, P2. Abu Dhabi, UAE
                </p>
              </div>
              <div className="pt-2">
                <p className="text-[9px] sm:text-[11px] font-normal tracking-[0.1em] uppercase opacity-60 mb-3">FOLLOW US</p>
                <a href="#" className="text-[13px] md:text-[14px] font-normal flex items-center gap-2 hover:opacity-70 transition-opacity w-max">
                  <svg className="w-[14px] h-[14px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg> Instagram
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Side: Contact Form */}
          <div className="w-full lg:w-[48%] flex flex-col">
            <form className="flex flex-col flex-1">
              <div className="flex flex-col gap-5 md:gap-6 mb-10 md:mb-12">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-light opacity-60 pl-1">Full Name</label>
                  <input type="text" className="w-full bg-transparent border border-white/20 rounded-[8px] py-4 px-5 outline-none focus:border-white/60 transition-colors text-[14px] font-light" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-light opacity-60 pl-1">Email</label>
                  <input type="email" className="w-full bg-transparent border border-white/20 rounded-[8px] py-4 px-5 outline-none focus:border-white/60 transition-colors text-[14px] font-light" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-light opacity-60 pl-1">What would you like to discuss?</label>
                  <textarea className="w-full bg-transparent border border-white/20 rounded-[8px] py-4 px-5 outline-none focus:border-white/60 transition-colors text-[14px] font-light min-h-[120px] resize-none" />
                </div>
              </div>
              <div className="mt-auto">
                <button className="w-full md:w-max rounded-full border border-white px-10 py-4 text-[11px] md:text-[12px] font-medium tracking-[0.1em] uppercase hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-3 text-white bg-transparent">
                  SUBMIT
                  <ArrowUpRight className="w-4 h-4 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Actual Site Footer */}
      <footer className="bg-white text-black pt-12 pb-8 px-6 md:px-16 lg:px-24 rounded-t-[30px] w-full relative z-10">
        <div className="max-w-[1440px] mx-auto">
          {/* Top of footer */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-10">
            <img 
              src="/logo.png" 
              alt="Farm Studio" 
              className="w-auto h-[24px] md:h-[36px] object-contain invert" 
            />
            
            <div className="flex flex-col sm:flex-row items-center gap-8 lg:gap-12">
              <nav className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-[11px] md:text-[12px] font-bold tracking-[0.12em] uppercase">
                <a href="#about-us" className="hover:opacity-60 transition-opacity">ABOUT</a>
                <a href="#services" className="hover:opacity-60 transition-opacity">SERVICES</a>
                <a href="#our-work" className="hover:opacity-60 transition-opacity">WORK</a>
              </nav>

              <button className="w-full sm:w-auto rounded-full border border-black px-8 py-4 text-[11px] md:text-[12px] font-bold tracking-[0.15em] uppercase hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-4 shrink-0 pointer-events-auto">
                CONTACT
                <ArrowUpRight className="w-4 h-4 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="w-full h-px bg-black/10 mb-8" />
          
          {/* Bottom of footer */}
          <div className="flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[11px] font-normal tracking-wide opacity-40 gap-6 text-center md:text-left">
            <p>© 2026 BARNYARD PRODUCTIONS. ALL RIGHTS RESERVED</p>
            <div className="flex gap-8">
              <a href="#" className="hover:opacity-100 transition-opacity">TERMS</a>
              <a href="#" className="hover:opacity-100 transition-opacity">PRIVACY</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
