
import { createClient } from "@sanity/client";

// This script will seed your Sanity database with the existing hardcoded content.
// Run it with: npx sanity exec scratch/seed-sanity.ts --with-user-token

const client = createClient({
  projectId: "01qv31nl",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

async function seed() {
  console.log("🚀 Starting content migration...");

  try {
    // 1. Seed Homepage
    console.log("📝 Seeding Homepage...");
    await client.createOrReplace({
      _id: "homepage",
      _type: "homepage",
      heroTitleLines: ["CREATING", "STORIES+", "THAT MOVE"],
      heroButtons: [
        { label: "OUR SERVICES", url: "#services" },
        { label: "OUR WORK", url: "/projects" },
      ],
      introHeadline: "POWERING BRANDS WITH\nCREATIVE THINKING &\nSEAMLESS EXECUTION",
      introParagraph: "Barnyard Productions is a creative-led production studio crafting cinematic video, photography, and visual content for modern brands. From first idea to final frame, we combine creative thinking with seamless execution—bringing stories to life in ways that feel authentic, impactful, and impossible to ignore.",
    });

    // 2. Seed Navigation
    console.log("📝 Seeding Navigation...");
    await client.createOrReplace({
      _id: "navigation",
      _type: "navigation",
      title: "Main Navigation",
      menuItems: [
        { title: "ABOUT US", url: "/about" },
        { title: "SERVICES", url: "/services" },
        { title: "OUR WORK", url: "/projects" },
        { title: "CONTACT US", url: "/contact" },
      ],
      footerMenuItems: [
        { title: "ABOUT US", url: "/about" },
        { title: "SERVICES", url: "/services" },
        { title: "OUR WORK", url: "/projects" },
      ],
    });

    // 3. Seed Contact Info
    console.log("📝 Seeding Contact Info & Settings...");
    await client.createOrReplace({
      _id: "contactInfo",
      _type: "contactInfo",
      email: "hello@barnyard.ae",
      phonePrimary: "+971 2 674 3054",
      phoneSecondary: "+971 52 312 9765",
      addressLines: ["Yas Creative Hub. Building 4, P2.", "Abu Dhabi, UAE"],
      socialLinks: [
        { platform: "Instagram", url: "#" },
        { platform: "Linkedin", url: "#" },
        { platform: "Youtube", url: "#" },
      ],
      navbarCta: { label: "CONTACT US", url: "/contact" },
      footerCta: { label: "CONTACT", url: "/contact" },
      footerCopyright: "© 2026 BARNYARD PRODUCTIONS. ALL RIGHTS RESERVED",
      termsUrl: "#",
      privacyUrl: "#",
    });

    // 4. Seed Services
    console.log("📝 Seeding Services...");
    const services = [
      {
        id: "service-video",
        title: "VIDEO PRODUCTION",
        description: "We bring stories to life through visual motion. Using high-end cinema cameras and seamless execution, our team creates TVCs, branded content, documentaries and more.",
        tags: ["TVCs", "Branded Content", "Documentaries", "Social Media"],
        order: 1,
      },
      {
        id: "service-photo",
        title: "PHOTOGRAPHY",
        description: "From striking commercial campaigns to product photography and styling, capturing the perfect image to elevate your brand is our specialty.",
        tags: ["Commercial", "Product", "Fashion", "Editorial"],
        order: 2,
      },
      {
        id: "service-creative",
        title: "CREATIVE & PRE-PRODUCTION",
        description: "A great piece of content starts with a strong idea. We handle every step of pre-production, planning & logistics to ensure a seamless shoot.",
        tags: ["Ideation", "Scripting", "Storyboarding", "Casting"],
        order: 3,
      },
      {
        id: "service-post",
        title: "POST PRODUCTION",
        description: "The magic happens in the edit state. Our post-production team specializes in offline & online editing, color grading, sound design and VFX.",
        tags: ["Editing", "Color Grading", "VFX", "Sound Design"],
        order: 4,
      },
      {
        id: "service-onsite",
        title: "ON-SITE SERVICES",
        description: "As an extension of your internal marketing function, we integrate right across your business to offer dedicated, on-demand creative and digital services.",
        tags: ["Dedicated Team", "Digital Strategy", "On-Demand"],
        order: 5,
      },
    ];

    for (const s of services) {
      const { id, ...data } = s;
      await client.createOrReplace({
        _id: id,
        _type: "service",
        ...data,
      });
    }

    // 5. Seed Projects
    console.log("📝 Seeding Projects...");
    const projects = [
      { id: "project-motn", title: "MOTN", year: "2025", order: 1 },
      { id: "project-tvc", title: "TVC CAMPAIGN", year: "2024", order: 2 },
      { id: "project-epic", title: "EPIC STORIES", year: "2024", order: 3 },
      { id: "project-event", title: "EVENT COVERAGE", year: "2024", order: 4 },
    ];

    for (const p of projects) {
      const { id, ...data } = p;
      await client.createOrReplace({
        _id: id,
        _type: "project",
        ...data,
      });
    }

    // 6. Seed Tools
    console.log("📝 Seeding Tools...");
    const tools = [
      { id: "tool-cinema", title: "Cinema Rig 1", description: "TECHNICAL EXCELLENCE", order: 1 },
      { id: "tool-lens", title: "Lens Detail", description: "TECHNICAL EXCELLENCE", order: 2 },
      { id: "tool-set", title: "On Set", description: "TECHNICAL EXCELLENCE", order: 3 },
      { id: "tool-master", title: "Mastering", description: "TECHNICAL EXCELLENCE", order: 4 },
      { id: "tool-audio", title: "Audio Gear", description: "TECHNICAL EXCELLENCE", order: 5 },
    ];

    for (const t of tools) {
      const { id, ...data } = t;
      await client.createOrReplace({
        _id: id,
        _type: "tool",
        ...data,
      });
    }

    // 7. Seed About Page
    console.log("📝 Seeding About Page...");
    await client.createOrReplace({
      _id: "aboutPage",
      _type: "aboutPage",
      heroTitle: ["ABOUT", "BARNYARD", "PRODUCTIONS"],
      bannerHeadline: ["OFFERING END-TO-END", "MEDIA SOLUTIONS", "TAILORED JUST FOR YOU"],
      bannerParagraph: "Barnyard Productions is a UAE-based creative media company specializing in high-quality video production, advertising, and multimedia content. From concept to creation, we bring stories to life through bold visuals, cinematic storytelling, and strategic messaging. Whether it's commercials, branded content, corporate films, or digital media, our team blends creativity with technical expertise to deliver impactful results.",
      visionMission: [
        {
          title: "VISION",
          description: "At Barnyard Productions, our vision is to become a leading force in multimedia storytelling by shaping the future of visual content across the region and beyond. We aim to set new standards in media production by blending artistic expression with cutting-edge technology, creating experiences that inspire and leave a lasting impact.",
        },
        {
          title: "MISSION",
          description: "We empower bold ideas by transforming them into powerful visual stories that connect with audiences globally. We craft high-quality content across film, advertising, and digital platforms with cinematic precision and creative innovation. As a trusted creative partner, we guide brands and creators from concept to completion, delivering excellence in every frame.",
        },
      ],
      philosophyTitle: ["OUR", "CREATIVE", "PHILOSOPHY"],
      philosophyItems: [
        {
          id: "01",
          title: "STORY FIRST, ALWAYS",
          content: "We believe that every project, regardless of its scale, must be rooted in a compelling narrative. Our process starts with finding the heart of the story, ensuring that every visual element serves a purpose and resonates with the audience on a deeper level.",
        },
        {
          id: "02",
          title: "DETAILS MAKE THE DIFFERENCE",
          content: "Precision in planning and execution is what transforms good work into exceptional work. We obsess over the micro-details of cinematography, lighting, and sound to ensure a flawless final output.",
        },
        {
          id: "03",
          title: "COLLABORATION FUELS CREATIVITY",
          content: "We view our clients as partners. Through open communication, strategic insight, and shared vision, we achieve results that exceed expectations. Our collaborative process ensures that every stakeholder is aligned.",
        },
        {
          id: "04",
          title: "CREATE WITH IMPACT",
          content: "Our goal is not just to create content, but to leave a lasting impression. We build visual experiences that provoke thought, evoke emotion, and drive engagement.",
        },
      ],
    });

    console.log("✅ Migration complete! You can now see the content in your Sanity Studio.");
  } catch (err: any) {
    console.error("❌ Migration failed:", err.message);
  }
}

seed();
