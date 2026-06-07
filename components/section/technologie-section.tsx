import BlurFade from "../magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

const TECHNOLOGIES = [
  { name: "React.js", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "GitHub", slug: "github" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Prisma", slug: "prisma" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Expo", slug: "expo" },
  { name: "Typescript", slug: "typescript" },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-12">
      <div className="flex flex-col gap-y-12">
        {/* Header Section */}
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent via-border to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1 shrink-0 mx-4">
              <span className="text-background text-sm font-medium">
                The Toolkit
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent via-border to-transparent" />
          </div>

          <div className="flex flex-col gap-y-3 items-center justify-center max-w-[800px] px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">
              Master the industry-leading technologies
            </h2>
            <p className="md:text-lg/relaxed text-muted-foreground text-balance text-center">
              I utilize a modern, scalable stack designed to handle high-traffic
              demands and provide seamless user experiences.
            </p>
          </div>
        </div>

        {/* Tech Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 w-full px-2">
          {TECHNOLOGIES.map((tech, id) => (
            <BlurFade key={tech.slug} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <div className="flex flex-col items-center justify-center bg-gray-200/60 dark:bg-black/20 p-4 h-28 rounded-md hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 border border-transparent hover:border-primary/20">
                <img
                  src={`https://cdn.simpleicons.org/${tech.slug}`}
                  alt={`${tech.name} Logo`}
                  className="h-10 w-10 mb-3"
                />
                <p className="text-center text-xs font-medium opacity-80">
                  {tech.name}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>

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
