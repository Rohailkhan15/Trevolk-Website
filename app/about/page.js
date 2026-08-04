import Link from "next/link";

export const metadata = {
  title: "About Us — Trevolk",
  description:
    "Learn about Trevolk's mission to empower talent through technology, our services in web development and AI automations, and how to get in touch.",
};

/* ─── SVG Icons ─── */

function ArrowLeftIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neon-magenta">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neon-blue">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function BotIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neon-purple">
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
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

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

/* Social Media Icons */

function YouTubeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

/* ─── Social Platform List ─── */

const socialLinks = [
  {
    name: "YouTube",
    icon: <YouTubeIcon />,
    description: "Tech news, opinions & general tech updates",
    url: "https://youtube.com/@trevolk-official?si=U8mOrgHAmhg15GJ_",
    color: "hover:text-red-500 hover:border-red-500/40",
  },
  {
    name: "LinkedIn",
    icon: <LinkedInIcon />,
    description: "Professional updates & startup milestones",
    url: "https://www.linkedin.com/in/trevolk-team-85759b423/?skipRedirect=true",
    color: "hover:text-blue-400 hover:border-blue-400/40",
  },
  {
    name: "X (Twitter)",
    icon: <XIcon />,
    description: "Real-time tech commentary & thoughts",
    url: "https://x.com/trevolkOfficial",
    color: "hover:text-zinc-200 hover:border-zinc-400/40",
  },
  {
    name: "Facebook",
    icon: <FacebookIcon />,
    description: "Community updates & project highlights",
    url: "https://www.facebook.com/profile.php?id=61592346680742&sfnsn=wa",
    color: "hover:text-blue-500 hover:border-blue-500/40",
  },
  {
    name: "Instagram",
    icon: <InstagramIcon />,
    description: "Behind the scenes & visual stories",
    url: "https://www.instagram.com/trevolk_official?igsh=MWNwbXRmbjB2eXhyZA==",
    color: "hover:text-pink-400 hover:border-pink-400/40",
  },
];

/* ─── Main Page ─── */

export default function AboutPage() {
  return (
    <section className="relative min-h-screen grid-bg overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-28 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-[160px]" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-neon-purple/5 rounded-full blur-[140px]" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-neon-magenta/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-neon-blue transition-colors mb-12 group"
        >
          <ArrowLeftIcon />
          <span className="group-hover:underline">Back to Home</span>
        </Link>

        {/* Page Header */}
        <div className="text-center mb-20">
          <span className="text-sm font-semibold text-neon-blue tracking-widest uppercase">
            Who We Are
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-6">
            About <span className="gradient-text">Trevolk</span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-400 text-lg sm:text-xl leading-relaxed">
            A technology startup driven by passion, engineering excellence, and a purpose to empower talent and build impactful digital products.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="glass-card rounded-2xl p-8 sm:p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-neon-magenta/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-14 h-14 rounded-2xl bg-neon-magenta/10 flex items-center justify-center shrink-0">
              <HeartIcon />
            </div>
            <div>
              <span className="text-xs font-mono text-neon-magenta uppercase tracking-wider">
                Our Purpose
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 mb-4">
                Our Mission
              </h2>
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                Help poor, needy, and talented people who can&apos;t afford premium courses and products by giving them access to modern tech education, project support, internships, and opportunities to grow. The startup will also earn to sustain itself and fund this mission.
              </p>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-neon-blue tracking-widest uppercase">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              What We <span className="gradient-text">Do</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center mb-6">
                <CodeIcon />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">1. Services</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                We build high-performance modern websites and intelligent AI automations for clients looking to establish a strong digital presence.
              </p>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
                  Web Development (Next.js, Django, Node.js)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
                  AI Automations & Agents
                </li>
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center mb-6">
                <BotIcon />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">2. Own Products</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                We design and launch original online products that solve specific real-world problems for developers, businesses, and creators.
              </p>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-purple" />
                  Solving Real-World Problems
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-purple" />
                  Funding Our Social Impact Mission
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="glass-card rounded-2xl p-8 sm:p-12 mb-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-sm font-semibold text-neon-blue tracking-widest uppercase">
              Get In Touch
            </span>
            <h2 className="text-3xl font-bold text-white mt-2 mb-3">
              Contact <span className="gradient-text">Details</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Have a project in mind or want to collaborate? Reach out to us directly through WhatsApp or email.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* WhatsApp */}
            <a
              href="https://wa.me/923158674564"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient rounded-xl p-6 flex items-center gap-4 text-white group"
            >
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <WhatsAppIcon />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-white/80">WhatsApp</div>
                <div className="font-semibold text-base sm:text-lg">0315 8674564</div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:trevolk.official@gmail.com"
              className="btn-outline rounded-xl p-6 flex items-center gap-4 text-neon-blue hover:text-white group"
            >
              <div className="w-12 h-12 rounded-lg bg-neon-blue/10 flex items-center justify-center shrink-0">
                <MailIcon />
              </div>
              <div className="overflow-hidden">
                <div className="text-xs uppercase tracking-wider text-zinc-400">Email</div>
                <div className="font-semibold text-sm sm:text-base truncate">trevolk.official@gmail.com</div>
              </div>
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-neon-blue tracking-widest uppercase">
              Connect With Us
            </span>
            <h2 className="text-3xl font-bold text-white mt-2">
              Social <span className="gradient-text">Platforms</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.url}
                className={`glass-card rounded-xl p-6 flex items-start gap-4 transition-all ${social.color}`}
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  {social.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">{social.name}</h3>
                  <p className="text-zinc-400 text-xs mt-1 leading-relaxed">{social.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ─── Team Section Placeholder (Commented out for future expansion) ─── */}
        {/*
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-neon-blue tracking-widest uppercase">Founders</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">Meet the <span className="gradient-text">Team</span></h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-neon-blue/10 border border-neon-blue/30 mx-auto mb-4 flex items-center justify-center font-bold text-xl text-neon-blue">RKS</div>
              <h3 className="text-lg font-bold text-white">Rohail Khan Shinwari</h3>
              <p className="text-xs text-neon-blue mb-2">Co-Founder & Backend Lead</p>
              <p className="text-xs text-zinc-400">Python, Django, REST API, AI Automations</p>
            </div>

            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-neon-purple/10 border border-neon-purple/30 mx-auto mb-4 flex items-center justify-center font-bold text-xl text-neon-purple">IK</div>
              <h3 className="text-lg font-bold text-white">Ishmal Khalid</h3>
              <p className="text-xs text-neon-purple mb-2">Co-Founder & Fullstack Developer</p>
              <p className="text-xs text-zinc-400">Node.js, Express, REST API, AI Automations</p>
            </div>

            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-neon-magenta/10 border border-neon-magenta/30 mx-auto mb-4 flex items-center justify-center font-bold text-xl text-neon-magenta">MM</div>
              <h3 className="text-lg font-bold text-white">Muhammad Musa</h3>
              <p className="text-xs text-neon-magenta mb-2">Co-Founder & Fullstack Developer</p>
              <p className="text-xs text-zinc-400">Node.js, Express, REST API, AI Automations</p>
            </div>
          </div>
        </div>
        */}

      </div>
    </section>
  );
}
