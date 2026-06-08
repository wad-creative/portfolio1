import BlurFade from "../components/magicui/blur-fade";
import BlurFadeText from "../components/magicui/blur-fade-text";
import { Avatar, AvatarImage } from "../components/ui/avatar";
import WhatNewSection from "../components/section/whatNew-ection";
import TechStack from "../components/section/technologie-section";
import LatestWork from "../components/section/latestwork-section";
import TestimonialsSection from "../components/section/testimonial-section";
import { MessageCircle } from "lucide-react";
import MobileAppSection from "../components/section/mobile-services";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero" className="mb-12">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-4 flex flex-col order-2 md:order-1 flex-1">
              {/* The Badge */}
              <BlurFade delay={BLUR_FADE_DELAY}>
                <span className="inline-flex items-center rounded-full bg-gray-50 px-3 py-1 text-xs dark:text-white dark:bg-gray-900 font-medium text-primary border-1 dark:border-0 border-green-400">
                  Disponible pour de nouveaux projets
                </span>
              </BlurFade>

              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-3xl xl:text-5xl/none"
                yOffset={8}
                text="Je developpe des solutions digitales conçues pour maximiser votre rentabilité."
              />

              <BlurFadeText
                className="max-w-[600px] md:text-lg text-muted-foreground text-pretty leading-relaxed"
                delay={BLUR_FADE_DELAY}
                text="Je developpe des plateformes web pour garantir une croissance rentables grâce au développement sur mesure, à l'optimisation SEO locale et au marketing de conversion."
              />

              {/* Refined Single CTA Section */}
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href="https://wa.me/message/NTKZEVR7O32NH1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-500 text-background px-4 py-2.5 rounded-lg font-semibold hover:opacity-90 transition shadow-primary/20 w-fit"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Discuter avec moi
                  </a>
                </div>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <p className="text-sm font-medium text-muted-foreground italic">
                  Par <b>Wadley Alphonse</b> — Votre Partenaire de Croissance
                  Stratégique
                </p>
              </BlurFade>
            </div>

            <BlurFade
              delay={BLUR_FADE_DELAY}
              className="order-1 md:order-2 flex justify-start md:justify-end"
            >
              <Avatar className="size-28 md:size-40 border rounded-full shadow-2xl ring-8 ring-primary/5 bg-gray-600">
                <AvatarImage
                  className="object-cover object-top"
                  alt="Profile Picture"
                  src={"wad.png"}
                />
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Other sections remain exactly as they were */}
      <section id="what-new" className="mb-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <WhatNewSection />
        </BlurFade>
      </section>

      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <TechStack />
        </BlurFade>
      </section>

      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <MobileAppSection />
        </BlurFade>
      </section>

      <section id="latest-work">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <LatestWork />
        </BlurFade>
      </section>

      <section id="testimonials">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <TestimonialsSection />
        </BlurFade>
      </section>
    </main>
  );
}
