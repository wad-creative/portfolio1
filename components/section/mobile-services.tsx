import BlurFade from "../magicui/blur-fade";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

export default function MobileAppSection() {
  return (
    <section id="mobile-development">
      <div className="flex min-h-0 flex-col gap-y-12">
        {/* Header Section */}
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                Applications Mobiles Sur Mesure
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>

          <div className="flex flex-col gap-y-3 items-center justify-center max-w-200 px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">
              Des Applications Mobiles Sur Mesure.
            </h2>
            <p className="md:text-lg/relaxed text-balance text-center">
              Une application mobile est un véritable levier de croissance et de
              proximité avec vos utilisateurs. Je développe des solutions
              multiplateformes fiables, intuitives et évolutives, conçues pour
              offrir une expérience optimale et soutenir le développement de
              votre activité.
            </p>
          </div>
        </div>
        <div className="sm:w-108.5 mx-auto hover:scale-105 transition-all duration-500">
          <Image
            src="/crossplatforms.png"
            width={434}
            height={434}
            alt="mobile"
          />
        </div>

        {/* Bottom CTA */}
        <BlurFade delay={BLUR_FADE_DELAY * 25}>
          <div className="flex flex-col items-center justify-center space-y-4 pt-4">
            <div className="h-px w-24 bg-border" />
            <p className=" text-sm italic text-center max-w-125">
              "{" "}
              <strong>
                Je prends en charge toute la complexité technique pour vous
                laisser vous concentrer exclusivement sur la croissance de votre
                entreprise.
              </strong>{" "}
              Ne vous limitez pas au web : sécurisez dès aujourd'hui votre place
              sur l'écran d'accueil de vos clients."
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
