import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={[
        "rounded-2xl border border-border bg-white p-6 shadow-sm",
        hover
          ? "transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
          : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
