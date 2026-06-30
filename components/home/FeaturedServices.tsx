import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  FileText,
  Handshake,
  MessagesSquare,
  Search,
  Sparkles,
  Users,
} from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site-config";
import type { ServicePage } from "@/lib/content";

const iconMap: Record<string, typeof Sparkles> = {
  "free-consultation": Handshake,
  "community-audit": Users,
  "developer-experience-audit": Search,
  "devrel-community-strategy": MessagesSquare,
  "general-consulting": Sparkles,
  "ghostwrite-content": FileText,
  "executive-conference-support": CalendarDays,
  "event-planning": CalendarDays,
  "event-presence": CalendarDays,
  "ospo-as-a-service": Users,
};

interface FeaturedServicesProps {
  services: ServicePage[];
}

export function FeaturedServices({ services }: FeaturedServicesProps) {
  return (
    <Section>
      <SectionHeader
        eyebrow="Services"
        title="Our Services"
        description="Focused offerings to help you build, improve, and scale your developer programs."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = iconMap[service.slug] ?? Sparkles;
          return (
            <FadeIn key={service.slug} delay={index * 0.06}>
              <Card hover className="flex h-full flex-col">
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-ink">
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-primary"
                  >
                    {service.frontmatter.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {service.summary}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Card>
            </FadeIn>
          );
        })}
      </div>

      {siteConfig.homepage.showServicesButton ? (
        <div className="mt-10 text-center">
          <Button href="/services" variant="secondary">
            View All Services
          </Button>
        </div>
      ) : null}
    </Section>
  );
}
