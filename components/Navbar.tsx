"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-forest text-cream shadow-md">
      <div className="h-[3px] bg-gold" />
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link href="/" className="min-w-0 flex-1 pr-2">
          <span className="block font-serif text-[15px] font-semibold leading-tight tracking-wide sm:text-xl">
            {SITE.name}
          </span>
          <span className="mt-0.5 hidden text-[11px] uppercase tracking-[0.22em] text-gold-light sm:block">
            {SITE.location}
          </span>
        </Link>

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
                  className={`text-sm tracking-wide transition-colors hover:text-gold-light ${
                    active ? "font-semibold text-gold" : "text-cream/90"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <details className="group md:hidden" key={pathname}>
          <summary
            className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded border border-cream/30 [-webkit-details-marker:none] [&::-webkit-details-marker]:hidden"
            aria-label="Open menu"
            data-testid="mobile-menu-button"
          >
            <span className="relative block h-3.5 w-5">
              <span className="absolute top-0 left-0 h-0.5 w-5 bg-cream transition group-open:top-1.5 group-open:rotate-45" />
              <span className="absolute top-1.5 left-0 h-0.5 w-5 bg-cream transition group-open:opacity-0" />
              <span className="absolute top-3 left-0 h-0.5 w-5 bg-cream transition group-open:top-1.5 group-open:-rotate-45" />
            </span>
          </summary>
          <div
            id="mobile-menu"
            className="fixed inset-x-0 top-[55px] z-50 max-h-[calc(100dvh-55px)] overflow-y-auto border-t border-cream/15 bg-forest-deep"
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
                      className={`block min-h-12 py-3.5 text-base ${
                        active ? "font-semibold text-gold" : "text-cream"
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
