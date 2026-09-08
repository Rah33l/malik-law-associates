"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      {/* Gold shimmer top border */}
      <div className="h-[3px] gold-shimmer" />
      
      {/* Glassmorphism navbar with gradient background */}
      <nav className="glass-dark mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        {/* Logo section */}
        <Link href="/" className="min-w-0 flex-1 pr-2 group">
          <div className="flex items-center gap-3">
            {/* Gold "M" in circle */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-light text-forest-deep shadow-lg group-hover:glow-gold transition-all duration-300">
              <span className="font-serif text-xl font-bold">M</span>
            </div>
            <div>
              <span className="block font-serif text-[15px] font-semibold leading-tight tracking-wide text-cream sm:text-xl group-hover:text-gold transition-colors">
                {SITE.name}
              </span>
              <span className="mt-0.5 hidden text-[11px] uppercase tracking-[0.22em] text-gold sm:block">
                {SITE.location}
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-sm tracking-wide transition-all duration-300 hover:text-gold-light group ${
                    active ? "font-semibold text-gold" : "text-cream/90"
                  }`}
                >
                  {link.label}
                  {/* Colorful glow on hover */}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-gold via-purple-600 to-teal-600 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile menu */}
        <details className="group md:hidden" key={pathname}>
          <summary
            className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-lg border border-gold/30 bg-gold/10 [-webkit-details-marker:none] [&::-webkit-details-marker]:hidden hover:bg-gold/20 transition-colors"
            aria-label="Open menu"
            data-testid="mobile-menu-button"
          >
            <span className="relative block h-3.5 w-5">
              <span className="absolute top-0 left-0 h-0.5 w-5 bg-gold transition group-open:top-1.5 group-open:rotate-45" />
              <span className="absolute top-1.5 left-0 h-0.5 w-5 bg-gold transition group-open:opacity-0" />
              <span className="absolute top-3 left-0 h-0.5 w-5 bg-gold transition group-open:top-1.5 group-open:-rotate-45" />
            </span>
          </summary>
          <div
            id="mobile-menu"
            className="fixed inset-x-0 top-[55px] z-50 max-h-[calc(100dvh-55px)] overflow-y-auto border-t border-gold/15 bg-gradient-to-b from-forest-deep to-forest backdrop-blur-xl"
          >
            <ul className="flex flex-col px-4 py-2">
              {NAV_LINKS.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block min-h-12 border-b border-gold/10 py-3.5 text-base transition-colors ${
                        active ? "font-semibold text-gold" : "text-cream hover:text-gold"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </details>
      </nav>
    </header>
  );
}
