import Link from "next/link";
import { client, projectsQuery } from "@/lib/sanity";

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

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

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

/* ─── Project Card ─── */

function ProjectCard({ project, index }) {
  return (
    <div className="glass-card rounded-2xl p-8 group flex flex-col h-full">
      {/* Project number badge */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs font-mono text-neon-blue/60 tracking-wider">
          PROJECT {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-neon-blue/20 to-transparent" />
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
        {project.title}
      </h2>

      {/* Description */}
      <p className="text-zinc-400 leading-relaxed mb-6 flex-1">
        {project.description}
      </p>

      {/* Tech stack tags */}
      {project.techStack && project.techStack.filter(Boolean).length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.filter(Boolean).map((tech, j) => (
            <span key={j} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Action buttons */}
      <div className="flex gap-3 mt-auto pt-2">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm text-zinc-300 hover:text-white"
          >
            <GitHubIcon />
            GitHub
          </a>
        )}
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm text-white"
          >
            <ExternalLinkIcon />
            Live Site
          </a>
        )}
      </div>
    </div>
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

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-neon-blue transition-colors mb-12 group"
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