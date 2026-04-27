import { getHomepageData } from "@/sanity/queries";
import ProjectCard from "@/components/ProjectCard";

// Helper component for Hero Animations (since we can't use motion directly in a server component for the whole page)
import ClientAnimationsWrapper from "@/components/ClientAnimationsWrapper";

const placeholderProjects = [
  {
    _id: "p1",
    title: "YASALAM",
    year: "2025",
    category: "EVENT COVERAGE",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1400&auto=format&fit=crop",
    aspectRatio: "aspect-[4/5]",
  },
  {
    _id: "p2",
    title: "F1 GRAND PRIX",
    year: "2025",
    category: "LIVE COVERAGE",
    image: "https://images.unsplash.com/photo-1541133569702-f9d99b281b14?q=80&w=1400&auto=format&fit=crop",
    aspectRatio: "aspect-square",
  },
  {
    _id: "p3",
    title: "GAMES OF THE FUTURE",
    year: "2025",
    category: "DOCUMENTARY",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400&auto=format&fit=crop",
    aspectRatio: "aspect-[4/5]",
  },
  {
    _id: "p4",
    title: "MOTHER OF THE NATION",
    year: "2025",
    category: "BRANDED CONTENT",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1400&auto=format&fit=crop",
    aspectRatio: "aspect-square",
  },
  {
    _id: "p5",
    title: "TVC CAMPAIGN",
    year: "2025",
    category: "COMMERCIAL",
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1400&auto=format&fit=crop",
    aspectRatio: "aspect-[4/5]",
  },
  {
    _id: "p6",
    title: "MOTN FESTIVAL",
    year: "2025",
    category: "EVENT COVERAGE",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1400&auto=format&fit=crop",
    aspectRatio: "aspect-square",
  }
];

export default async function ProjectsPage() {
  let data;
  try {
    data = await getHomepageData();
  } catch (error) {
    console.error("Error fetching project data:", error);
  }

  const rawProjects = data?.projects?.length ? data.projects : placeholderProjects;
  

  return (
    <div className="bg-black text-white selection:bg-white selection:text-black min-h-screen relative overflow-hidden">
      {/* Background Arc Patterns */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        <svg className="absolute top-0 right-0 w-[100vw] h-[100vw] translate-x-1/4 -translate-y-1/4" viewBox="0 0 1000 1000">
          <circle cx="1000" cy="0" r="400" fill="none" stroke="white" strokeWidth="0.8" />
          <circle cx="1000" cy="0" r="620" fill="none" stroke="white" strokeWidth="0.8" />
          <circle cx="1000" cy="0" r="850" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="1000" cy="0" r="1100" fill="none" stroke="white" strokeWidth="1" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-[120vw] h-[120vw] -translate-x-1/3 translate-y-1/3" viewBox="0 0 1000 1000">
          <circle cx="0" cy="1000" r="500" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="0" cy="1000" r="850" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="0" cy="1000" r="1200" fill="none" stroke="white" strokeWidth="1.2" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 pt-44 pb-32 md:pb-40 relative z-10">
        
        {/* Hero Section */}
        <ClientAnimationsWrapper>
          <div className="mb-28">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10vw] font-normal tracking-tighter uppercase leading-[0.85]">
              FEATURED<br />PROJECTS
            </h1>
            <div className="mt-8 text-3xl md:text-4xl font-light opacity-50">+</div>
          </div>
        </ClientAnimationsWrapper>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-20 md:gap-y-32 items-start">
          {rawProjects.map((project: any, idx: number) => (
            <ProjectCard key={project._id || idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
