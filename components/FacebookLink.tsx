import { SITE } from "@/lib/site";

type FacebookLinkProps = {
  className?: string;
  iconClassName?: string;
  label?: string;
};

export default function FacebookLink({
  className = "",
  iconClassName = "h-5 w-5 fill-current",
  label = "Facebook",
}: FacebookLinkProps) {
  return (
    <a
      href={SITE.facebook}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Malik Law Associates on Facebook"
      className={className}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClassName}>
        <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07C2 17.1 5.66 21.24 10.44 22v-7.01H7.9v-2.92h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.92h-2.34V22C18.34 21.24 22 17.1 22 12.07Z" />
      </svg>
      {label ? <span>{label}</span> : null}
    </a>
  );
}
