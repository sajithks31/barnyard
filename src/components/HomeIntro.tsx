"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PortableText } from "@portabletext/react";

interface HomeIntroProps {
  data?: {
    introHeadline?: string;
    introParagraph?: any;
    introButtonLabel?: string;
    introButtonUrl?: string;
    introHeadlineTag?: string;
  };
}

const components = {
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
      return (
        <a href={value.href} rel={rel} className="text-white underline underline-offset-4 hover:opacity-70 transition-opacity">
          {children}
        </a>
      );
    },
    internalLink: ({ children, value }: any) => {
      const href = value.type === "homepage" ? "/" : `/${value.type === "project" ? "projects" : value.type}/${value.slug || ""}`;
      return (
        <a href={href} className="text-white underline underline-offset-4 hover:opacity-70 transition-opacity">
          {children}
        </a>
      );
    },
  },
};

export default function HomeIntro({ data }: HomeIntroProps) {
  const headline = data?.introHeadline || "POWERING BRANDS WITH\nCREATIVE THINKING &\nSEAMLESS EXECUTION";
  const HeadlineTag = (data?.introHeadlineTag || "h2") as keyof JSX.IntrinsicElements;
  const paragraph = data?.introParagraph || "Barnyard Productions is a creative-led production studio crafting cinematic video, photography, and visual content for modern brands. From first idea to final frame, we combine creative thinking with seamless execution—bringing stories to life in ways that feel authentic, impactful, and impossible to ignore.";

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      }
    },
  };

  return (
    <section className="pt-20 pb-10 md:pt-24 md:pb-12 lg:pt-28 lg:pb-14 border-t border-white/10 bg-black relative z-10 text-center" id="about-us">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1800px] xl:max-w-[2400px] 2xl:max-w-[2800px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center"
      >
        <div className="max-w-7xl flex flex-col items-center">
          <motion.span variants={item} className="rounded-full border border-white/50 px-8 py-2 md:py-2.5 text-[10px] sm:text-[11px] font-normal tracking-[0.15em] uppercase inline-block opacity-90 mb-10 md:mb-12">
            ABOUT US
          </motion.span>
          
          <motion.div variants={item}>
            <HeadlineTag className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[90px] 2xl:text-[120px] font-medium tracking-tighter leading-[1.0] mb-10 md:mb-14 uppercase whitespace-pre-wrap">
              {headline}
            </HeadlineTag>
          </motion.div>
          
          <motion.div variants={item} className="text-sm md:text-base lg:text-lg text-white/60 mb-12 max-w-[900px] font-normal leading-relaxed">
            {Array.isArray(data?.introParagraph) ? (
              <PortableText value={data.introParagraph} components={components} />
            ) : (
              <p>{paragraph}</p>
            )}
          </motion.div>
          
          <motion.div variants={item}>
            <a href={data?.introButtonUrl || "/about"}>
              <button className="text-[11px] md:text-[12px] font-medium tracking-[0.15em] uppercase hover:opacity-50 transition-opacity flex items-center gap-[2px]">
                {data?.introButtonLabel || "READ MORE"}
                <ArrowUpRight className="w-4 h-4 md:w-[18px] md:h-[18px] stroke-[1.5]" />
              </button>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
