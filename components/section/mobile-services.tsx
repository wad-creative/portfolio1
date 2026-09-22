import BlurFade from "../magicui/blur-fade";
import Image from "next/image";
import { useTranslations } from "next-intl";

const BLUR_FADE_DELAY = 0.04;

export default function MobileAppSection() {
  const t = useTranslations("mobile");

  return (
    <section id="mobile-development">
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

          <div className="flex flex-col gap-y-3 items-center justify-center max-w-200 px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">
              {t("title")}
            </h2>
            <p className="md:text-lg/relaxed text-balance text-center">
              {t("description")}
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
            <p className="text-sm italic text-center max-w-125">
              &ldquo; <strong>{t("quoteBold")}</strong> {t("quoteText")}&rdquo;
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
