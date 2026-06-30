import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section className="min-h-[50vh]">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          404
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-ink">Page not found</h1>
        <p className="mt-4 text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/">Back home</Button>
          <Button href="/contact" variant="secondary">
            Contact us
          </Button>
        </div>
      </div>
    </Section>
  );
}
