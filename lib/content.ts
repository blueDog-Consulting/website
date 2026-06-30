import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { load } from "js-yaml";
import { siteConfig } from "@/lib/site-config";
import { truncateText } from "@/lib/markdown";

const contentDirectory = path.join(process.cwd(), "content");
const dataDirectory = path.join(process.cwd(), "data");

export interface PageFrontmatter {
  title?: string;
  description?: string;
  meta_title?: string;
  draft?: boolean;
  layout?: string;
  intro_image?: string;
  intro_image_alt?: string;
  name?: string;
  image?: string;
  jobtitle?: string;
  linkedinurl?: string;
  twitterhandle?: string;
  websiteurl?: string;
  github?: string;
  description_field?: string;
  [key: string]: unknown;
}

export interface ContentPage {
  slug: string;
  frontmatter: PageFrontmatter;
  content: string;
}

export interface ServicePage extends ContentPage {
  featured: boolean;
  weight: number;
  summary: string;
}

export interface ContactField {
  name: string;
  input_type: string;
  placeholder: string;
  required?: boolean | string;
}

export interface ContactConfig {
  action: string;
  placeholders: boolean;
  fields: ContactField[];
}

function readMarkdownFile(filePath: string, slug: string): ContentPage {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    slug,
    frontmatter: data as PageFrontmatter,
    content,
  };
}

export function getHomePage(): ContentPage {
  return readMarkdownFile(path.join(contentDirectory, "_index.md"), "home");
}

export function getAboutPage(): ContentPage {
  return readMarkdownFile(path.join(contentDirectory, "about.md"), "about");
}

export function getContactPage(): ContentPage {
  return readMarkdownFile(path.join(contentDirectory, "contact.md"), "contact");
}

export function getServicesIndexPage(): ContentPage {
  return readMarkdownFile(
    path.join(contentDirectory, "services", "_index.md"),
    "services"
  );
}

export function getTeamIndexPage(): ContentPage {
  return readMarkdownFile(
    path.join(contentDirectory, "team", "_index.md"),
    "team"
  );
}

export function getNotFoundPage(): ContentPage {
  return readMarkdownFile(
    path.join(contentDirectory, "404", "_index.md"),
    "404"
  );
}

function getServiceSummary(content: string): string {
  const withoutMore = content.split("<!--more-->")[0];
  return truncateText(withoutMore, siteConfig.services.summaryTruncate);
}

export function getAllServices(): ServicePage[] {
  const servicesDir = path.join(contentDirectory, "services");
  const files = fs
    .readdirSync(servicesDir)
    .filter((file) => file.endsWith(".md") && file !== "_index.md");

  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const page = readMarkdownFile(path.join(servicesDir, file), slug);
      const featured = Boolean(page.frontmatter.featured);
      const weight = Number(page.frontmatter.weight ?? 100);
      return {
        ...page,
        featured,
        weight,
        summary: getServiceSummary(page.content),
      };
    })
    .sort((a, b) => a.weight - b.weight);
}

export function getServiceBySlug(slug: string): ServicePage | null {
  const services = getAllServices();
  return services.find((service) => service.slug === slug) ?? null;
}

export function getFeaturedServices(limit = 6): ServicePage[] {
  return getAllServices()
    .filter((service) => service.featured)
    .slice(0, limit);
}

export function getContactConfig(): ContactConfig {
  const fileContents = fs.readFileSync(
    path.join(dataDirectory, "contact.yaml"),
    "utf8"
  );
  return load(fileContents) as ContactConfig;
}
