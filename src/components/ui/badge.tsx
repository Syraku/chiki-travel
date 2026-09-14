import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "subtle" | "red" | "amber";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variantStyles = {
    default:
      "bg-gradient-to-b from-white via-red-50 to-red-100/80 text-red-800 border-red-200/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]",
    red:
      "bg-gradient-to-b from-red-500 via-red-600 to-red-600 text-white border-red-400/40 shadow-xs",
    amber:
      "bg-gradient-to-b from-white via-amber-50 to-amber-100/70 text-amber-900 border-amber-200/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]",
    outline: "border border-slate-300 text-slate-700",
    subtle: "bg-slate-100 text-slate-700 border-slate-200",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
