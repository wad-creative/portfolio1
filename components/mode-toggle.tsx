"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { SunIcon } from "@radix-ui/react-icons";
import { Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "../lib/utils";

export function ModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        type="button"
        variant="link"
        size="icon"
        className={cn(className)}
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      type="button"
      variant="link"
      size="icon"
      className={cn(className)}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <SunIcon className="h-full w-full" />
      ) : (
        <Moon className="h-full w-full text-gray-500" />
      )}
    </Button>
  );
}
