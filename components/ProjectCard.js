"use client";

import { useEffect, useState } from "react";

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

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function ProjectCard({ project, index, tall = false }) {
  const [isOpen, setIsOpen] = useState(false);

  const techStack = (project.techStack || []).filter(Boolean);

  // Lock body scroll + close on Escape while the modal is open
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* Card — fixed height, content clamped so long text never resizes it */}
      <div
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
        className={`glass-card rounded-2xl p-8 group flex flex-col w-full overflow-hidden cursor-pointer focus:outline-none focus-visible:border-neon-blue ${
          tall ? "h-[25.2rem]" : "h-[24rem]"
        }`}
      >
        {/* Project number badge */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-neon-blue/60 tracking-wider">
            PROJECT {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-neon-blue/20 to-transparent" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors line-clamp-2">
          {project.title}
        </h3>

        {/* Description — clamped to keep the card size constant */}
        <p className="text-zinc-400 leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack tags — fixed area, extras are clipped */}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6 max-h-16 overflow-hidden">
            {techStack.map((tech, j) => (
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
              onClick={(e) => e.stopPropagation()}
              className="btn-outline flex-1 justify-center inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm text-zinc-300 hover:text-white"
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
              onClick={(e) => e.stopPropagation()}
              className="btn-gradient flex-1 justify-center inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm text-white"
            >
              <ExternalLinkIcon />
              Live Site
            </a>
          )}
        </div>
      </div>

      {/* Details modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          onClick={() => setIsOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in" />

          {/* Modal content */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass-card relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl p-8 sm:p-10 animate-modal-in"
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close project details"
              className="absolute top-5 right-5 text-zinc-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
            >
              <CloseIcon />
            </button>

            {/* Header */}
            <span className="text-xs font-mono text-neon-blue/60 tracking-wider">
              PROJECT {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-6 pr-8">
              {project.title}
            </h3>

            {/* Full description */}
            <p className="text-zinc-300 leading-relaxed whitespace-pre-line mb-8">
              {project.description}
            </p>

            {/* Tech stack */}
            {techStack.length > 0 && (
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-zinc-500 tracking-widest uppercase mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, j) => (
                    <span key={j} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm text-zinc-300 hover:text-white"
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
                  className="btn-gradient inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm text-white"
                >
                  <ExternalLinkIcon />
                  Live Site
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
