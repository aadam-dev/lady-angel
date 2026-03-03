"use client";

import { motion, useAnimation, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";

type ScrollRevealAs = "section" | "div" | "article" | "main" | "aside" | "header" | "footer";

interface ScrollRevealProps {
  children: React.ReactNode;
  as?: ScrollRevealAs;
  delay?: number;
  className?: string;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.2, 0.8, 0.2, 1],
    },
  },
};

export function ScrollReveal({
  children,
  as: Component = "section",
  delay = 0,
  className,
}: ScrollRevealProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          }
        });
      },
      { threshold: 0.2 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <motion.section
      ref={ref as React.RefObject<HTMLElement>}
      initial="hidden"
      animate={controls}
      variants={{
        ...variants,
        visible: {
          ...variants.visible,
          transition: {
            ...(variants.visible as any).transition,
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

