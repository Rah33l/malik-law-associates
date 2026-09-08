import Link from "next/link";
import FacebookLink from "@/components/FacebookLink";
import OfficeMap from "@/components/OfficeMap";
import { NAV_LINKS, SITE, telHref, whatsappHref } from "@/lib/site";

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 fill-current"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 fill-current"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.47 0 .13 5.34.13 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.28-1.65a11.9 11.9 0 0 0 5.78 1.47h.01c6.59 0 11.93-5.34 11.93-11.92 0-3.18-1.24-6.17-3.48-8.42ZM12.06 21.8h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.72.98.99-3.63-.24-.37a9.86 9.86 0 0 1-1.51-5.27c0-5.44 4.43-9.86 9.88-9.86 2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.9 6.97c0 5.44-4.43 9.86-9.89 9.86Zm5.42-7.39c-.3-.15-1.76-.87-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47a8.9 8.9 0 0 1-1.65-2.05c-.17-.3 0-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54 1.92.83 2.38.9 3.23.76.52-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.56-.35Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-auto bg-gradient-to-b from-forest-deep to-black text-cream">
      {/* Gold top border with shimmer */}
      <div className="h-[3px] gold-shimmer" />
      
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        {/* Logo and About */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-light text-forest-deep shadow-lg">
              <span className="font-serif text-2xl font-bold">M</span>
            </div>
            <div>
              <p className="font-serif text-xl font-semibold text-gold">{SITE.name}</p>
              <p className="text-xs uppercase tracking-[0.22em] text-gold-light">
                {SITE.location}
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-cream/80 leading-relaxed">
            {SITE.lawyer}, {SITE.designation}
          </p>
          <p className="mt-2 text-sm text-cream/70">
            Justice · Integrity · Excellence
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            Quick Links
          </p>
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative inline-block text-sm text-cream/85 transition-colors hover:text-gold-light group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-gold to-gold-light transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            Chambers
          </p>
          <p className="text-sm leading-6 text-cream/85">{SITE.address}</p>
          <OfficeMap compact />
          <a
            href={telHref(SITE.phoneDisplay)}
            className="mt-3 flex items-center gap-2 text-sm text-cream/85 transition hover:text-gold-light group"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4 fill-current"
            >
              <path d="M6.6 10.8c1.4 2.7 3.9 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.2Z" />
            </svg>
            <span className="group-hover:text-gold transition-colors">{SITE.phoneDisplay}</span>
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-2 block break-all text-sm text-cream/85 transition hover:text-gold-light"
          >
            {SITE.email}
          </a>
          
          {/* Social Icons */}
          <div className="mt-6 flex gap-4">
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold transition-all hover:bg-gold hover:text-forest-deep hover:glow-gold"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold transition-all hover:bg-gold hover:text-forest-deep hover:glow-gold"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Gold divider */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      </div>

      {/* Copyright */}
      <div className="px-4 py-4 text-center text-xs text-cream/70">
        <p>© {SITE.copyrightYear} {SITE.name}. All rights reserved.</p>
        <p className="mt-1 text-gold/60">Punjab Bar Council Registered</p>
      </div>
    </footer>
  );
}
