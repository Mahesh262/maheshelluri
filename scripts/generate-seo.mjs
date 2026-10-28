import { writeFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const siteUrl = "https://maheshelluri-one.vercel.app/";

const routes = ["/", "/about", "/projects", "/skills", "/services", "/contact"];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route}</loc>
  </url>`,
  )
  .join("\n")}
</urlset>`;

mkdirSync(resolve("dist"), { recursive: true });
writeFileSync(resolve("dist/sitemap.xml"), sitemap, "utf8");

console.log("Sitemap generated successfully.");
