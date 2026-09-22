import BlurFade from "../magicui/blur-fade";
import { MapPin, BarChart3, MousePointerClick, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";

const BLUR_FADE_DELAY = 0.04;

export default function WhatNewSection() {
  const t = useTranslations("whatNew");

  const services = [
    {
      key: "strategic",
      title: t("services.strategic.title"),
      description: t("services.strategic.description"),
      icon: <Rocket className="h-6 w-6 text-blue-500" />,
    },
    {
      key: "localSeo",
      title: t("services.localSeo.title"),
      description: t("services.localSeo.description"),
      icon: <MapPin className="h-6 w-6 text-red-500" />,
    },
    {
      key: "analytics",
      title: t("services.analytics.title"),
      description: t("services.analytics.description"),
      icon: <BarChart3 className="h-6 w-6 text-emerald-500" />,
    },
    {
      key: "acquisition",
      title: t("services.acquisition.title"),
      description: t("services.acquisition.description"),
      icon: <MousePointerClick className="h-6 w-6 text-purple-500" />,
    },
  ];

  return (
    <section id="growth-partnership">
      <div className="flex min-h-0 flex-col gap-y-12">
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
            <p className="md:text-lg/relaxed text-balance text-center">
              {t("description")}
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto px-4">
          {services.map((service, id) => (
            <BlurFade
              key={service.key}
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
            <p className="text-sm italic text-center max-w-[500px]">
              &ldquo; <strong>{t("quoteBold")}</strong> {t("quoteText")}&rdquo;
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
