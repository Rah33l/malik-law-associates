"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  calculateRegistryFees,
  formatPercent,
  formatPkr,
  type LocationType,
  type PropertyType,
} from "@/lib/registry-rates";

const propertyTypes: { value: PropertyType; label: string }[] = [
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "agricultural", label: "Agricultural" },
];

const locations: { value: LocationType; label: string }[] = [
  { value: "urban", label: "Urban" },
  { value: "rural", label: "Rural" },
];

export default function RegistryCalculator() {
  const [valueInput, setValueInput] = useState("");
  const [propertyType, setPropertyType] = useState<PropertyType>("residential");
  const [location, setLocation] = useState<LocationType>("urban");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const numericValue = useMemo(() => {
    const cleaned = valueInput.replace(/,/g, "").trim();
    return Number(cleaned);
  }, [valueInput]);

  const result =
    submitted && Number.isFinite(numericValue) && numericValue > 0
      ? calculateRegistryFees(numericValue, propertyType, location)
      : null;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!Number.isFinite(numericValue) || numericValue <= 0) {
      setError("Enter a valid property value in Pakistani Rupees.");
      setSubmitted(false);
      return;
    }
    setError("");
    setSubmitted(true);
  }

  return (
    <div className="grid min-w-0 gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
      <form
        onSubmit={onSubmit}
        className="min-w-0 border border-forest/15 bg-white/60 p-4 sm:p-8"
      >
        <label className="block text-sm font-semibold text-forest" htmlFor="value">
          Property value (PKR)
        </label>
        <input
          id="value"
          inputMode="numeric"
          value={valueInput}
          onChange={(event) => {
            setValueInput(event.target.value);
            setSubmitted(false);
          }}
          placeholder="e.g. 10,000,000"
          className="mt-2 w-full min-w-0 border border-forest/20 bg-cream px-3 py-3 text-base text-ink outline-none focus:border-gold sm:px-4"
        />

        <fieldset className="mt-6">
          <legend className="text-sm font-semibold text-forest">
            Property type
          </legend>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
            {propertyTypes.map((option) => (
              <label
                key={option.value}
                className={`flex min-h-11 cursor-pointer items-center justify-center border px-3 py-3 text-center text-sm ${
                  propertyType === option.value
                    ? "border-gold bg-forest text-cream"
                    : "border-forest/20 bg-cream text-ink"
                }`}
              >
                <input
                  type="radio"
                  name="propertyType"
                  value={option.value}
                  checked={propertyType === option.value}
                  onChange={() => {
                    setPropertyType(option.value);
                    setSubmitted(false);
                  }}
                  className="sr-only"
                />
                {option.label}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-6">
          <legend className="text-sm font-semibold text-forest">Location</legend>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {locations.map((option) => (
              <label
                key={option.value}
                className={`flex min-h-11 cursor-pointer items-center justify-center border px-3 py-3 text-center text-sm ${
                  location === option.value
                    ? "border-gold bg-forest text-cream"
                    : "border-forest/20 bg-cream text-ink"
                }`}
              >
                <input
                  type="radio"
                  name="location"
                  value={option.value}
                  checked={location === option.value}
                  onChange={() => {
                    setLocation(option.value);
                    setSubmitted(false);
                  }}
                  className="sr-only"
                />
                {option.label}
              </label>
            ))}
          </div>
        </fieldset>

        {error ? (
          <p className="mt-4 text-sm text-red-800" role="alert">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          className="mt-8 min-h-12 w-full bg-forest px-6 py-3 text-sm font-semibold tracking-wide text-cream transition hover:bg-forest-mid"
        >
          Calculate
        </button>
      </form>

      <div className="min-w-0 border border-forest/15 bg-forest p-4 text-cream sm:p-8">
        <h2 className="font-serif text-xl sm:text-2xl">Estimated registry cost</h2>
        <p className="mt-2 text-sm text-cream/75">
          Punjab 2024 indicative rates. Confirm against the latest Board of
          Revenue / FBR notification before payment.
        </p>

        {result ? (
          <dl className="mt-8 space-y-4">
            <ResultRow
              label={`Stamp Duty (${formatPercent(result.stampDutyRate)})`}
              value={formatPkr(result.stampDuty)}
            />
            <ResultRow
              label={`Registration Fee (${formatPercent(result.registrationRate)})`}
              value={formatPkr(result.registrationFee)}
            />
            <ResultRow
              label={`CVT (${formatPercent(result.cvtRate)})`}
              value={formatPkr(result.cvt)}
            />
            <div className="flex flex-col gap-1 border-t border-cream/15 pt-4 sm:flex-row sm:items-baseline sm:justify-between">
              <dt className="text-sm font-semibold uppercase tracking-wider text-gold">
                Total Cost
              </dt>
              <dd className="break-all font-serif text-xl text-gold-light sm:text-2xl sm:text-right">
                {formatPkr(result.total)}
              </dd>
            </div>
          </dl>
        ) : (
          <p className="mt-8 text-sm leading-6 text-cream/70 sm:mt-10">
            Enter the property value, choose type and location, then press
            Calculate. Stamp duty is 1% urban / 3% rural. Registration is 1%.
            CVT is 2% on urban residential and commercial property, and 0% on
            rural or agricultural land.
          </p>
        )}
      </div>
    </div>
  );
}

function ResultRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 border-b border-cream/15 pb-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
      <dt className="text-sm text-cream/80">{label}</dt>
      <dd className="break-all font-serif text-lg sm:text-right">{value}</dd>
    </div>
  );
}
