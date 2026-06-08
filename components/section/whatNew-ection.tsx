import BlurFade from "../magicui/blur-fade";
import { MapPin, BarChart3, MousePointerClick, Rocket } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const SERVICES = [
  {
    title: "Développement Stratégique",
    description:
      "Des applications web de pointe taillées sur mesure pour la conversion. Plus que de simples sites internet, je conçois de véritables moteurs de vente digitaux.",
    icon: <Rocket className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "Domination Locale (SEO)",
    description:
      "Une optimisation de pointe sur Google Business et Maps pour garantir que vos clients de proximité vous trouvent avant vos concurrents directs.",
    icon: <MapPin className="h-6 w-6 text-red-500" />,
  },
  {
    title: "Data & Analyses Actionnables",
    description:
      "Intégration d'outils d'analyse précis pour décrypter le comportement de vos visiteurs afin de piloter votre stratégie et maximiser votre visibilité.",
    icon: <BarChart3 className="h-6 w-6 text-emerald-500" />,
  },
  {
    title: "Acquisition & Performance",
    description:
      "Coaching sur mesure Facebook Ads pour transformer vos campagnes publicitaires en flux constants de prospects qualifiés et de rentabilité durable.",
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
                La Nouvelle Vision
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>

          <div className="flex flex-col gap-y-3 items-center justify-center max-w-[800px] px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">
              Un site internet n'a de valeur que s'il génère du chiffre
              d'affaires.
            </h2>
            <p className="md:text-lg/relaxed text-balance text-center">
              Je choisis de dépasser le rôle de simple développeur de site web
              pour devenir votre{" "}
              <strong>partenaire stratégique de croissance</strong>. Mon
              objectif est de bâtir des solutions selon vos besoins spécifiques,
              conçues pour maximiser votre rentabilité.
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
                Je m'occupe de la complexité technique pour vous permettre de
                rester focalisé sur votre business.
              </strong>{" "}
              Ne cherchez plus un simple site web, mais une solution
              stratégique."
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
