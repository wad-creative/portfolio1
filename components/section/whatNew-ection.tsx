import BlurFade from "../magicui/blur-fade";
import { MapPin, BarChart3, MousePointerClick, Rocket } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const SERVICES = [
  {
    title: "Custom Development",
    description:
      "High-performance web applications engineered for high conversion rates. I don't just build websites, I build digital growth engines.",
    icon: <Rocket className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "Total Visibility",
    description:
      "Comprehensive Google Business and Maps optimization to ensure local customers find you first and dominate local search.",
    icon: <MapPin className="h-6 w-6 text-red-500" />,
  },
  {
    title: "Actionable Data",
    description:
      "Integrated analytics to track visitor behavior, allowing you to refine strategy over time and maximize profitability.",
    icon: <BarChart3 className="h-6 w-6 text-emerald-500" />,
  },
  {
    title: "Scalable Reach",
    description:
      "One-on-one professional Facebook Ads coaching designed to turn clicks into consistent revenue and long-term growth.",
    icon: <MousePointerClick className="h-6 w-6 text-purple-500" />,
  },
];

export default function WhatNewSection() {
  return (
    <section id="growth-partnership">
      <div className="flex min-h-0 flex-col gap-y-12">
        {/* Header Section */}
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                The Evolution
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>

          <div className="flex flex-col gap-y-3 items-center justify-center max-w-[800px] px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">
              A website is only powerful if it generates profits.
            </h2>
            <p className="md:text-lg/relaxed text-balance text-center">
              I am shifting from being a developer who "just builds websites" to
              becoming a{" "}
              <strong>strategic growth partner for businesses</strong>. I no
              longer just write code; I build digital growth engines.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto px-4">
          {SERVICES.map((service, id) => (
            <BlurFade
              key={service.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              className="h-full"
            >
              <div className="group relative rounded-xl border bg-card p-6 h-full transition-all duration-300 hover:shadow-md hover:border-primary/20">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border shadow-sm transition-colors group-hover:bg-muted/50">
                  {service.icon}
                </div>
                <h3 className="font-bold text-xl mb-2 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Bottom CTA */}
        <BlurFade delay={BLUR_FADE_DELAY * 25}>
          <div className="flex flex-col items-center justify-center space-y-4 pt-4">
            <div className="h-px w-24 bg-border" />
            <p className=" text-sm italic text-center max-w-[500px]">
              "{" "}
              <strong>
                We handle the technical complexity so you can stay focused on
                running your business.
              </strong>{" "}
              Don’t just get a website—get a dominant online presence."
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
