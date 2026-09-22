import BlurFade from "../magicui/blur-fade";
import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";

const BLUR_FADE_DELAY = 0.04;

const PROJECTS = [
  {
    title: "www.carlbusinessgroup.net",
    image: "/project-1.png",
    link: "https://www.carlbusinessgroup.net",
  },
  {
    title: "www.nolimitking.com",
    image: "/project-2.png",
    link: "https://www.nolimitking.com",
  },
  {
    title: "www.ksglobalservices.net",
    image: "/project-3.png",
    link: "https://www.ksglobalservices.net",
  },
  {
    title: "www.junea.shop",
    image: "/project-4.png",
    link: "https://www.junea.shop",
  },
];

export default function LatestWork() {
  const t = useTranslations("latestWork");

  return (
    <section id="latest-work" className="py-12">
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
            <p className="md:text-lg/relaxed text-muted-foreground text-balance text-center">
              {t("description")}
            </p>
          </div>
        </div>

        {/* Refined Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-6xl mx-auto px-2 w-full">
          {PROJECTS.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 15 + id * 0.05}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block space-y-2"
              >
                {/* Refined Image Container */}
                <div className="relative aspect-video overflow-hidden rounded-md border bg-muted shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="bg-background/90 backdrop-blur-sm p-2 rounded-full border shadow-lg">
                      <ExternalLink className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Refined Typography */}
                <div className="px-1 text-center mb-4">
                  <h3 className="font-bold text-xs tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </a>
            </BlurFade>
          ))}
        </div>

        {/* Bottom Decorative Divider */}
        <BlurFade delay={BLUR_FADE_DELAY * 30}>
          <div className="flex flex-col items-center justify-center pt-4">
            <div className="h-px w-24 bg-border" />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
