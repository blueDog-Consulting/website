import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  alt?: boolean;
  id?: string;
}

export function Section({
  children,
  className = "",
  alt = false,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={[
        "py-16 md:py-24",
        alt ? "bg-surface-alt" : "bg-surface",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={[
        "mb-10 max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      ].join(" ")}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold text-ink md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-lg text-muted">{description}</p>
      ) : null}
    </div>
  );
}
