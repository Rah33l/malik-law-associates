type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <section className="bg-forest text-cream">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold sm:tracking-[0.28em]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight break-words sm:text-5xl">
          {title}
        </h1>
        <div className="mt-4 h-px w-16 bg-gold" />
        <p className="mt-5 max-w-2xl text-base leading-7 text-cream/85">
          {description}
        </p>
      </div>
    </section>
  );
}
