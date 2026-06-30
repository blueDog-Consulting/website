import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { getAllServices, getServiceBySlug } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.frontmatter.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const contentHtml = await markdownToHtml(
    service.content.split("<!--more-->")[0]
  );

  return (
    <>
      <section className="gradient-mesh border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Service
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold text-ink md:text-5xl">
            {service.frontmatter.title}
          </h1>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <div
            className="prose-content text-lg"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact">Get in touch</Button>
            <Button href="/services" variant="secondary">
              All services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
