import type { Metadata } from "next";
import { ServiceGrid } from "@/components/services/ServiceCard";
import { Section } from "@/components/ui/Section";
import { getAllServices, getServicesIndexPage } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Services",
  description:
    "DevRel, community, and developer experience services from blueDog Consulting.",
};

export default async function ServicesPage() {
  const page = getServicesIndexPage();
  const services = getAllServices();
  const contentHtml = await markdownToHtml(page.content);

  return (
    <>
      <section className="gradient-mesh border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Services
          </p>
          <div
            className="prose-content max-w-3xl"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </section>

      <Section>
        <ServiceGrid services={services} />
      </Section>
    </>
  );
}
