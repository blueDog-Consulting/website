import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { ServicePage } from "@/lib/content";

interface ServiceCardProps {
  service: ServicePage;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card hover className="h-full">
      <h2 className="text-xl font-semibold text-ink">
        <Link href={`/services/${service.slug}`} className="hover:text-primary">
          {service.frontmatter.title}
        </Link>
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">{service.summary}</p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary"
      >
        Learn more
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </Card>
  );
}

interface ServiceGridProps {
  services: ServicePage[];
}

export function ServiceGrid({ services }: ServiceGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  );
}
