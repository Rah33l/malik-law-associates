import Link from "next/link";
import FacebookLink from "@/components/FacebookLink";
import OfficeMap from "@/components/OfficeMap";
import { NAV_LINKS, SITE, telHref } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto bg-forest text-cream">
      <div className="h-[3px] bg-gold" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-serif text-xl font-semibold">{SITE.name}</p>
          <p className="mt-2 text-sm text-cream/80">
            {SITE.lawyer}, {SITE.designation}
          </p>
          <p className="mt-1 text-sm text-cream/70">{SITE.location}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/85 transition-colors hover:text-gold-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Chambers
          </p>
          <p className="mt-4 text-sm leading-6 text-cream/85">{SITE.address}</p>
          <OfficeMap compact />
          <a
            href={telHref(SITE.phoneDisplay)}
            className="mt-3 block text-sm text-cream/85 transition hover:text-gold-light"
          >
            {SITE.phoneDisplay}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="block break-all text-sm text-cream/85 transition hover:text-gold-light"
          >
            {SITE.email}
          </a>
          <FacebookLink className="mt-4 inline-flex items-center gap-2 text-sm text-cream/85 transition hover:text-gold-light" />
        </div>
      </div>
      <div className="border-t border-cream/15 px-4 py-4 text-center text-xs text-cream/70">
        © {SITE.copyrightYear} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
