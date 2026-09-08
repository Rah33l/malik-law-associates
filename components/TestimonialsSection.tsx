"use client";

import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const testimonials = [
  {
    name: "Ahmed Hassan",
    location: "Lahore",
    text: "Exceptional legal representation. Malik Law Associates handled my property dispute with utmost professionalism and expertise. Highly recommended!",
    rating: 5,
  },
  {
    name: "Fatima Zahra",
    location: "Faisalabad",
    text: "The team at Malik Law Associates provided outstanding guidance through my family matter. Their compassion and legal acumen made a difficult time much easier.",
    rating: 5,
  },
  {
    name: "Muhammad Ali",
    location: "Multan",
    text: "Professional, knowledgeable, and responsive. They resolved my tax case efficiently. The best legal counsel I've experienced in Punjab.",
    rating: 5,
  },
  {
    name: "Sara Khan",
    location: "Rawalpindi",
    text: "Outstanding service for criminal defense. The lawyers are experienced and fight vigorously for their clients. Trustworthy and reliable.",
    rating: 5,
  },
  {
    name: "Imran Shah",
    location: "Sialkot",
    text: "Malik Law Associates handled my business registration flawlessly. Their attention to detail and understanding of corporate law is impressive.",
    rating: 5,
  },
];

function StarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 fill-current"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-12 w-12 fill-current opacity-20"
    >
      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
    </svg>
  );
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, isIntersecting] = useIntersectionObserver();

  useEffect(() => {
    if (!isIntersecting) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isIntersecting]);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section ref={ref} className="bg-gradient-to-b from-cream to-cream-dark py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            Client Testimonials
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-forest sm:text-4xl">
            What Our Clients Say
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold" />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleTestimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${index}`}
              className="glass card-hover relative overflow-hidden rounded-2xl p-6 sm:p-8"
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: isIntersecting ? 1 : 0,
                transform: isIntersecting ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.6s ease-out',
              }}
            >
              <QuoteIcon />
              <div className="mt-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="text-gold" />
                ))}
              </div>
              <p className="mt-4 font-subheading text-lg leading-relaxed text-forest">
                "{testimonial.text}"
              </p>
              <div className="mt-6">
                <p className="font-serif text-lg font-semibold text-forest">
                  {testimonial.name}
                </p>
                <p className="text-sm text-forest/70">{testimonial.location}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Carousel dots */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-gold"
                  : "bg-forest/30 hover:bg-forest/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
