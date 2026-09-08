"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CorporateServicesSection from "@/components/CorporateServicesSection";
import { SITE, whatsappHref } from "@/lib/site";
import { useCountUp } from "@/hooks/useIntersectionObserver";

const services = [
  {
    href: "/services#tax",
    title: "Tax Cases",
    text: "Income tax, sales tax, and FBR proceedings handled with careful documentation and firm advocacy.",
    gradient: "from-green-600 to-green-800",
    glow: "glow-green",
    icon: "📊",
  },
  {
    href: "/services#criminal",
    title: "Criminal Cases",
    text: "Bail, trial, and appellate work before the courts, with a focus on protecting your rights at every stage.",
    gradient: "from-purple-600 to-purple-800",
    glow: "glow-purple-custom",
    icon: "⚖️",
  },
  {
    href: "/services#land",
    title: "Land & Property",
    text: "Title disputes, registry, mutations, and Punjab land-record matters from first notice to final decree.",
    gradient: "from-teal-600 to-teal-800",
    glow: "glow-teal",
    icon: "🏠",
  },
  {
    href: "/services#family",
    title: "Family Cases",
    text: "Divorce, khula, custody, maintenance, inheritance, and other family-court matters under Pakistani law.",
    gradient: "from-rose-500 to-rose-700",
    glow: "glow-rose",
    icon: "👨‍👩‍👧‍👦",
  },
];

const stats = [
  { icon: "⚖️", value: 500, label: "Cases Won" },
  { icon: "👨‍⚖️", value: 4, label: "Expert Lawyers" },
  { icon: "⭐", value: 98, label: "Client Satisfaction" },
  { icon: "🏆", value: 15, label: "Years Experience" },
];

function ScrollArrow() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bounce">
      <svg
        className="h-8 w-8 text-gold animate-pulse"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  );
}

