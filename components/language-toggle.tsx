"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "../i18n/routing";
import { useTransition } from "react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import { Languages } from "lucide-react";

export function LanguageToggle({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("navbar");

  const nextLocale = locale === "fr" ? "en" : "fr";

  const handleToggle = () => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  const currentLabel = locale === "fr" ? "FR" : "EN";
  const switchTooltip = nextLocale === "fr" ? t("switchToFr") : t("switchToEn");

  return (
    <Button
      type="button"
      variant="link"
      size="icon"
      disabled={isPending}
      className={cn(
        "relative flex items-center justify-center font-bold select-none cursor-pointer transition-transform hover:scale-105",
        isPending && "opacity-50",
        className,
      )}
      onClick={handleToggle}
      aria-label={`${t("languageToggle")}: ${switchTooltip}`}
    >
      <div className="flex items-center justify-center gap-1">
        <Languages className="h-2.5 w-2.5 opacity-70" />
        <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
          {currentLabel}
        </span>
      </div>
    </Button>
  );
}
