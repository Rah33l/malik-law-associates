import { TEAM, telHref } from "@/lib/site";

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

export default function TeamSection() {
  return (
    <section className="bg-forest text-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold sm:tracking-[0.28em]">
          The Chambers
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
          Meet Our Team
        </h2>
        <div className="mt-4 h-px w-16 bg-gold" />
        <p className="mt-4 max-w-2xl text-sm leading-6 text-cream/80">
          Advocacy and tax consultancy under one roof — court work, FBR
          matters, and day-to-day compliance.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {TEAM.map((member) => (
            <article
              key={member.name}
              className="min-w-0 border border-gold/40 bg-forest-deep p-5 sm:p-7"
            >
              <div className="h-px w-10 bg-gold" />
              <h3 className="mt-4 break-words font-serif text-xl sm:mt-5 sm:text-2xl">
                {member.name}
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-gold sm:tracking-[0.18em]">
                {member.title}
              </p>
              <p className="mt-4 text-sm leading-6 text-cream/80">
                {member.specialization}
              </p>
              <a
                href={telHref(member.phone)}
                className="mt-5 flex min-h-11 items-center gap-2 text-sm text-cream transition hover:text-gold"
              >
                <PhoneIcon />
                <span className="break-all">{member.phone}</span>
              </a>
              <a
                href={member.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1ebe57]"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
