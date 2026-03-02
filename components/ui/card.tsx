import * as React from "react";
import { twMerge } from "tailwind-merge";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={twMerge(
        "relative overflow-hidden rounded-3xl border border-border/80 bg-background/80 px-8 py-6 backdrop-blur-xl shadow-[0_0_0_1px_var(--border),0_4px_24px_rgba(15,23,42,0.08)]",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge("mb-4 flex flex-col gap-2", className)}
      {...props}
    />
  );
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={twMerge(
        "text-sm font-semibold tracking-[0.18em] uppercase text-foreground/80",
        className,
      )}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={twMerge(
        "text-sm text-foreground/70 leading-relaxed",
        className,
      )}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={twMerge("mt-2 space-y-3", className)} {...props} />
  );
}

