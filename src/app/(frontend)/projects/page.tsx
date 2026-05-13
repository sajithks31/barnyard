import { getProjectsData, getHomepageData } from "@/sanity/queries";
import ProjectCard from "@/components/ProjectCard";
import ClientAnimationsWrapper from "@/components/ClientAnimationsWrapper";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getProjectsData();
  const homepageData = await getHomepageData();
  const seo = data?.pageSettings?.seo;
  const siteSettings = homepageData?.siteSettings;

  const title = seo?.title || "Our Projects | Barnyard Productions";
  const description = seo?.description || "A selection of our latest film, photography, and creative production work.";

  return {
    title,
    description,
    alternates: {
      canonical: seo?.canonical || (siteSettings?.baseUrl ? `${siteSettings.baseUrl}/projects` : undefined),
    },
    openGraph: {
      title,
      description,
      images: seo?.ogImageUrl ? [{ url: seo.ogImageUrl }] : [],
    },
    robots: seo?.noIndex ? "noindex, nofollow" : "index, follow",
  };
}

export default async function ProjectsPage() {
  let data: any = null;
  try {
    data = await getProjectsData();
  } catch (error) {
    console.error("Error fetching project data:", error);
  }

  const rawProjects = data?.projects || [];
  const pageSettings = data?.pageSettings;

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
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10vw] font-medium tracking-tighter uppercase leading-[0.85]">
              {(pageSettings?.heroTitle || ["FEATURED", "PROJECTS"]).map((line: string, i: number) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h1>
            <div className="mt-12 opacity-80">
              <img src="/overlapping-circles.svg" alt="icon" className="w-16 md:w-20 h-auto invert" />
            </div>
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
