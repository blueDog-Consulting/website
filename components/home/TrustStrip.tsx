import { Gift, LineChart, Timer } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { features, trustStats } from "@/lib/site-config";

const featureIcons = [Gift, LineChart, Timer];

export function TrustStrip() {
  return (
    <Section alt>
      <SectionHeader
        eyebrow="Why blueDog"
        title="Experience you can trust"
        description="Practical engineering, DevRel, and community expertise backed by decades in technology."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {trustStats.map((stat, index) => (
          <FadeIn key={stat.label} delay={index * 0.08}>
            <Card className="text-center">
              <p className="text-4xl font-semibold text-primary">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </Card>
          </FadeIn>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {features.map((feature, index) => {
          const Icon = featureIcons[index] ?? Gift;
          return (
            <FadeIn key={feature.title} delay={index * 0.1}>
              <Card hover className="h-full">
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-ink">{feature.title}</h3>
                <p className="mt-3 text-muted">{feature.description}</p>
              </Card>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
