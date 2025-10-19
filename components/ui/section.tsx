'use client';

import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionVariant = 'hero' | 'features' | 'projects' | 'testimonials' | 'cta' | 'default';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: "section" | "div";
  variant?: SectionVariant;
  container?: boolean;
  pattern?: boolean;
}

export function Section({
  className,
  as = "section",
  variant = 'default',
  container = true,
  pattern = false,
  children,
  ...props
}: SectionProps) {
  const Component = as;
  const content = container ? <Container>{children}</Container> : children;

  const backgrounds: Record<SectionVariant, string> = {
    hero: "bg-[hsl(var(--section-hero))]",
    features: "bg-[hsl(var(--section-features))]",
    projects: "bg-[hsl(var(--section-projects))]",
    testimonials: "bg-[hsl(var(--section-testimonials))]",
    cta: "bg-[hsl(var(--section-cta))]",
    default: "bg-background"
  };

  const patternClasses = pattern ? [
    "relative overflow-hidden",
    "before:absolute before:inset-0 before:bg-grid-pattern before:opacity-[0.03]",
    "after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-background/20"
  ].join(" ") : "";

  return (
    <Component
      className={cn(
        "py-16 md:py-24 lg:py-32",
        backgrounds[variant],
        patternClasses,
        className
      )}
      {...props}
    >
      {content}
    </Component>
  );
}
