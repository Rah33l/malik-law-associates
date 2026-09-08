"use client";

import Link from "next/link";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const corporateServices = [
  {
    title: "Partnership Deed",
    description: "Draft and register partnership agreements with legal precision",
    icon: "🤝",
    gradient: "from-blue-600 to-blue-800",
    glow: "glow-blue",
    href: "/services",
  },
  {
    title: "SECP Registration",
    description: "Company registration with Securities and Exchange Commission of Pakistan",
    icon: "🏢",
    gradient: "from-purple-600 to-purple-800",
    glow: "glow-purple-custom",
    href: "/services",
  },
  {
    title: "Trademark",
    description: "Protect your brand identity with trademark registration",
    icon: "™️",
    gradient: "from-orange-500 to-orange-700",
    glow: "glow-orange",
    href: "/services",
  },
  {
    title: "Copyright",
    description: "Secure your intellectual property rights",
    icon: "©",
    gradient: "from-teal-600 to-teal-800",
    glow: "glow-teal",
    href: "/services",
  },
];

export default function CorporateServicesSection() {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <section ref={ref} className="bg-forest py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            Business Solutions
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-cream sm:text-4xl">
            Corporate & Business Law
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold" />
          <p className="mt-6 max-w-2xl text-center text-cream/80">
            Comprehensive legal services for businesses and corporations across Pakistan
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {corporateServices.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group card-hover relative overflow-hidden rounded-2xl p-6 sm:p-8"
              style={{
                background: `linear-gradient(135deg, ${service.gradient.split(' ')[1]}, ${service.gradient.split(' ')[3]})`,
                opacity: isIntersecting ? 1 : 0,
                transform: isIntersecting ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease-out ${index * 0.1}s`,
              }}
            >
              {/* Shine effect */}
              <div className="shine-effect absolute inset-0" />
              
              {/* Icon */}
              <div className="relative z-10 text-5xl mb-4">{service.icon}</div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-serif text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-gold font-semibold">
                  <span>Learn More</span>
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
