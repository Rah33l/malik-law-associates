"use client";

import { TEAM, telHref } from "@/lib/site";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 shrink-0 fill-current"
    >
      <path d="M6.6 10.8c1.4 2.7 3.9 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.2Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 shrink-0 fill-current"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.47 0 .13 5.34.13 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.28-1.65a11.9 11.9 0 0 0 5.78 1.47h.01c6.59 0 11.93-5.34 11.93-11.92 0-3.18-1.24-6.17-3.48-8.42ZM12.06 21.8h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.72.98.99-3.63-.24-.37a9.86 9.86 0 0 1-1.51-5.27c0-5.44 4.43-9.86 9.88-9.86 2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.9 6.97c0 5.44-4.43 9.86-9.89 9.86Zm5.42-7.39c-.3-.15-1.76-.87-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47a8.9 8.9 0 0 1-1.65-2.05c-.17-.3 0-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54 1.92.83 2.38.9 3.23.76.52-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.56-.35Z" />
    </svg>
  );
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function TeamSection() {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <section ref={ref} className="bg-gradient-to-b from-cream to-cream-dark py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            The Chambers
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-forest sm:text-4xl">
            Our Distinguished Team
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold" />
          <p className="mt-4 max-w-2xl text-sm leading-6 text-forest/80">
            Advocacy and tax consultancy under one roof — court work, FBR
            matters, and day-to-day compliance.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, index) => (
            <article
              key={member.name}
              className="card-hover group relative overflow-hidden rounded-2xl border border-gold/30 bg-white p-6 sm:p-8"
              style={{
                opacity: isIntersecting ? 1 : 0,
                transform: isIntersecting ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease-out ${index * 0.1}s`,
              }}
            >
              {/* Avatar with gold gradient */}
              <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-light shadow-lg">
                <span className="font-serif text-3xl font-bold text-forest-deep">
                  {getInitials(member.name)}
                </span>
                {/* Gold ring border with glow */}
                <div className="absolute inset-0 rounded-full border-2 border-gold/50 group-hover:glow-gold transition-all duration-300" />
              </div>

              <h3 className="break-words text-center font-serif text-xl font-semibold text-forest sm:text-2xl">
                {member.name}
              </h3>
              <p className="mt-2 text-center text-xs font-semibold uppercase tracking-[0.14em] text-gold sm:tracking-[0.18em]">
                {member.title}
              </p>
              <p className="mt-4 text-center text-sm leading-6 text-forest/80">
                {member.specialization}
              </p>
              
              <div className="mt-6 space-y-3">
                <a
                  href={telHref(member.phone)}
                  className="flex items-center justify-center gap-2 rounded-lg border border-forest/20 px-4 py-3 text-sm font-semibold text-forest transition-all hover:border-gold hover:bg-gold/10 hover:text-gold"
                >
                  <PhoneIcon />
                  <span className="break-all">{member.phone}</span>
                </a>
                <a
                  href={member.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 px-4 py-3 text-sm font-semibold text-white transition-all hover:from-green-600 hover:to-green-700 hover:glow-teal"
                >
                  <WhatsAppIcon />
                  WhatsApp
                </a>
              </div>

              {/* Colorful shadow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
