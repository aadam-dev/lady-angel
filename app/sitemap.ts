import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ladyangelnetwork.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/network",
    "/about",
    "/membership",
    "/angel-model",
    "/investments",
    "/impact",
    "/legal/privacy",
    "/legal/terms",
    "/legal/disclaimer",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/legal") ? "yearly" : "monthly",
    priority: route === "/network" ? 1 : 0.7,
  }));
}
