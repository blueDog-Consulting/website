import type { Metadata } from "next";
import { FounderProfile } from "@/components/about/FounderProfile";
import { Section } from "@/components/ui/Section";
import { getAboutPage } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about blueDog Consulting and founder Jeremy Meiss, a DevRel and community leader with decades of experience.",
};

export default async function AboutPage() {
  const page = getAboutPage();
  const contentHtml = await markdownToHtml(page.content);
  const bioHtml = page.frontmatter.description
    ? await markdownToHtml(String(page.frontmatter.description))
    : "";

  return (
    <>
      <section className="gradient-mesh border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            About
          </p>
          <h1 className="text-4xl font-semibold text-ink md:text-5xl">
            {page.frontmatter.title ?? "About Us"}
          </h1>
          <div
            className="prose-content mt-6 max-w-3xl"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </section>

      <Section>
        <FounderProfile
          page={{
            ...page,
            frontmatter: {
              ...page.frontmatter,
              description: bioHtml,
            },
          }}
        />
      </Section>
    </>
  );
}