export default function Home() {
  const [particles, setParticles] = useState<Array<{ id: number; left: string; delay: string }>>([]);

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 15}s`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden gradient-hero text-cream">
        {/* Floating Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: particle.left,
              animationDelay: particle.delay,
            }}
          />
        ))}

        {/* Background Watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]"
        >
          <svg
            viewBox="0 0 240 280"
            className="h-[40rem] w-[35rem]"
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

        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32 min-h-screen flex flex-col justify-center">
          {/* Corner decorations */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-10 left-6 h-12 w-12 border-t-2 border-l-2 border-gold/40 lg:top-16 lg:left-12"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-6 bottom-10 h-12 w-12 border-r-2 border-b-2 border-gold/40 lg:right-12 lg:bottom-16"
          />

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold fade-in-up">
            {SITE.location}
          </p>

          <div
            className="mt-8 flex items-center gap-6 sm:mt-10 sm:gap-10 fade-in-up stagger-1"
            aria-hidden="true"
          >
            <span className="text-7xl leading-none sm:text-9xl">⚖️</span>
            <svg
              viewBox="0 0 120 120"
              className="h-20 w-20 text-gold sm:h-28 sm:w-28"
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

          <h1 className="mt-8 max-w-4xl font-serif text-4xl font-semibold leading-tight tracking-tight sm:mt-12 sm:text-7xl fade-in-up stagger-2">
            <span className="text-gradient-gold">Justice · Integrity · Excellence</span>
          </h1>
          
          <div className="mt-6 h-1 w-24 bg-gradient-to-r from-gold to-gold-light fade-in-up stagger-3" />
          
          <p className="mt-8 font-serif text-2xl text-gold sm:text-4xl fade-in-up stagger-4">
            {SITE.lawyer}
          </p>
          <p className="mt-2 text-sm uppercase tracking-[0.16em] text-gold-light sm:text-base sm:tracking-[0.22em] fade-in-up stagger-5">
            {SITE.designation}
          </p>
          
          <p className="mt-10 max-w-2xl text-lg leading-8 text-cream/90 sm:text-xl fade-in-up stagger-6">
            {SITE.name} is a Punjab-based chambers practising in tax, criminal,
            and land & property law. Clients receive clear advice, disciplined
            case preparation, and representation that holds its ground in court
            and before revenue authorities.
          </p>
          
          <div className="mt-12 flex flex-col gap-4 sm:flex-row fade-in-up stagger-6">
            <Link
              href="/contact"
              className="btn-premium inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-gold to-gold-light px-8 py-4 text-base font-semibold tracking-wide text-forest-deep transition-all hover:scale-105 hover:glow-gold sm:text-lg"
            >
              Book Consultation
            </Link>
            <a
              href={whatsappHref(
                `Assalam o Alaikum. I would like to book a consultation with ${SITE.lawyer}.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center justify-center rounded-lg border border-green-400/30 px-8 py-4 text-base font-semibold tracking-wide text-cream transition-all hover:border-green-400 hover:glow-teal sm:text-lg"
            >
              <svg
                className="mr-2 h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.47 0 .13 5.34.13 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.28-1.65a11.9 11.9 0 0 0 5.78 1.47h.01c6.59 0 11.93-5.34 11.93-11.92 0-3.18-1.24-6.17-3.48-8.42ZM12.06 21.8h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.72.98.99-3.63-.24-.37a9.86 9.86 0 0 1-1.51-5.27c0-5.44 4.43-9.86 9.88-9.86 2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.9 6.97c0 5.44-4.43 9.86-9.89 9.86Zm5.42-7.39c-.3-.15-1.76-.87-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47a8.9 8.9 0 0 1-1.65-2.05c-.17-.3 0-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54 1.92.83 2.38.9 3.23.76.52-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.56-.35Z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        <ScrollArrow />
      </section>

      {/* ABOUT STRIP WITH STATS */}
      <section className="bg-gradient-to-r from-forest via-teal to-forest py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat, index) => {
              const [ref, count] = useCountUp(stat.value);
              return (
                <div
                  key={stat.label}
                  ref={ref}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl mb-2">{stat.icon}</div>
                  <div className="font-serif text-3xl font-bold text-gold sm:text-4xl">
                    {count}{stat.label === "Client Satisfaction" && "%"}
                    {stat.label === "Years Experience" && "+"}
                    {stat.label === "Cases Won" && "+"}
                  </div>
                  <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-cream">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-gradient-to-b from-forest-deep to-forest py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Practice Areas
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-cream sm:text-4xl">
              Our Practice Areas
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gold" />
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="group card-hover relative overflow-hidden rounded-2xl p-6 sm:p-8"
                style={{
                  background: `linear-gradient(135deg, ${service.gradient.split(' ')[1]}, ${service.gradient.split(' ')[3]})`,
                }}
              >
                {/* Faded number */}
                <div className="absolute top-4 right-4 font-serif text-6xl font-bold text-white/10">
                  0{index + 1}
                </div>

                {/* Shine effect */}
                <div className="shine-effect absolute inset-0" />

                {/* Icon */}
                <div className="relative z-10 text-5xl mb-4">{service.icon}</div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-serif text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    {service.text}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-gold font-semibold">
                    <span>Learn More</span>
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <TeamSection />

      {/* TESTIMONIALS SECTION */}
      <TestimonialsSection />

      {/* CORPORATE SERVICES SECTION */}
      <CorporateServicesSection />

      {/* RESOURCES SECTION */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Quick Access
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-forest sm:text-4xl">
              Legal Resources
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gold" />
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <Link
              href="/resources"
              className="group card-hover relative overflow-hidden rounded-2xl border-2 border-green-600/30 bg-white p-8 hover:border-green-600 hover:glow-teal"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-semibold text-forest">
                    Punjab Land Records
                  </h3>
                  <p className="mt-2 text-sm text-forest/70">
                    Access official land records and property information
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-green-600 font-semibold">
                    <span>Access Now</span>
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="/resources"
              className="group card-hover relative overflow-hidden rounded-2xl border-2 border-blue-600/30 bg-white p-8 hover:border-blue-600 hover:glow-blue"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-semibold text-forest">
                    FBR Income Tax
                  </h3>
                  <p className="mt-2 text-sm text-forest/70">
                    File your income tax returns and check tax status
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-blue-600 font-semibold">
                    <span>Access Now</span>
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
