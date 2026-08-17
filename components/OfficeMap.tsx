import { SITE } from "@/lib/site";

type OfficeMapProps = {
  compact?: boolean;
};

export default function OfficeMap({ compact = false }: OfficeMapProps) {
  return (
    <div className={compact ? "mt-4" : "mt-5"}>
      <div
        className={`overflow-hidden border ${
          compact ? "border-cream/20" : "border-forest/20"
        }`}
      >
        <iframe
          title="Malik Law Associates on Google Maps"
          src={SITE.mapsEmbedUrl}
          className={`w-full border-0 ${compact ? "h-36" : "h-52 sm:h-64"}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <a
        href={SITE.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={
          compact
            ? "mt-3 inline-flex items-center gap-2 text-sm text-cream/85 transition hover:text-gold-light"
            : "mt-3 inline-flex items-center gap-2 text-sm font-semibold text-forest transition hover:text-gold"
        }
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-4 w-4 fill-current"
        >
          <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
        </svg>
        View on Google Maps
      </a>
    </div>
  );
}
