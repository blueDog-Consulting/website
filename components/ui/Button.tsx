import Link from "next/link";
import { type ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ComponentProps<"button"> {
  href?: string;
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-sm shadow-primary/25",
  secondary:
    "border border-border bg-white text-ink hover:border-primary/40 hover:text-primary",
  ghost: "text-ink hover:bg-surface-alt hover:text-primary",
};

function buttonClassName(variant: ButtonVariant, className?: string) {
  return [
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className={buttonClassName(variant, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClassName(variant, className)} {...props}>
      {children}
    </button>
  );
}
