"use client";

import { Dock, DockIcon } from "./magicui/dock";
import { ModeToggle } from "./mode-toggle";
import { LanguageToggle } from "./language-toggle";
import { Separator } from "./ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "./ui/tooltip";
import { DATA } from "../data/resume";
import { useTranslations } from "next-intl";
import { Link } from "../i18n/routing";

export default function Navbar() {
  const t = useTranslations("navbar");

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30">
      {/* ========================================= */}
      {/* DESKTOP VIEW: Magic UI Dock with Tooltips */}
      {/* ========================================= */}
      <Dock className="hidden md:flex z-50 pointer-events-auto relative h-14 p-2 w-fit mx-auto gap-2 border bg-card/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5">
        {DATA.navbar.map((item) => {
          const isExternal = item.href.startsWith("http");
          const label = item.href === "/" ? t("home") : item.label;

          if (isExternal) {
            return (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
                      <item.icon className="size-full rounded-sm overflow-hidden object-contain" />
                    </DockIcon>
                  </a>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  sideOffset={8}
                  className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-lg"
                >
                  <p>{label}</p>
                  <TooltipArrow className="fill-primary" />
                </TooltipContent>
              </Tooltip>
            );
          }

          return (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link href={item.href} aria-label={label}>
                  <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
                    <item.icon className="size-full rounded-sm overflow-hidden object-contain" />
                  </DockIcon>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                sideOffset={8}
                className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-lg"
              >
                <p>{label}</p>
                <TooltipArrow className="fill-primary" />
              </TooltipContent>
            </Tooltip>
          );
        })}

        <Separator
          orientation="vertical"
          className="h-2/3 m-auto w-px bg-border"
        />

        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => {
            const isExternal = social.url.startsWith("http");
            const IconComponent = social.icon;
            return (
              <Tooltip key={name}>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    aria-label={name}
                  >
                    <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
                      <IconComponent className="size-full rounded-sm overflow-hidden object-contain" />
                    </DockIcon>
                  </a>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  sideOffset={8}
                  className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-lg"
                >
                  <p>{name}</p>
                  <TooltipArrow className="fill-primary" />
                </TooltipContent>
              </Tooltip>
            );
          })}

        <Separator
          orientation="vertical"
          className="h-2/3 m-auto w-px bg-border"
        />

        {/* Theme Toggle */}
        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
              <ModeToggle className="size-full cursor-pointer" />
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            sideOffset={8}
            className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-lg"
          >
            <p>{t("theme")}</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>

        {/* Language Toggle */}
        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
              <LanguageToggle className="size-full cursor-pointer" />
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            sideOffset={8}
            className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-lg"
          >
            <p>{t("languageToggle")}</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>
      </Dock>

      {/* ============================================== */}
      {/* MOBILE VIEW: Static Flexbox without Tooltips   */}
      {/* ============================================== */}
      <div className="flex md:hidden z-50 pointer-events-auto relative h-14 p-2 w-fit mx-auto gap-2 border bg-card/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5 rounded-full items-center justify-center">
        {DATA.navbar.map((item) => {
          const isExternal = item.href.startsWith("http");
          const label = item.href === "/" ? t("home") : item.label;

          if (isExternal) {
            return (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center h-10 w-10 rounded-full bg-background text-muted-foreground border border-border transition-colors active:bg-muted active:text-foreground"
              >
                <item.icon className="h-5 w-5" />
              </a>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-label={label}
              className="flex items-center justify-center h-10 w-10 rounded-full bg-background text-muted-foreground border border-border transition-colors active:bg-muted active:text-foreground"
            >
              <item.icon className="h-5 w-5" />
            </Link>
          );
        })}

        <Separator
          orientation="vertical"
          className="h-2/3 m-auto w-px bg-border"
        />

        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => {
            const isExternal = social.url.startsWith("http");
            const IconComponent = social.icon;
            return (
              <a
                key={name}
                href={social.url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                aria-label={name}
                className="flex items-center justify-center h-10 w-10 rounded-full bg-background text-muted-foreground border border-border transition-colors active:bg-muted active:text-foreground"
              >
                <IconComponent className="h-5 w-5" />
              </a>
            );
          })}

        <Separator
          orientation="vertical"
          className="h-2/3 m-auto w-px bg-border"
        />

        {/* Mobile Theme Toggle */}
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-background text-muted-foreground border border-border transition-colors active:bg-muted active:text-foreground">
          <ModeToggle className="h-5 w-5" />
        </div>

        {/* Mobile Language Toggle */}
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-background text-muted-foreground border border-border transition-colors active:bg-muted active:text-foreground">
          <LanguageToggle className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
