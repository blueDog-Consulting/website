import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons/BrandIcons";
import { FadeIn } from "@/components/motion/FadeIn";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { projects } from "@/data/homepage";

const linkClass =
  "inline-flex min-h-11 items-center gap-2 font-medium text-primary underline-offset-4 hover:underline";

export function Projects() {
  return (
    <Section id="projects" alt aria-labelledby="projects-heading">
      <SectionHeader
        eyebrow="Open source & side projects"
        title="Things we've built"
        description="Real software, shipped and open for anyone to use, read, and learn from."
        headingId="projects-heading"
      />
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <li key={project.name}>
            <FadeIn delay={index * 0.06} className="h-full">
              <Card className="flex h-full flex-col">
                <p className="text-sm font-semibold uppercase tracking-wider text-muted">
                  {project.kind}
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-ink">{project.name}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary-dark">
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-x-6">
                  {"live" in project ? (
                    <a href={project.live} className={linkClass} target="_blank" rel="noreferrer">
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      {project.liveLabel}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : null}
                  <a href={project.repo} className={linkClass} target="_blank" rel="noreferrer">
                    <GitHubIcon className="h-4 w-4" />
                    View on GitHub
                    <span className="sr-only">: {project.name} (opens in a new tab)</span>
                  </a>
                </div>
              </Card>
            </FadeIn>
          </li>
        ))}
      </ul>
    </Section>
  );
}
