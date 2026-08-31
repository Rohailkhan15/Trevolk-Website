"use client";

import { useEffect, useState } from "react";

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function ServiceCard({ service, index, tall = false }) {
  const [isOpen, setIsOpen] = useState(false);

  const keywords = (service.keywords || []).filter(Boolean);

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
        {/* Service number badge */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-neon-blue/60 tracking-wider">
            SERVICE {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-neon-blue/20 to-transparent" />
        </div>

        {/* Name */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors line-clamp-2">
          {service.name}
        </h3>

        {/* Description — clamped to keep the card size constant */}
        <p className="text-zinc-400 leading-relaxed mb-6 line-clamp-4">
          {service.description}
        </p>

        {/* Keywords (niches / examples) — fixed area, extras are clipped */}
        {keywords.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto max-h-16 overflow-hidden">
            {keywords.map((keyword, j) => (
              <span key={j} className="tech-tag">
                {keyword}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Details modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={service.name}
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
              aria-label="Close service details"
              className="absolute top-5 right-5 text-zinc-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
            >
              <CloseIcon />
            </button>

            {/* Header */}
            <span className="text-xs font-mono text-neon-blue/60 tracking-wider">
              SERVICE {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-6 pr-8">
              {service.name}
            </h3>

            {/* Full description */}
            <p className="text-zinc-300 leading-relaxed whitespace-pre-line mb-8">
              {service.description}
            </p>

            {/* Keywords */}
            {keywords.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-zinc-500 tracking-widest uppercase mb-3">
                  What&apos;s Included
                </h4>
                <div className="flex flex-wrap gap-2">
                  {keywords.map((keyword, j) => (
                    <span key={j} className="tech-tag">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
