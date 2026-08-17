import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import RegistryCalculator from "@/components/RegistryCalculator";

export const metadata: Metadata = {
  title: "Registry Calculator",
  description:
    "Estimate Punjab property registry costs: stamp duty, registration fee, and CVT using 2024 rates.",
};

export default function CalculatorPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Punjab 2024 Rates"
        title="Property Registry Fee Calculator"
        description="Estimate stamp duty, registration fee, and Capital Value Tax (CVT) for a property transfer in Punjab. Figures are indicative and based on commonly applied 2024 rates."
      />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <RegistryCalculator />

        <div className="mt-12 overflow-x-auto border border-forest/15 md:overflow-visible">
          <table className="w-full text-left text-xs sm:text-sm">
            <caption className="bg-forest px-3 py-3 text-left font-serif text-base text-cream sm:px-4 sm:text-lg">
              Rate schedule used in this calculator
            </caption>
            <thead className="bg-cream-dark text-forest">
              <tr>
                <th className="px-2 py-3 font-semibold sm:px-4">Component</th>
                <th className="px-2 py-3 font-semibold sm:px-4">Urban</th>
                <th className="px-2 py-3 font-semibold sm:px-4">Rural</th>
              </tr>
            </thead>
            <tbody className="bg-white/50">
              <tr className="border-t border-forest/10">
                <td className="px-2 py-3 sm:px-4">Stamp Duty</td>
                <td className="px-2 py-3 sm:px-4">1%</td>
                <td className="px-2 py-3 sm:px-4">3%</td>
              </tr>
              <tr className="border-t border-forest/10">
                <td className="px-2 py-3 sm:px-4">Registration Fee</td>
                <td className="px-2 py-3 sm:px-4">1%</td>
                <td className="px-2 py-3 sm:px-4">1%</td>
              </tr>
              <tr className="border-t border-forest/10">
                <td className="px-2 py-3 sm:px-4">CVT (res. / comm.)</td>
                <td className="px-2 py-3 sm:px-4">2%</td>
                <td className="px-2 py-3 sm:px-4">0%</td>
              </tr>
              <tr className="border-t border-forest/10">
                <td className="px-2 py-3 sm:px-4">CVT (agricultural)</td>
                <td className="px-2 py-3 sm:px-4">0%</td>
                <td className="px-2 py-3 sm:px-4">0%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs leading-5 text-ink/60">
          Charges are typically calculated on the higher of declared
          consideration and the District Collector (DC) valuation. TMA, PLRA,
          and FBR withholding taxes (ss. 236K / 236C) are not included. This
          tool is for guidance only and is not a substitute for professional
          advice.
        </p>
      </div>
    </div>
  );
}
