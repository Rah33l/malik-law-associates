import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Official Punjab land records and FBR income tax portals for clients of Malik Law Associates.",
};

const resources = [
  {
    title: "Punjab Land Records Authority",
    href: "https://lrmis.punjab.gov.pk",
    body: "The Punjab Land Records Authority (PLRA) portal for fard, mutations, and computerized land-record services. Use it to check ownership particulars, apply for copies of the record, and follow mutation status before a registry or court filing.",
  },
  {
    title: "Federal Board of Revenue (Income Tax)",
    href: "https://iris.fbr.gov.pk",
    body: "IRIS is FBR’s online system for income tax registration, returns, notices, and correspondence. Taxpayers and representatives use it to file returns, reply to notices, and track proceedings that may later require appellate work.",
  },
];

export default function ResourcesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Official Portals"
        title="Client Resources"
        description="Authoritative government systems we regularly use in land and tax matters. Always verify information on the official site."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {resources.map((resource) => (
            <article
              key={resource.href}
              className="flex flex-col border border-forest/15 bg-white/50 p-7"
            >
              <div className="h-px w-10 bg-gold" />
              <h2 className="mt-5 font-serif text-2xl text-forest">
                {resource.title}
              </h2>
              <p className="mt-4 flex-1 text-sm leading-6 text-ink/75">
                {resource.body}
              </p>
              <a
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center bg-forest px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-forest-mid"
              >
                Open portal
                <span className="ml-2" aria-hidden="true">
                  ↗
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
