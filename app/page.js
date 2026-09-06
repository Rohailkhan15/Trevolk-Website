import Image from "next/image";
import Link from "next/link";
import { client, featuredProjectsQuery, featuredServicesQuery } from "@/lib/sanity";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";

async function getFeaturedProjects() {
  try {
    const projects = await client.fetch(featuredProjectsQuery);
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

async function getFeaturedServices() {
  try {
    const services = await client.fetch(featuredServicesQuery);
    return services;
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}

/* ─── Icon Components ─── */

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

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-28">
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
            href="/services"
            className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base"
          >
            View Our Services
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
            { number: "3", label: "Team Members" },
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

function ServicesSection({ services }) {
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
            Expertly crafted to help businesses grow in the digital age.
          </p>
        </div>

        {/* Service cards */}
        {services.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, i) => (
              <ServiceCard key={i} service={service} index={i} />
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-2xl p-12 text-center mb-12">
            <p className="text-zinc-400 text-lg">Services coming soon. Stay tuned!</p>
          </div>
        )}

        {/* See All CTA */}
        <div className="text-center">
          <Link
            href="/services"
            className="btn-outline inline-flex items-center gap-2 px-8 py-4 rounded-full text-neon-blue font-semibold text-base"
          >
            See All Services
            <ArrowRightIcon />
          </Link>
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
              <ProjectCard key={i} project={project} index={i} />
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

/* Frequently Asked Questions Section */

const faqs = [
  {
    question: "What exactly is an AI customer support chatbot?",
    answer:
      "A smart assistant on your website or store that answers customer questions instantly - order status, shipping, FAQs - using your real business data, not guesses.",
  },
  {
    question: "Will it give customers wrong or made-up answers?",
    answer:
      "No. It only answers using your actual store data and policies. If it doesn't know something, it says so or hands off to a human - it never makes things up.",
  },
  {
    question: "Can it handle refunds or payments?",
    answer:
      "Not yet - v1 focuses on order status, shipping/returns info, and product questions. Sensitive actions like refunds stay with your team for safety.",
  },
  {
    question: "Will this replace me answering messages on Instagram/WhatsApp?",
    answer:
      "It won't replace you, it'll filter you. Repetitive questions get answered instantly, so you only step in for the ones that actually need you.",
  },
  {
    question: "Do I need a website to use your AI chatbot automation?",
    answer:
      "No. Many small sellers run their whole business through Instagram DMs with no website, and we build for them too. Our chatbot automation can work on your website, Instagram, or WhatsApp - wherever your customers already message you.",
  },
  {
    question: "Do you also build websites?",
    answer: "Yes. We build fast, modern websites for your business, store or brand.",
  },
  {
    question: "How long does it take and what's the process?",
    answer:
      "We start with a quick discovery call to understand your business, then build and customize a solution around your real workflow - no generic templates.",
  },
];

function PlusIcon() {
  return (
    <svg className="faq-icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function FAQSection() {
  return (
    <section id="faqs" className="relative py-20 px-6 section-glow overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-neon-purple/5 blur-[120px]" />
        <div className="absolute bottom-12 right-8 h-72 w-72 rounded-full bg-neon-blue/5 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-neon-blue tracking-widest uppercase">Questions</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-3">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-zinc-400 text-base sm:text-lg">
            Clear answers about our AI chatbot automation, websites, and how we work with your real business workflow.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={faq.question} className="faq-item glass-card rounded-2xl group">
              <summary className="flex cursor-pointer list-none items-center gap-4 p-5 sm:p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                <span className="hidden sm:inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neon-blue/20 bg-neon-blue/5 text-[0.7rem] font-mono text-neon-blue/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-left text-sm sm:text-base font-semibold leading-snug text-white group-hover:text-neon-blue transition-colors">
                  {faq.question}
                </span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neon-blue/25 text-neon-blue transition-colors group-hover:bg-neon-blue/10">
                  <PlusIcon />
                </span>
              </summary>
              <div className="faq-answer px-5 pb-5 sm:px-6 sm:pb-6 sm:pl-[4.5rem]">
                <p className="border-t border-white/10 pt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
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
  const services = await getFeaturedServices();

  return (
    <>
      <HeroSection />
      <ServicesSection services={services} />
      <FeaturedProjectsSection projects={projects} />
      <FAQSection />
      <CTASection />
    </>
  );
}
