import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Trevolk - Web Development & AI Automations",
  description:
    "Trevolk is a tech startup specializing in modern web development and AI-powered automations. We transform ideas into powerful, scalable digital products.",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

const socialLinks = [
  {
    name: "YouTube",
    href: "https://youtube.com/@trevolk-official?si=U8mOrgHAmhg15GJ_",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/trevolk-team-85759b423/?skipRedirect=true",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/trevolkOfficial",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61592346680742&sfnsn=wa",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/trevolk_official?igsh=MWNwbXRmbjB2eXhyZA==",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neon-blue/10 bg-background/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6" aria-label="Primary navigation">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="relative flex h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-neon-blue/20 bg-white/5">
            <Image
              src="/Trevolk_icon.png"
              alt="Trevolk logo"
              width={44}
              height={44}
              className="h-full w-full object-cover"
              priority
            />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-bold uppercase tracking-[0.24em] text-white">
              Trevolk
            </span>
            <span className="hidden text-xs text-zinc-500 sm:block">
              Web Development & AI Automations
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-neon-blue/10 hover:text-neon-blue sm:px-4"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neon-blue/10 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="relative flex h-9 w-9 overflow-hidden rounded-lg border border-neon-blue/20 bg-white/5">
              <Image
                src="/Trevolk_icon.png"
                alt="Trevolk logo"
                width={36}
                height={36}
                className="h-full w-full object-cover"
              />
            </span>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Trevolk
            </span>
          </Link>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-500">
            Building modern web products and AI automations with a mission to help talented people grow.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neon-blue/15 text-zinc-400 transition-colors hover:border-neon-blue/50 hover:bg-neon-blue/10 hover:text-neon-blue"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-sm text-zinc-600">
            (c) 2026 Trevolk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
