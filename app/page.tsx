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
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-forest text-cream">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-20 opacity-[0.07]"
        >
          <svg viewBox="0 0 240 240" className="h-[28rem] w-[28rem]">
            <path
              fill="currentColor"
              d="M120 18c-4 0-8 3-8 8v18H86V32c0-5-4-8-8-8s-8 3-8 8v12H52c-5 0-8 4-8 8s3 8 8 8h18v12H52c-5 0-8 4-8 8s3 8 8 8h18v88c0 22 18 40 40 40h28c22 0 40-18 40-40V96h18c5 0 8-4 8-8s-3-8-8-8h-18V76h18c5 0 8-4 8-8s-3-8-8-8h-18V44h18c5 0 8-4 8-8s-3-8-8-8h-18V32c0-5-4-8-8-8s-8 3-8 8v12h-26V26c0-5-4-8-8-8Zm-8 70h16v88c0 13-11 24-24 24h-12c-13 0-24-11-24-24V88h44Z"
            />
          </svg>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-28 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {SITE.location}
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-6xl">
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

        <div className="mt-12 grid gap-6 md:grid-cols-3">
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
