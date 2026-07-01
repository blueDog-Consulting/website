import type { Metadata } from "next";
import { ProsePage } from "@/components/layout/ProsePage";
import { getPrivacyPage } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How blueDog Consulting LLC collects, uses, and protects information on bluedog.dev.",
};

export default async function PrivacyPage() {
  const page = getPrivacyPage();
  const contentHtml = await markdownToHtml(page.content);

  return (
    <ProsePage
      eyebrow="Legal"
      title={page.frontmatter.title ?? "Privacy Policy"}
      lastUpdated={page.frontmatter.last_updated as string | undefined}
      contentHtml={contentHtml}
    />
  );
}
