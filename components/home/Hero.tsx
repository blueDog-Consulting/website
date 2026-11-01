import { Code2, LayoutTemplate, Megaphone, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroFadeIn } from "@/components/motion/FadeIn";

const chips = [
  { label: "Apps", Icon: Code2 },
  { label: "Web design", Icon: LayoutTemplate },
  { label: "DevRel", Icon: Megaphone },
  { label: "DevEx", Icon: Search },
];

export function Hero() {
  return (
    <section className="gradient-mesh relative overflow-hidden" aria-labelledby="hero-heading">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-28">
        <HeroFadeIn>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            blueDog Consulting
          </p>
          <h1
            id="hero-heading"
            className="text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl"
          >
            We build software, websites, and{" "}
            <span className="text-primary">developer programs</span> that people love.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Custom apps and web design from a developer who ships, plus DevRel and
            developer experience consulting from 12+ years inside the community.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Book a free consultation</Button>
            <Button href="#projects" variant="secondary">
              See our projects
            </Button>
          </div>
        </HeroFadeIn>

        <HeroFadeIn className="hidden lg:block">
          <div aria-hidden="true" className="float-slow relative">
            <div className="rounded-3xl border border-border bg-white p-6 shadow-2xl shadow-primary/10">
              <div className="mb-5 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-brand/30" />
                <span className="h-3 w-3 rounded-full bg-brand/20" />
                <span className="h-3 w-3 rounded-full bg-brand/10" />
              </div>
              <ul className="grid grid-cols-2 gap-3">
                {chips.map(({ label, Icon }) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 rounded-2xl bg-surface-alt p-4 text-sm font-medium text-ink"
                  >
                    <span className="rounded-xl bg-primary p-2 text-white">
                      <Icon className="h-4 w-4" />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
              <div className="mt-4 rounded-2xl bg-primary p-5 text-white">
                <p className="text-sm font-medium opacity-90">Free initial consultation</p>
                <p className="mt-1 text-xl font-semibold">Tell us what you&apos;re building.</p>
              </div>
            </div>
          </div>
        </HeroFadeIn>
      </div>
    </section>
  );
}
