export type PropertyType = "residential" | "commercial" | "agricultural";
export type LocationType = "urban" | "rural";

export type RegistryBreakdown = {
  stampDuty: number;
  registrationFee: number;
  cvt: number;
  total: number;
  stampDutyRate: number;
  registrationRate: number;
  cvtRate: number;
};

/**
 * Punjab (Pakistan) 2024 indicative rates for property registry.
 * Stamp duty follows urban/rural classification under the Stamp Act as applied in Punjab.
 * CVT applies to urban immovable property; rural and agricultural land are treated as exempt.
 * Registration fee is the commonly applied 1% conveyance rate.
 * Official assessment may differ by district DC value and latest notifications.
 */
export function getRegistryRates(
  propertyType: PropertyType,
  location: LocationType,
) {
  const stampDutyRate = location === "urban" ? 0.01 : 0.03;
  const registrationRate = 0.01;
  const cvtRate =
    location === "urban" && propertyType !== "agricultural" ? 0.02 : 0;

  return { stampDutyRate, registrationRate, cvtRate };
}

export function calculateRegistryFees(
  value: number,
  propertyType: PropertyType,
  location: LocationType,
): RegistryBreakdown {
  const { stampDutyRate, registrationRate, cvtRate } = getRegistryRates(
    propertyType,
    location,
  );

  const stampDuty = value * stampDutyRate;
  const registrationFee = value * registrationRate;
  const cvt = value * cvtRate;

  return {
    stampDuty,
    registrationFee,
    cvt,
    total: stampDuty + registrationFee + cvt,
    stampDutyRate,
    registrationRate,
    cvtRate,
  };
}

export function formatPkr(amount: number) {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatPercent(rate: number) {
  return `${(rate * 100).toFixed(0)}%`;
}
