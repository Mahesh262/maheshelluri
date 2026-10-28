import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";

const services = [
  {
    number: "01",
    icon: "⌘",
    title: "Technical SEO Audit",
    description:
      "Review crawlability, indexability, redirects, canonical tags, internal links and sitemap coverage.",
    tags: ["Crawling", "Indexing", "Site health"]
  },
  {
    number: "02",
    icon: "⌕",
    title: "Keyword Research",
    description:
      "Discover relevant search terms, evaluate intent and map keywords to suitable pages.",
    tags: ["Search intent", "Competitors", "Keyword mapping"]
  },
  {
    number: "03",
    icon: "▤",
    title: "On-Page SEO",
    description:
      "Improve titles, headings, metadata, content structure and internal linking.",
    tags: ["Metadata", "Content", "Internal links"]
  },
  {
    number: "04",
    icon: "⌖",
    title: "Local SEO",
    description:
      "Review Google Business Profile, local landing pages and location-based search opportunities.",
    tags: ["GBP", "Local pages", "Local keywords"]
  },
  {
    number: "05",
    icon: "↗",
    title: "SEO Reporting",
    description:
      "Analyze clicks, impressions, search queries and landing pages to prioritize next steps.",
    tags: ["GSC", "GA4", "Reporting"]
  },
  {
    number: "06",
    icon: "✦",
    title: "Content Optimization",
    description:
      "Improve content usefulness, topical coverage, readability and alignment with search intent.",
    tags: ["Content quality", "Relevance", "AEO basics"]
  }
];

export default function Services() {
  return (
    <>
      <SEO
        title="SEO Services | Technical, On-Page and Local SEO"
        path="/services"
        description="Explore SEO support including technical audits, keyword research, on-page optimization, local SEO, reporting and content optimization."
      />

      <main id="main" className="services-page">
        <section className="inner-hero">
          <div className="container">
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Services" }
              ]}
            />

            <div className="section-heading services-heading">
              <p className="eyebrow">SEO SUPPORT</p>
              <h1>
                Practical SEO services for{" "}
                <span className="gradient-text">better visibility.</span>
              </h1>
              <p>
                Website analysis, keyword research and actionable
                optimization focused on your website's goals.
              </p>

              <div className="actions centered-actions">
                <Link className="button" to="/contact">
                  Discuss a project <span aria-hidden="true">↗</span>
                </Link>
                <Link className="button outline" to="/projects">
                  View my projects
                </Link>
              </div>
            </div>

            <div className="grid three services-grid">
              {services.map((service) => (
                <article className="modern-card service-card" key={service.number}>
                  <div className="service-card-top">
                    <span className="service-icon" aria-hidden="true">
                      {service.icon}
                    </span>
                    <span className="service-number">{service.number}</span>
                  </div>

                  <h2>{service.title}</h2>
                  <p>{service.description}</p>

                  <div className="service-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container section">
          <div className="services-cta">
            <div className="cta-orb" aria-hidden="true" />
            <div className="cta-content">
              <p className="eyebrow">HAVE AN SEO GOAL?</p>
              <h2>Let's identify your next SEO opportunity.</h2>
              <p>
                Share your website and objectives to start a conversation
                about the work that may help.
              </p>
              <Link className="button cta-button" to="/contact">
                Contact me <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}