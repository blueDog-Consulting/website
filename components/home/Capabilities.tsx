import Link from "next/link";
import { ArrowRight, Code2, LayoutTemplate, Megaphone, Search } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { capabilities } from "@/data/homepage";

const icons = { code: Code2, layout: LayoutTemplate, megaphone: Megaphone, search: Search };

export function Capabilities() {
  return (
    <Section id="what-we-do" aria-labelledby="capabilities-heading">
      <SectionHeader
        eyebrow="What we do"
        title="Build it. Design it. Grow it."
        description="Hands-on engineering and design, paired with advisory work that helps developers succeed with your product."
        headingId="capabilities-heading"
      />
      <ul className="grid gap-6 md:grid-cols-2">
        {capabilities.map((item, index) => {
          const Icon = icons[item.icon];
          return (
            <li key={item.id}>
              <FadeIn delay={index * 0.06} className="h-full">
                <Card hover className="relative flex h-full flex-col">
                  <div className="mb-4 inline-flex self-start rounded-xl bg-primary/10 p-3 text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{item.description}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-muted">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={item.href}
                    className="mt-6 inline-flex min-h-11 items-center gap-2 self-start font-medium text-primary hover:gap-3 hover:underline after:absolute after:inset-0 after:content-['']"
                  >
                    {item.cta}
                    <span className="sr-only"> — {item.title}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Card>
              </FadeIn>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
