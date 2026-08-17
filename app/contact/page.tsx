import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import FacebookLink from "@/components/FacebookLink";
import PageHeader from "@/components/PageHeader";
import { SITE, telHref, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a consultation with Malik Atif Qasim, Advocate High Court, at Malik Law Associates, Punjab.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Chambers"
        title="Contact"
        description="Write with a brief account of the matter. Bring any FIR, notice, or title papers you already hold. Consultations are by appointment."
      />

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <ContactForm />

        <aside className="space-y-6">
          <div className="min-w-0 border border-forest/15 bg-white/50 p-5 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Office
            </p>
            <h2 className="mt-3 font-serif text-2xl text-forest">
              {SITE.name}
            </h2>
            <p className="mt-2 text-sm text-ink/80">
              {SITE.lawyer}, {SITE.designation}
            </p>
            <p className="mt-4 break-words text-sm leading-6 text-ink/75">{SITE.address}</p>
            <a
              href={telHref(SITE.phoneDisplay)}
              className="mt-4 block text-sm text-ink/80 hover:text-forest"
            >
              {SITE.phoneDisplay}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="block break-all text-sm text-ink/80 hover:text-forest"
            >
              {SITE.email}
            </a>
            <FacebookLink className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest transition hover:text-gold" />
          </div>

          <a
            href={whatsappHref(
              `Assalam o Alaikum. I would like to speak with ${SITE.lawyer} regarding a legal matter.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 items-center justify-center gap-3 bg-[#25D366] px-4 py-4 text-sm font-semibold text-white transition hover:bg-[#1ebe57] sm:px-6"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5 fill-current"
            >
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.47 0 .13 5.34.13 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.28-1.65a11.9 11.9 0 0 0 5.78 1.47h.01c6.59 0 11.93-5.34 11.93-11.92 0-3.18-1.24-6.17-3.48-8.42ZM12.06 21.8h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.72.98.99-3.63-.24-.37a9.86 9.86 0 0 1-1.51-5.27c0-5.44 4.43-9.86 9.88-9.86 2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.9 6.97c0 5.44-4.43 9.86-9.89 9.86Zm5.42-7.39c-.3-.15-1.76-.87-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47a8.9 8.9 0 0 1-1.65-2.05c-.17-.3 0-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54 1.92.83 2.38.9 3.23.76.52-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.56-.35Z" />
            </svg>
            Message on WhatsApp
          </a>
        </aside>
      </div>
    </div>
  );
}
