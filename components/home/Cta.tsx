import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function Cta() {
  return (
    <Section aria-labelledby="cta-heading">
      <div className="rounded-3xl bg-primary px-6 py-14 text-center text-white sm:px-12">
        <h2 id="cta-heading" className="text-3xl font-semibold !text-white md:text-4xl">
          Have something in mind?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white">
          Whether it&apos;s an app, a website, or a developer program that needs a
          boost, your first consultation is free and there&apos;s no obligation.
        </p>
        <div className="mt-8">
          <Button
            href="/contact"
            className="!bg-white !text-primary-dark shadow-none hover:!bg-surface-alt"
          >
            Start a conversation
          </Button>
        </div>
      </div>
    </Section>
  );
}
