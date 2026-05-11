import { getProjectsData } from "@/sanity/queries";
import ProjectCard from "@/components/ProjectCard";

// Helper component for Hero Animations (since we can't use motion directly in a server component for the whole page)
import ClientAnimationsWrapper from "@/components/ClientAnimationsWrapper";

export default async function ProjectsPage() {
  let projects = [];
  try {
    projects = await getProjectsData();
  } catch (error) {
    console.error("Error fetching project data:", error);
  }

  // If no projects found, we show an empty list or a message
  const rawProjects = projects || [];

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
        {rawProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-20 md:gap-y-32 items-start">
            {rawProjects.map((project: any, idx: number) => (
              <ProjectCard key={project._id || idx} project={project} index={idx} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center opacity-50 italic">
            No projects found in the backend. Please ensure they are published in Sanity.
          </div>
        )}
      </div>
    </div>
  );
}
