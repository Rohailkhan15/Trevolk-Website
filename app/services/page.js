import Link from "next/link";
import { client, servicesQuery } from "@/lib/sanity";
import ServiceCard from "@/components/ServiceCard";

export const revalidate = false; // fully static

export const metadata = {
  title: "Services — Trevolk",
  description:
    "Explore the services offered by Trevolk — from modern web development to AI-powered automation systems.",
};

async function getAllServices() {
  try {
    const services = await client.fetch(servicesQuery);
    return services;
  } catch (error) {
    console.error("Error fetching services:", error);
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

function SparklesIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-neon-blue/30">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}

/* ─── Empty State ─── */

function EmptyState() {
  return (
    <div className="glass-card rounded-2xl p-16 text-center max-w-lg mx-auto">
      <div className="flex justify-center mb-6">
        <SparklesIcon />
      </div>
      <h2 className="text-xl font-bold text-white mb-3">No Services Yet</h2>
      <p className="text-zinc-400 leading-relaxed mb-8">
        We&apos;re putting the finishing touches on our service lineup. Check back soon!
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

/* ─── Services Page ─── */

export default async function ServicesPage() {
  const services = await getAllServices();

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
            What We Do
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-4">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="max-w-xl mx-auto text-zinc-400 text-lg">
            Everything we offer — expertly crafted to help businesses grow in the digital age.
          </p>
        </div>

        {/* Services grid */}
        {services.length > 0 ? (
          <>
            {/* Count badge */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-sm text-zinc-500">
                Showing{" "}
                <span className="text-neon-blue font-semibold">{services.length}</span>{" "}
                {services.length === 1 ? "service" : "services"}
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-neon-blue/10 to-transparent" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <ServiceCard key={i} service={service} index={i} tall />
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
