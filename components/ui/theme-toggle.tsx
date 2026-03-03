"use client";

import * as React from "react";
import { useTheme, type Theme } from "@/components/providers/theme-provider";
import { twMerge } from "tailwind-merge";

const themes: { value: Theme; label: string }[] = [
  { value: "editorial", label: "Editorial" },
  { value: "classic", label: "Classic" },
];

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="group"
      aria-label="Colour design"
      className={twMerge(
        "inline-flex items-center rounded-full border border-border/80 bg-muted/60 p-0.5 text-[10px] font-medium uppercase tracking-[0.18em]",
        className
      )}
    >
      {themes.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => setTheme(value)}
          aria-pressed={theme === value}
          aria-label={`Use ${label} design`}
          className={twMerge(
            "rounded-full px-2.5 py-1 transition-colors",
            theme === value
              ? "bg-primary text-primary-foreground"
              : "text-foreground/60 hover:text-foreground"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
