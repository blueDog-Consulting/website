import { Capabilities } from "@/components/home/Capabilities";
import { Cta } from "@/components/home/Cta";
import { Hero } from "@/components/home/Hero";
import { Projects } from "@/components/home/Projects";
import { TrustStrip } from "@/components/home/TrustStrip";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Projects />
      {siteConfig.homepage.showFeatures ? <TrustStrip /> : null}
      <Cta />
    </>
  );
}
