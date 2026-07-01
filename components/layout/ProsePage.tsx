import { Section } from "@/components/ui/Section";

interface ProsePageProps {
  eyebrow: string;
  title: string;
  lastUpdated?: string;
  contentHtml: string;
}

export function ProsePage({
  eyebrow,
  title,
  lastUpdated,
  contentHtml,
}: ProsePageProps) {
  return (
    <>
      <section className="gradient-mesh border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-semibold text-ink md:text-5xl">{title}</h1>
          {lastUpdated ? (
            <p className="mt-4 text-sm text-muted">Last updated: {lastUpdated}</p>
          ) : null}
        </div>
      </section>

      <Section>
        <div
          className="prose-content mx-auto max-w-3xl text-base"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </Section>
    </>
  );
}
