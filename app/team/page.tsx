import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { getTeamIndexPage } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the blueDog Consulting team.",
};

export default async function TeamPage() {
  const page = getTeamIndexPage();
  const contentHtml = await markdownToHtml(page.content);

  return (
    <>
      <section className="gradient-mesh border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div
            className="prose-content max-w-3xl"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </section>

      <Section>
        <p className="text-muted">
          Our founder profile lives on the{" "}
          <Link href="/about" className="text-primary hover:underline">
            About page
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
