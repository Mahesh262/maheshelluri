import { writeFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const siteUrl = "https://maheshelluri-one.vercel.app";

const routes = ["/", "/about", "/projects", "/skills", "/services", "/contact"];

// Generate XML sitemap
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route === "/" ? "" : route}</loc>
  </url>`,
  )
  .join("\n")}
</urlset>`;

// Generate robots.txt
const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

// Ensure dist directory exists
mkdirSync(resolve("dist"), { recursive: true });

// Write both files
writeFileSync(resolve("dist/sitemap.xml"), sitemap, "utf8");
writeFileSync(resolve("dist/robots.txt"), robots, "utf8");

console.log("Sitemap generated successfully.");
console.log("robots.txt generated successfully.");
