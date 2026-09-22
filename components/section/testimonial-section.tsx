"use client";

import { AnimatedTestimonials } from "../ui/animated-testimonials";
import BlurFade from "../magicui/blur-fade";
import { useTranslations } from "next-intl";

const BLUR_FADE_DELAY = 0.04;

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");

  const testimonials = [
    {
      quote: t("items.carl.quote"),
      name: "Mr. Carl",
      designation: t("items.carl.designation"),
      src: "/testimonial1.jpg",
    },
    {
      quote: t("items.yvenson.quote"),
      name: "Mr. Yvenson",
      designation: t("items.yvenson.designation"),
      src: "/testimonial2.JPG",
    },
    {
      quote: t("items.wedly.quote"),
      name: "Mr. Wedly",
      designation: t("items.wedly.designation"),
      src: "/testimonial3.jpg",
    },
  ];

  return (
    <section id="testimonials" className="py-4">
      <div className="flex min-h-0 flex-col gap-y-4">
        {/* Header Section */}
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                {t("badge")}
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>

          <div className="flex flex-col gap-y-3 items-center justify-center max-w-[800px] px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">
              {t("title")}
            </h2>
            <p className="md:text-lg/relaxed text-muted-foreground text-balance text-center">
              {t("description")}
            </p>
          </div>
        </div>

        {/* Animated Testimonials Component */}
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <div className="max-w-5xl mx-auto px-4">
            <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
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
