import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Tax, criminal, land & property, and family advocacy by Malik Law Associates in Punjab, Pakistan.",
};

const areas = [
  {
    id: "tax",
    title: "Tax Cases",
    intro:
      "Representation before the Federal Board of Revenue and the appellate forums in income tax, sales tax, and related fiscal disputes.",
    items: [
      {
        heading: "Income Tax",
        text: "Notices under the Income Tax Ordinance, assessments, appeals, and recovery proceedings — prepared with a complete paper trail.",
      },
      {
        heading: "Sales Tax",
        text: "Sales tax registrations, audit replies, show-cause notices, and appeals where the record must be put in order and argued with precision.",
      },
      {
        heading: "FBR Matters",
        text: "IRIS filings, withholding issues, blacklisting/suspension disputes, and correspondence with FBR field formations across Punjab.",
      },
    ],
  },
  {
    id: "criminal",
    title: "Criminal Cases",
    intro:
      "Defence work from the first police interaction through trial and appeal, with attention to procedure as much as to the facts.",
    items: [
      {
        heading: "Bail",
        text: "Pre-arrest and post-arrest bail applications in the Sessions Court and High Court, grounded in the record and the latest case law.",
      },
      {
        heading: "Trial",
        text: "Charge, evidence, cross-examination, and final arguments in criminal trials — including white-collar and property-related offences.",
      },
      {
        heading: "Appeals",
        text: "Criminal appeals and revisions where the trial record must be tested, errors of law identified, and relief sought from the superior courts.",
      },
    ],
  },
  {
    id: "land",
    title: "Land & Property Cases",
    intro:
      "Title, possession, and revenue work across Punjab — from the patwari’s record to the High Court.",
    items: [
      {
        heading: "Disputes",
        text: "Suits for declaration, possession, partition, and injunctions where ownership or possession is contested.",
      },
      {
        heading: "Registry",
        text: "Sale deeds, gifts, and related instruments — including stamp duty, registration, and e-stamp issues that delay a clean transfer.",
      },
      {
        heading: "Mutations",
        text: "Intiqal, fard, and Punjab Land Records Authority (PLRA) corrections so the revenue record matches the title you hold.",
      },
    ],
  },
  {
    id: "family",
    title: "Family Cases",
    intro:
      "Malik Law Associates provides expert legal counsel in all family matters under Pakistani family law.",
    items: [
      {
        heading: "Divorce & Khula",
        text: "Dissolution of marriage, khula petitions, and related proceedings in the Family Court.",
      },
      {
        heading: "Child Custody & Guardianship",
        text: "Custody, visitation, and guardianship applications before the Family Court and Guardian Court.",
      },
      {
        heading: "Maintenance & Alimony",
        text: "Claims for maintenance of wife, children, and dependants under the relevant family statutes.",
      },
      {
        heading: "Marriage Registration",
        text: "Nikah and marriage registration, and the paperwork needed to put the record in order.",
      },
      {
        heading: "Inheritance & Succession",
        text: "Shares under Muslim personal law, succession certificates, and related disputes.",
      },
      {
        heading: "Family Property Disputes",
        text: "Partition, title, and possession issues arising within the family.",
      },
      {
        heading: "Dowry Recovery",
        text: "Recovery of dowry articles and related claims in the family jurisdiction.",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Practice Areas"
        title="Legal Services"
        description="Focused advocacy in tax, criminal law, land & property, and family matters. Each brief is prepared as if it will be tested in court."
      />

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        {areas.map((area) => (
          <section key={area.id} id={area.id} className="scroll-mt-28">
            <h2 className="font-serif text-3xl font-semibold text-forest">
              {area.title}
            </h2>
            <div className="mt-3 h-px w-14 bg-gold" />
            <p className="mt-4 max-w-3xl text-base leading-7 text-ink/80">
              {area.intro}
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
              {area.items.map((item) => (
                <article
                  key={item.heading}
                  className="border border-forest/15 bg-white/50 p-6"
                >
                  <h3 className="font-serif text-xl text-forest">
                    {item.heading}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-ink/75">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ))}

        <div className="border border-gold/40 bg-forest px-6 py-10 text-center text-cream sm:px-10">
          <p className="font-serif text-2xl">Need advice on a pending matter?</p>
          <p className="mt-2 text-sm text-cream/80">
            Book a consultation and bring the notices, FIRs, or title papers you
            already have.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded bg-gold px-6 py-3 text-sm font-semibold text-forest-deep hover:bg-gold-light"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
