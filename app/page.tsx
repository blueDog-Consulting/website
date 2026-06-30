import { Hero } from "@/components/home/Hero";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { TrustStrip } from "@/components/home/TrustStrip";
import { getFeaturedServices, getHomePage } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";
import { siteConfig } from "@/lib/site-config";

export default async function HomePage() {
  const page = getHomePage();
  const contentHtml = await markdownToHtml(page.content);
  const featuredServices = getFeaturedServices();

  return (
    <>
      <Hero contentHtml={contentHtml} />
      {siteConfig.homepage.showFeatures ? <TrustStrip /> : null}
      <FeaturedServices services={featuredServices} />
    </>
  );
}
