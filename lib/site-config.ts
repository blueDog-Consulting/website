import featureItems from "@/data/features.json";
import social from "@/data/social.json";

export const siteConfig = {
  name: "blueDog Consulting LLC",
  url: "https://bluedog.dev",
  description:
    "blueDog Consulting is a DevRel and Community consultancy helping companies build solid developer relations programs and improve developer experience.",
  colors: {
    primary: "#0396FF",
    black: "#2f2f41",
    white: "#ffffff",
    whiteOffset: "#f6f7ff",
    grey: "#5C5A5A",
  },
  logo: {
    src: "/images/logo/logo.png",
    alt: "logo for blueDog Consulting LLC",
    height: 40,
  },
  seo: {
    twitterSite: "@Consult_blueDog",
    twitterCreator: "@Consult_blueDog",
    ogImage: "/images/social/og-image.jpg",
  },
  homepage: {
    showContactBox: true,
    showServicesButton: true,
    showFeatures: true,
  },
  services: {
    summaryTruncate: 300,
  },
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "G-VLW2VPS7H5",
} as const;

export const mainNav = [
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
] as const;

export const footerNav = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
] as const;

export const features = featureItems as Array<{
  title: string;
  description: string;
}>;

export const socialLinks = social as Array<{
  name: string;
  link: string;
}>;

export const trustStats = [
  {
    value: "30+",
    label: "Years in professional IT",
  },
  {
    value: "12+",
    label: "Years in DevRel & Community",
  },
  {
    value: "Free",
    label: "Initial consultation",
  },
] as const;
