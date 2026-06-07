"use client";

import { AnimatedTestimonials } from "../ui/animated-testimonials";
import BlurFade from "../magicui/blur-fade";
import { useState } from "react";

const BLUR_FADE_DELAY = 0.04;

const TESTIMONIALS = [
  {
    quote:
      "The growth engine built for our tax and auction operations has completely transformed our workflow. The attention to detail is exactly what we needed to scale Carl Business Group.",
    name: "Mr. Carl",
    designation: "Founder of Carl Business Group",
    src: "testimonial-1.jpg",
  },
  {
    quote:
      "Our e-commerce presence has never been stronger. The beard care collection website is sleek, fast, and most importantly, it converts visitors into loyal customers.",
    name: "Mr. Yvenson",
    designation: "CEO of NoLimit King",
    src: "testimonial-2.jpg",
  },
  {
    quote:
      "The digital portal for our consultation services has significantly improved our team's productivity. It makes complex immigration and tax tasks simple for our clients.",
    name: "Mr. Wedly",
    designation: " CEO of KS Global Services",
    src: "testimonial-3.jpg",
  },
];

export default function TestimonialsSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="testimonials" className="py-12">
      <div className="flex min-h-0 flex-col gap-y-12">
        {/* Header Section */}
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                Testimonials
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>

          <div className="flex flex-col gap-y-3 items-center justify-center max-w-[800px] px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">
              What real businesses are saying.
            </h2>
            <p className="md:text-lg/relaxed text-muted-foreground text-balance text-center">
              Don’t just take my word for it. Here is how my strategic approach
              is helping businesses reach their goals and drive real
              profitability.
            </p>
          </div>
        </div>

        {/* Animated Testimonials Component */}
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <div
            className="max-w-5xl mx-auto px-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatedTestimonials
              testimonials={TESTIMONIALS}
              autoplay={!isHovered}
            />
          </div>
        </BlurFade>

        {/* Bottom Decorative Divider */}
        <BlurFade delay={BLUR_FADE_DELAY * 20}>
          <div className="flex flex-col items-center justify-center pt-4">
            <div className="h-px w-24 bg-border" />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
