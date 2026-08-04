import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/sanity";

const featuredProjectsQuery = `*[_type == "project"][0...2]{
  title,
  description,
  githubLink,
  liveLink,
  techStack
}`;

async function getFeaturedProjects() {
  try {
    const projects = await client.fetch(featuredProjectsQuery);
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

/* ─── Icon Components ─── */

function CodeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function BotIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

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

function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}

/* ─── Hero Section ─── */

function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/5 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px] animate-float delay-300" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-magenta/3 rounded-full blur-[200px]" />

      {/* Circuit lines decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-0 w-32 h-px bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent" />
        <div className="absolute top-[40%] right-0 w-48 h-px bg-gradient-to-l from-transparent via-neon-purple/20 to-transparent" />
        <div className="absolute bottom-[30%] left-0 w-64 h-px bg-gradient-to-r from-transparent via-neon-magenta/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-blue/20 bg-neon-blue/5 mb-8">
          <SparklesIcon />
          <span className="text-sm text-neon-blue font-medium tracking-wide">Building the Future with Code & AI</span>
        </div>

        {/* Main headline */}
        <h1 className="animate-fade-in-up delay-100 text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6" style={{ opacity: 0 }}>
          We Build{" "}
          <span className="gradient-text">Digital Solutions</span>
          <br />
          That Drive Growth
        </h1>

        {/* Sub-line */}
        <p className="animate-fade-in-up delay-200 max-w-2xl mx-auto text-lg sm:text-xl text-zinc-400 leading-relaxed mb-10" style={{ opacity: 0 }}>
          Trevolk is a tech startup specializing in modern web development and AI-powered automations. We transform ideas into powerful, scalable digital products.
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4" style={{ opacity: 0 }}>
          <Link
            href="/projects"
            className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base"
          >
            View Our Projects
            <ArrowRightIcon />
          </Link>
          <a
            href="https://wa.me/923158674564"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 px-8 py-4 rounded-full text-neon-blue font-semibold text-base"
          >
            <WhatsAppIcon />
            Let&apos;s Talk
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-up delay-500 mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto" style={{ opacity: 0 }}>
          {[
            { number: "2+", label: "Projects" },
            { number: "3", label: "Co-Founders" },
            { number: "2", label: "Core Services" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.number}</div>
              <div className="text-sm text-zinc-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-glow-pulse">
        <span className="text-xs text-zinc-600 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-neon-blue/40 to-transparent" />
      </div>
    </section>
  );
}

/* ─── Services Section ─── */

const services = [
  {
    icon: <CodeIcon />,
    title: "Web Development",
    description:
      "We build modern, responsive, and performant websites and web apps using cutting-edge technologies like Next.js, React, Django, and Node.js.",
    features: ["Custom Websites", "Web Applications", "API Development", "CMS Integration"],
  },
  {
    icon: <BotIcon />,
    title: "AI Automations",
    description:
      "We design and deploy intelligent automation workflows that save time and scale operations — from AI-powered content pipelines to smart business tools.",
    features: ["AI Agents", "Workflow Automation", "Content Pipelines", "Custom Integrations"],
  },
];

function ServicesSection() {
  return (
    <section id="services" className="relative py-28 px-6 section-glow">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-neon-blue tracking-widest uppercase">What We Do</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="max-w-xl mx-auto text-zinc-400 text-lg">
            We offer two core services — expertly crafted to help businesses grow in the digital age.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-neon-blue/10 flex items-center justify-center text-neon-blue mb-6 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-shadow">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">{service.description}</p>

              {/* Features list */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, j) => (
                  <span key={j} className="tech-tag">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Featured Projects Section ─── */

function FeaturedProjectsSection({ projects }) {
  return (
    <section id="featured-projects" className="relative py-28 px-6 section-glow">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-neon-blue tracking-widest uppercase">Our Work</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="max-w-xl mx-auto text-zinc-400 text-lg">
            A glimpse at what we&apos;ve been building. Real projects, real impact.
          </p>
        </div>

        {/* Project cards */}
        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-8 group flex flex-col"
              >
                {/* Project number badge */}
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="text-xs font-mono text-neon-blue/60 tracking-wider">PROJECT {String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-neon-blue/20 to-transparent ml-2" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech stack */}
                {project.techStack && project.techStack.filter(Boolean).length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.filter(Boolean).map((tech, j) => (
                      <span key={j} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-3 mt-auto">
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
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-2xl p-12 text-center mb-12">
            <p className="text-zinc-400 text-lg">Projects coming soon. Stay tuned!</p>
          </div>
        )}

        {/* See All CTA */}
        <div className="text-center">
          <Link
            href="/projects"
            className="btn-outline inline-flex items-center gap-2 px-8 py-4 rounded-full text-neon-blue font-semibold text-base"
          >
            See All Projects
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Section ─── */

function CTASection() {
  return (
    <section id="cta" className="relative py-28 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[300px] h-[300px] bg-neon-purple/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Ready to <span className="gradient-text">Build Something</span> Amazing?
        </h2>
        <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
          Whether you need a stunning website, a powerful web app, or an AI automation workflow — we&apos;re here to bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/923158674564"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base"
          >
            <WhatsAppIcon />
            Start a Conversation
          </a>
          <a
            href="mailto:trevolk.official@gmail.com"
            className="btn-outline inline-flex items-center gap-2 px-8 py-4 rounded-full text-neon-blue font-semibold text-base"
          >
            Email Us
            <ArrowRightIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */

export default async function Home() {
  const projects = await getFeaturedProjects();

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturedProjectsSection projects={projects} />
      <CTASection />
    </>
  );
}
