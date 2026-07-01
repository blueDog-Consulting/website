import type { Metadata } from "next";
import { ProsePage } from "@/components/layout/ProsePage";
import { getDataSafetyPage } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Data Safety",
  description:
    "How blueDog Consulting LLC protects client and project information.",
};

export default async function DataSafetyPage() {
  const page = getDataSafetyPage();
  const contentHtml = await markdownToHtml(page.content);

  return (
    <ProsePage
      eyebrow="Legal"
      title={page.frontmatter.title ?? "Data Safety"}
      lastUpdated={page.frontmatter.last_updated as string | undefined}
      contentHtml={contentHtml}
    />
  );
}
