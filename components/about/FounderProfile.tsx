import Image from "next/image";
import { Globe } from "lucide-react";
import { Card } from "@/components/ui/Card";
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/icons/BrandIcons";
import type { ContentPage } from "@/lib/content";
import { type ComponentType, type SVGProps } from "react";

interface FounderProfileProps {
  page: ContentPage;
}

export function FounderProfile({ page }: FounderProfileProps) {
  const {
    name,
    image,
    jobtitle,
    linkedinurl,
    twitterhandle,
    websiteurl,
    github,
    description,
  } = page.frontmatter;

  const socialLinks = [
    linkedinurl
      ? { href: linkedinurl, label: "LinkedIn", icon: LinkedInIcon }
      : null,
    twitterhandle
      ? {
          href: `https://twitter.com/${twitterhandle}`,
          label: "X (Twitter)",
          icon: XIcon,
        }
      : null,
    github
      ? {
          href: `https://github.com/${github}`,
          label: "GitHub",
          icon: GitHubIcon,
        }
      : null,
    websiteurl
      ? { href: websiteurl, label: "Website", icon: Globe }
      : null,
  ].filter(Boolean) as Array<{
    href: string;
    label: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
  }>;

  return (
    <Card className="overflow-hidden p-0">
      <div className="grid gap-0 md:grid-cols-[280px_1fr]">
        <div className="relative min-h-[280px] bg-surface-alt">
          {image ? (
            <Image
              src={`/${String(image).replace(/^\//, "")}`}
              alt={`Photo of ${name}`}
              fill
              className="object-cover"
              sizes="280px"
            />
          ) : null}
        </div>
        <div className="p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Founder
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-ink">{name}</h2>
          <p className="mt-1 text-muted">{jobtitle}</p>

          <div className="mt-5 flex flex-wrap gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="inline-flex items-center justify-center rounded-full border border-border p-2 text-ink transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          {description ? (
            <div
              className="prose-content mt-6"
              dangerouslySetInnerHTML={{ __html: String(description) }}
            />
          ) : null}
        </div>
      </div>
    </Card>
  );
}
