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
    <div className="cinema-home">
      <SEO
        title="SEO Services | Technical, On-Page and Local SEO"
        path="/services"
        description="Explore SEO support including technical audits, keyword research, on-page optimization, local SEO, reporting and content optimization."
      />

      <main id="main" className="ch-services-page">
        <section className="ch-expertise-section">
          <div className="ch-section-top ch-animate ch-delay-1">
            <span className="ch-section-number">01</span>
            <span className="ch-section-line" />
            <span className="ch-section-category">SEO SUPPORT & SERVICES</span>
          </div>

          <div className="ch-animate ch-delay-2" style={{ marginBottom: "25px" }}>
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Services" }
              ]}
            />
          </div>

          <div className="ch-expertise-heading ch-animate ch-delay-3">
            <div>
              <p className="ch-red-label">WHAT I OFFER</p>
              <h2>
                Practical SEO services for <br />
                <span>better visibility.</span>
              </h2>
            </div>
            <p className="ch-lead-text">
              Website analysis, keyword research and actionable
              optimization focused on your website's goals.
            </p>
          </div>

          <div className="ch-hero-actions ch-animate ch-delay-3" style={{ maxWidth: "1250px", margin: "0 auto 65px" }}>
            <Link className="ch-button ch-button-primary" to="/contact">
              Discuss a project <span aria-hidden="true">↗</span>
            </Link>
            <Link className="ch-button ch-button-outline" to="/projects">
              View my projects
            </Link>
          </div>

          <div className="ch-expertise-grid ch-animate ch-delay-4">
            {services.map((service, index) => (
              <div
                className="ch-service-item home-reveal home-visible"
                style={{ "--card-index": index + 1 }}
                key={service.number}
              >
                <div className="ch-expertise-card">
                  <div className="ch-card-top">
                    <span className="ch-card-icon">{service.icon}</span>
                    <span style={{ color: "#777", fontWeight: "800" }}>{service.number}</span>
                  </div>

                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>

                  <div className="ch-service-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="ch-cta-section">
          <div className="ch-cta-background">
            <span>GOAL</span>
          </div>
          <div className="ch-cta-content">
            <p className="ch-red-label">HAVE AN SEO GOAL?</p>
            <h2>
              Let's identify your <br />
              <span>next SEO opportunity.</span>
            </h2>
            <p>
              Share your website and objectives to start a conversation
              about the work that may help.
            </p>
            <div className="ch-hero-actions" style={{ marginTop: "35px" }}>
              <Link className="ch-button ch-button-primary" to="/contact">
                Contact me <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}