import * as React from "react";
import { twMerge } from "tailwind-merge";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={twMerge(
          "h-11 w-full rounded-full border border-border/80 bg-background/60 px-4 text-sm text-foreground placeholder:text-foreground/40 outline-none ring-0 transition focus:border-primary/80 focus:bg-background focus-visible:ring-2 focus-visible:ring-primary/60",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

