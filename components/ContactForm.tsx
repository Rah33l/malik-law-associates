"use client";

import { FormEvent, useState } from "react";

const WHATSAPP_NUMBER = "923224694065";

const caseTypes = [
  "Tax Cases",
  "Criminal Cases",
  "Land & Property Cases",
  "Family Cases",
  "General Consultation",
];

const fieldClass =
  "mt-2 w-full min-w-0 border bg-cream px-3 py-3 text-base text-ink outline-none focus:border-gold sm:px-4";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  caseType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const emptyValues: FormValues = {
  name: "",
  phone: "",
  email: "",
  caseType: "",
  message: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name) {
    errors.name = "Please enter your name.";
  } else if (values.name.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  const digits = values.phone.replace(/\D/g, "");
  if (!values.phone) {
    errors.phone = "Please enter your phone number.";
  } else if (digits.length < 10 || digits.length > 13) {
    errors.phone = "Enter a valid phone number (at least 10 digits).";
  }

  if (!values.email) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.caseType) {
    errors.caseType = "Please select a case type.";
  }

  if (!values.message) {
    errors.message = "Please enter a brief message.";
  } else if (values.message.length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}

function buildWhatsAppMessage(values: FormValues) {
  return [
    "*New Enquiry - Malik Law Associates*",
    `*Name:* ${values.name}`,
    `*Phone:* ${values.phone}`,
    `*Email:* ${values.email}`,
    `*Case Type:* ${values.caseType}`,
    `*Message:* ${values.message}`,
  ].join("\n");
}

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      buildWhatsAppMessage(values),
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setValues(emptyValues);
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="min-w-0 border border-forest/15 bg-white/60 p-4 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          autoComplete="name"
          value={values.name}
          error={errors.name}
          onChange={(value) => update("name", value)}
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          error={errors.phone}
          onChange={(value) => update("phone", value)}
        />
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          error={errors.email}
          onChange={(value) => update("email", value)}
        />
        <label className="block min-w-0">
          <span className="text-sm font-semibold text-forest">Case Type</span>
          <select
            name="caseType"
            value={values.caseType}
            onChange={(event) => update("caseType", event.target.value)}
            className={`${fieldClass} ${errors.caseType ? "border-red-700" : "border-forest/20"}`}
            aria-invalid={Boolean(errors.caseType)}
          >
            <option value="" disabled>
              Select a matter
            </option>
            {caseTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.caseType ? (
            <p className="mt-1 text-sm text-red-800" role="alert">
              {errors.caseType}
            </p>
          ) : null}
        </label>
      </div>
      <label className="mt-5 block min-w-0">
        <span className="text-sm font-semibold text-forest">Message</span>
        <textarea
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          className={`${fieldClass} ${errors.message ? "border-red-700" : "border-forest/20"}`}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? (
          <p className="mt-1 text-sm text-red-800" role="alert">
            {errors.message}
          </p>
        ) : null}
      </label>
      <button
        type="submit"
        className="mt-6 min-h-12 w-full bg-forest px-6 py-3 text-sm font-semibold tracking-wide text-cream transition hover:bg-forest-mid sm:w-auto"
      >
        Send Enquiry
      </button>
      {submitted ? (
        <p className="mt-4 text-sm text-forest" role="status">
          Thank you. WhatsApp should open with your enquiry. If it did not,
          allow pop-ups for this site or use the WhatsApp button below.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  value,
  error,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block min-w-0">
      <span className="text-sm font-semibold text-forest">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`${fieldClass} ${error ? "border-red-700" : "border-forest/20"}`}
        aria-invalid={Boolean(error)}
      />
      {error ? (
        <p className="mt-1 text-sm text-red-800" role="alert">
          {error}
        </p>
      ) : null}
    </label>
  );
}
