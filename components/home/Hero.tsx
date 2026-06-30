import { Button } from "@/components/ui/Button";
import { HeroFadeIn } from "@/components/motion/FadeIn";
import { siteConfig } from "@/lib/site-config";

interface HeroProps {
  contentHtml: string;
}

export function Hero({ contentHtml }: HeroProps) {
  return (
    <section className="gradient-mesh overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-28">
        <HeroFadeIn>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            DevRel & Developer Experience
          </p>
          <div
            className="prose-content [&_h1]:mb-6 [&_h1]:text-4xl [&_h1]:font-semibold [&_h1]:text-ink [&_h1]:md:text-6xl [&_p]:text-lg [&_p]:text-muted"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
          {siteConfig.homepage.showContactBox ? (
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">Contact Us</Button>
              <Button href="/services" variant="secondary">
                View Services
              </Button>
            </div>
          ) : null}
        </HeroFadeIn>

        <HeroFadeIn className="relative hidden lg:block">
          <div className="relative aspect-square">
            <div className="absolute inset-0 rounded-[2rem] border border-primary/15 bg-white/70 shadow-2xl shadow-primary/10 backdrop-blur" />
            <div className="absolute inset-8 rounded-[1.5rem] border border-dashed border-primary/25" />
            <div className="absolute left-10 top-10 h-24 w-24 rounded-2xl bg-primary/15" />
            <div className="absolute bottom-12 right-10 h-32 w-32 rounded-full bg-primary/10" />
            <div className="absolute inset-x-12 bottom-16 rounded-2xl border border-border bg-white p-6 shadow-lg">
              <p className="text-sm font-medium text-primary">Strategy</p>
              <p className="mt-2 text-2xl font-semibold text-ink">
                Build programs developers love
              </p>
              <p className="mt-2 text-sm text-muted">
                Community, DevRel, and DevEx consulting tailored to your goals.
              </p>
            </div>
          </div>
        </HeroFadeIn>
      </div>
    </section>
  );
}
