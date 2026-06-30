import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Section } from "@/components/ui/Section";
import { getContactConfig, getContactPage } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with blueDog Consulting to discuss DevRel, community, and developer experience goals.",
};

export default async function ContactPage() {
  const page = getContactPage();
  const config = getContactConfig();
  const contentHtml = await markdownToHtml(page.content);

  return (
    <>
      <section className="gradient-mesh border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Contact
          </p>
          <h1 className="text-4xl font-semibold text-ink md:text-5xl">
            {page.frontmatter.title ?? "Contact"}
          </h1>
          <div
            className="prose-content mt-6 max-w-2xl"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-2xl">
          <ContactForm config={config} />
        </div>
      </Section>
    </>
  );
}
