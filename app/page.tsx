import Link from "next/link";
import TeamSection from "@/components/TeamSection";
import { SITE, whatsappHref } from "@/lib/site";

const services = [
  {
    href: "/services#tax",
    title: "Tax Cases",
    text: "Income tax, sales tax, and FBR proceedings handled with careful documentation and firm advocacy.",
  },
  {
    href: "/services#criminal",
    title: "Criminal Cases",
    text: "Bail, trial, and appellate work before the courts, with a focus on protecting your rights at every stage.",
  },
  {
    href: "/services#land",
    title: "Land & Property Cases",
    text: "Title disputes, registry, mutations, and Punjab land-record matters from first notice to final decree.",
  },
  {
    href: "/services#family",
    title: "Family Cases",
    text: "Divorce, khula, custody, maintenance, inheritance, and other family-court matters under Pakistani law.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-forest text-cream">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 top-8 text-gold opacity-[0.12] sm:-right-4 sm:top-0"
        >
          <svg
            viewBox="0 0 240 280"
            className="h-[22rem] w-[19rem] sm:h-[32rem] sm:w-[28rem]"
            fill="none"
          >
            <circle cx="120" cy="28" r="10" stroke="currentColor" strokeWidth="3" />
            <path d="M120 38v18" stroke="currentColor" strokeWidth="4" />
            <path d="M36 62h168" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            <path d="M48 62v36M192 62v36" stroke="currentColor" strokeWidth="2" />
            <path
              d="M28 98h40c0 18-9 32-20 32S28 116 28 98Z"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              d="M172 98h40c0 18-9 32-20 32s-20-14-20-32Z"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path d="M120 62v128" stroke="currentColor" strokeWidth="5" />
            <path d="M78 190h84" stroke="currentColor" strokeWidth="6" />
            <path d="M64 214h112" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-6 left-4 h-10 w-10 border-t border-l border-gold/40 sm:top-10 sm:left-6 lg:left-8"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-4 bottom-6 h-10 w-10 border-r border-b border-gold/40 sm:right-6 sm:bottom-10 lg:right-8"
          />

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {SITE.location}
          </p>

          <div
            className="mt-6 flex items-center gap-5 sm:mt-8 sm:gap-8"
            aria-hidden="true"
          >
            <span className="text-6xl leading-none sm:text-8xl">⚖️</span>
            <svg
              viewBox="0 0 120 120"
              className="h-16 w-16 text-gold sm:h-24 sm:w-24"
              fill="currentColor"
              role="img"
              aria-label="Judge's gavel"
            >
              <rect x="8" y="98" width="78" height="14" rx="3" />
              <rect x="20" y="90" width="54" height="10" rx="2" opacity="0.8" />
              <g transform="rotate(-42 58 52)">
                <rect x="52" y="36" width="12" height="58" rx="5" />
                <rect x="48" y="48" width="20" height="7" rx="1.5" />
                <rect x="32" y="18" width="52" height="30" rx="15" />
                <rect x="36" y="22" width="8" height="22" rx="3" opacity="0.35" />
                <rect x="72" y="22" width="8" height="22" rx="3" opacity="0.35" />
              </g>
            </svg>
          </div>

          <h1 className="mt-6 max-w-3xl font-serif text-3xl font-semibold leading-tight tracking-tight sm:mt-8 sm:text-6xl">
            {SITE.tagline}
          </h1>
          <div className="mt-6 h-px w-20 bg-gold" />
          <p className="mt-6 font-serif text-xl text-cream sm:text-3xl">
            {SITE.lawyer}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-gold-light sm:text-sm sm:tracking-[0.22em]">
            {SITE.designation}
          </p>
          <p className="mt-8 max-w-2xl text-base leading-7 text-cream/85 sm:text-lg">
            {SITE.name} is a Punjab-based chambers practising in tax, criminal,
            and land & property law. Clients receive clear advice, disciplined
            case preparation, and representation that holds its ground in court
            and before revenue authorities.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded bg-gold px-7 py-3 text-sm font-semibold tracking-wide text-forest-deep transition hover:bg-gold-light"
            >
              Book a Consultation
            </Link>
            <a
              href={whatsappHref(
                `Assalam o Alaikum. I would like to book a consultation with ${SITE.lawyer}.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded border border-cream/40 px-7 py-3 text-sm font-semibold tracking-wide text-cream transition hover:border-gold hover:text-gold"
            >
              WhatsApp the Chambers
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            The Firm
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-forest sm:text-4xl">
            Counsel you can place on the record
          </h2>
          <p className="mt-5 text-base leading-7 text-ink/80">
            Led by {SITE.lawyer}, {SITE.designation}, the firm assists
            individuals, families, and businesses across Punjab. Work is
            prepared with the same care whether the matter is a first
            appearance for bail, an FBR notice, or a long-running mutation
            dispute. Instructions are taken in confidence; strategy is
            explained in plain language.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group border border-forest/15 bg-white/50 p-7 transition hover:border-gold hover:shadow-md"
            >
              <div className="h-px w-10 bg-gold transition group-hover:w-16" />
              <h3 className="mt-5 font-serif text-2xl text-forest">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink/75">
                {service.text}
              </p>
              <span className="mt-6 inline-block text-sm font-semibold text-forest group-hover:text-gold">
                View practice area →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <TeamSection />
    </div>
  );
}
