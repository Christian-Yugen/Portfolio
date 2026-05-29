import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = {
  primary:
    "bg-white text-black hover:bg-white/90 shadow-[0_10px_30px_rgba(255,255,255,0.08)]",
  accent:
    "bg-primary text-black hover:bg-primary/90 shadow-[0_10px_30px_rgba(90,132,255,0.16)]",
  ghost:
    "border border-white/14 bg-white/6 text-white hover:bg-white/10 backdrop-blur-xl",
  outline: "border border-white/20 bg-transparent text-white hover:bg-white/8",
} as const;

const buttonSizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-sm md:text-base",
} as const;

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    />
  );
}

export function Badge({
  className,
  children,
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/12 bg-white/6 px-3 py-1 text-xs font-medium tracking-wide text-white/80 backdrop-blur-md",
        className
      )}
    >
      {children}
    </span>
  );
}

export function GlassPanel({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-4xl border border-white/10 bg-white/6 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8",
        className
      )}
    >
      {children}
    </div>
  );
}
