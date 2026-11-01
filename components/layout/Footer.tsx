import Link from "next/link";
import { GitHubIcon, XIcon } from "@/components/icons/BrandIcons";
import { footerNav, legalNav, siteConfig, socialLinks } from "@/lib/site-config";

function SocialIcon({ name }: { name: string }) {
  if (name.toLowerCase() === "github") {
    return <GitHubIcon className="h-5 w-5" />;
  }

  return <XIcon className="h-5 w-5" />;
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-alt text-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="text-lg font-semibold">{siteConfig.name}</p>
          <p className="mt-3 text-sm text-muted">{siteConfig.description}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid gap-2 sm:grid-cols-2">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted underline-offset-4 hover:text-primary hover:underline"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`${item.name} (opens in a new tab)`}
              className="rounded-full border border-border bg-white p-2.5 text-ink transition-colors hover:border-primary hover:text-primary"
            >
              <SocialIcon name={item.name} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-sm text-muted sm:px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            Copyright © {year}{" "}
            <a href={siteConfig.url} className="hover:text-primary hover:underline">
              blueDog Consulting LLC
            </a>
            . All rights reserved.
          </p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-primary hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
