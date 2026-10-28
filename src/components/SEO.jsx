import { Helmet } from "react-helmet-async";
import site from "../data/site.js";

export default function SEO({
  title,
  description = site.description,
  path = "/",
  type = "website",
  jsonLd
}) {
  const baseUrl = site.url.replace(/\/$/, "");
  const canonical = baseUrl + path;

  const schema = jsonLd || {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: canonical,
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.url
    }
  };

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta
        name="robots"
        content="index,follow,max-image-preview:large"
      />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta
        property="og:image"
        content={`${baseUrl}/og-image.jpg`}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}