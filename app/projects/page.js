import Link from "next/link";
import { client, projectsQuery } from "@/lib/sanity";
import ProjectCard from "@/components/ProjectCard";

export const revalidate = false; // fully static

export const metadata = {
  title: "Projects — Trevolk",
  description:
    "Explore the projects built by Trevolk — from modern web applications to AI-powered automation systems.",
};

async function getAllProjects() {
  try {
    const projects = await client.fetch(projectsQuery);
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

/* ─── Icon Components ─── */

function ArrowLeftIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-neon-blue/30">
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
    </svg>
  );
}


/* ─── Empty State ─── */

function EmptyState() {
  return (
    <div className="glass-card rounded-2xl p-16 text-center max-w-lg mx-auto">
      <div className="flex justify-center mb-6">
        <FolderIcon />
      </div>
      <h2 className="text-xl font-bold text-white mb-3">No Projects Yet</h2>
      <p className="text-zinc-400 leading-relaxed mb-8">
        We&apos;re working on exciting projects behind the scenes. Check back soon!
      </p>
      <Link
        href="/"
        className="btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-full text-neon-blue font-medium text-sm"
      >
        <ArrowLeftIcon />
        Back to Home
      </Link>
    </div>
  );
}

/* ─── Projects Page ─── */

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <section className="relative min-h-screen grid-bg">
      {/* Background orbs */}
      <div className="absolute top-32 right-20 w-80 h-80 bg-neon-purple/5 rounded-full blur-[140px]" />
      <div className="absolute bottom-40 left-10 w-64 h-64 bg-neon-blue/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-24">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-neon-blue transition-colors mb-9 group"
        >
          <ArrowLeftIcon />
          <span className="group-hover:underline">Back to Home</span>
        </Link>

        {/* Page header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-neon-blue tracking-widest uppercase">
            Our Work
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-4">
            All <span className="gradient-text">Projects</span>
          </h1>
          <p className="max-w-xl mx-auto text-zinc-400 text-lg">
            Everything we&apos;ve built — from client solutions to internal tools. Each project reflects our commitment to quality and innovation.
          </p>
        </div>

        {/* Projects grid */}
        {projects.length > 0 ? (
          <>
            {/* Count badge */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-sm text-zinc-500">
                Showing{" "}
                <span className="text-neon-blue font-semibold">{projects.length}</span>{" "}
                {projects.length === 1 ? "project" : "projects"}
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-neon-blue/10 to-transparent" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <ProjectCard key={i} project={project} index={i} />
              ))}
            </div>
          </>
        ) : (
          <EmptyState />
        )}
      </div>
    </section>
  );
}