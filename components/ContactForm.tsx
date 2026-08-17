"use client";

import { FormEvent, useState } from "react";
import { SITE, whatsappHref } from "@/lib/site";

const caseTypes = [
  "Tax Cases",
  "Criminal Cases",
  "Land & Property Cases",
  "General Consultation",
];

const fieldClass =
  "mt-2 w-full min-w-0 border border-forest/20 bg-cream px-3 py-3 text-base text-ink outline-none focus:border-gold sm:px-4";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const caseType = String(data.get("caseType") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const text = [
      `Assalam o Alaikum. Consultation request for ${SITE.name}.`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Case type: ${caseType}`,
      `Message: ${message}`,
    ].join("\n");

    window.open(whatsappHref(text), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    form.reset();
  }

  return (
    <form
      onSubmit={onSubmit}
      className="min-w-0 border border-forest/15 bg-white/60 p-4 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
        />
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
        <label className="block min-w-0">
          <span className="text-sm font-semibold text-forest">Case Type</span>
          <select name="caseType" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a matter
            </option>
            {caseTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="mt-5 block min-w-0">
        <span className="text-sm font-semibold text-forest">Message</span>
        <textarea name="message" required rows={5} className={fieldClass} />
      </label>
      <button
        type="submit"
        className="mt-6 min-h-12 w-full bg-forest px-6 py-3 text-sm font-semibold tracking-wide text-cream transition hover:bg-forest-mid sm:w-auto"
      >
        Send Enquiry
      </button>
      {submitted ? (
        <p className="mt-4 text-sm text-forest" role="status">
          Thank you. WhatsApp should open with your message. If it did not,
          use the WhatsApp button below.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block min-w-0">
      <span className="text-sm font-semibold text-forest">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={fieldClass}
      />
    </label>
  );
}
