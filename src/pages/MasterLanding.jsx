
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import ContactForm from "../components/ContactForm.jsx";
import "./MasterLanding.css";


const serviceContent = {
  seo: {
    headline: "Turn Google Search Into a Consistent Source of Leads",
    highlight: "Consistent Source of Leads",
    description:
      "Improve your organic visibility, attract relevant visitors, and build sustainable growth through strategic SEO.",
    service: "SEO",
    eyebrow: "SEO & ORGANIC GROWTH",
  },
  "google-ads": {
    headline: "Reach High-Intent Customers With Smarter Google Ads",
    highlight: "Smarter Google Ads",
    description:
      "Connect with people actively searching for your services through targeted campaigns, better keyword selection, and conversion tracking.",
    service: "Google Ads",
    eyebrow: "GOOGLE ADS MANAGEMENT",
  },
  "meta-ads": {
    headline: "Turn Social Media Attention Into Qualified Business Leads",
    highlight: "Qualified Business Leads",
    description:
      "Build effective Facebook and Instagram advertising campaigns with engaging creatives, audience targeting, and conversion-focused landing pages.",
    service: "Meta Ads",
    eyebrow: "FACEBOOK & INSTAGRAM ADS",
  },
};

const services = [
  {
    number: "01",
    icon: "↗",
    title: "SEO & Organic Growth",
    description:
      "Build long-term search visibility through technical SEO, keyword research, on-page optimization, content strategy, and authority building.",
    points: ["Technical SEO", "Keyword Strategy", "Local SEO"],
    value: "SEO",
    slug: "seo",
  },
  {
    number: "02",
    icon: "◎",
    title: "Google Ads Management",
    description:
      "Reach customers with high purchase intent through structured search campaigns, keyword targeting, and conversion optimization.",
    points: [
      "Search Campaigns",
      "Keyword Optimization",
      "Conversion Tracking",
    ],
    value: "Google Ads",
    slug: "google-ads",
  },
  {
    number: "03",
    icon: "✳",
    title: "Meta Ads Campaigns",
    description:
      "Generate awareness and leads using Facebook and Instagram campaigns, audience targeting, and creative testing.",
    points: ["Facebook Ads", "Instagram Ads", "Creative Strategy"],
    value: "Meta Ads",
    slug: "meta-ads",
  },
];

const benefits = [
  {
    number: "01",
    title: "Strategy Before Execution",
    description:
      "Every campaign starts with understanding your business, target audience, objectives, and competition.",
  },
  {
    number: "02",
    title: "Focus on Meaningful Results",
    description:
      "We focus on relevant traffic, qualified enquiries, conversion performance, and business objectives rather than vanity metrics.",
  },
  {
    number: "03",
    title: "Data-Driven Decisions",
    description:
      "Use analytics, campaign insights, and conversion tracking to identify opportunities and improve performance.",
  },
  {
    number: "04",
    title: "Transparent Communication",
    description:
      "Understand the work being performed, the strategy behind it, and the progress made through clear reporting.",
  },
];

const steps = [
  {
    number: "01",
    title: "Understand Your Business",
    description:
      "We learn about your services, audience, goals, and current marketing challenges.",
  },
  {
    number: "02",
    title: "Build Your Strategy",
    description:
      "We identify opportunities and recommend the right marketing approach for your objectives.",
  },
  {
    number: "03",
    title: "Launch & Optimize",
    description:
      "Campaigns and SEO activities are implemented, monitored, and refined using performance data.",
  },
  {
    number: "04",
    title: "Measure & Improve",
    description:
      "Review performance, understand results, and identify the next growth opportunities.",
  },
];

const faqs = [
  {
    question: "Which digital marketing services do you provide?",
    answer:
      "We provide SEO, Google Ads, and Meta Ads services. The right combination depends on your business objectives, audience, and marketing requirements.",
  },
  {
    question: "How soon can I expect results?",
    answer:
      "Paid advertising can start generating traffic after campaigns are approved and launched. Lead quality and conversions depend on your offer, targeting, landing page, and budget. SEO generally requires several months of consistent work to show meaningful organic growth.",
  },
  {
    question: "Do you provide customized marketing strategies?",
    answer:
      "Yes. Strategies are based on your business, industry, competitors, audience, and objectives rather than using the same approach for every client.",
  },
  {
    question: "Do I need a website to run digital marketing campaigns?",
    answer:
      "A website or dedicated landing page is recommended for most lead-generation campaigns. The right destination depends on your campaign objective and conversion process.",
  },
  {
    question: "How can I get started?",
    answer:
      "Complete the enquiry form with your contact details and preferred service. We can then understand your requirements and discuss the next steps.",
  },
];

export default function MasterLanding() {
  const [searchParams] = useSearchParams();

  const adServiceParam = searchParams.get("service")?.toLowerCase();
  const selectedContent = serviceContent[adServiceParam];

  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("ml-theme");
      return savedTheme === "dark" ? "dark" : "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("ml-theme", theme);
    } catch {
      // The selected theme still works for this session.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) =>
      current === "light" ? "dark" : "light"
    );
  };

  const headline =
    selectedContent?.headline ||
    "Build a Stronger Digital Presence. Generate More Business Opportunities.";

  const highlight =
    selectedContent?.highlight ||
    "Generate More Business Opportunities.";

  const highlightIndex = headline.indexOf(highlight);

  const defaultService = selectedContent?.service || "SEO";

  const description =
    selectedContent?.description ||
    "Grow your business with strategic SEO, Google Ads, and Meta Ads. Reach the right audience, attract relevant traffic, and turn more opportunities into enquiries.";

  const eyebrow =
    selectedContent?.eyebrow ||
    "DIGITAL MARKETING THAT MOVES BUSINESS FORWARD";

  return (
    <>
      <SEO
        title="Digital Marketing Services | SEO, Google Ads & Meta Ads"
        path="/digital-marketing-services"
        description="Grow your business with SEO, Google Ads, and Meta Ads. Explore strategic digital marketing solutions focused on visibility, leads, and conversions."
      />

      <main
        id="main"
        className="container page master-landing-container"
        data-theme={theme}
      >

        {/* THEME SWITCH */}

        <div className="ml-theme-toolbar">
          <button
            type="button"
            className="ml-theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          >
            <span aria-hidden="true">
              {theme === "light" ? "☾" : "☀"}
            </span>

            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>

        {/* HERO SECTION */}

        <section className="ml-hero">

          <div className="ml-hero-content">

            <span className="ml-eyebrow">
              <span className="ml-eyebrow-dot"></span>
              {eyebrow}
            </span>

            <h1 className="ml-hero-title">
              {highlightIndex >= 0 ? (
                <>
                  {headline.slice(0, highlightIndex)}
                  <span>
                    {highlight}
                  </span>
                  {headline.slice(highlightIndex + highlight.length)}
                </>
              ) : (
                headline
              )}
            </h1>

            <p className="ml-hero-description">
              {description}
            </p>

            <div className="ml-hero-benefits">
              <div>
                <span>✓</span>
                Customized Strategy
              </div>

              <div>
                <span>✓</span>
                Performance Tracking
              </div>

              <div>
                <span>✓</span>
                Transparent Reporting
              </div>

              <div>
                <span>✓</span>
                Conversion-Focused Approach
              </div>
            </div>

            <a href="#ml-services" className="ml-secondary-link">
              Explore Our Services <span>→</span>
            </a>

          </div>

          {/* CONTACT FORM */}

          <section
            id="contact-form-section"
            className="ml-form-wrapper"
          >

            <div className="ml-form-heading">

              <span className="ml-form-tag">
                LET'S TALK BUSINESS
              </span>

              <h2>
                Get Your Free Marketing Consultation
              </h2>

              <p>
                Tell us about your business. Let's explore the right growth
                opportunities for you.
              </p>

            </div>

            <ContactForm initialService={defaultService} />

            <div className="ml-form-assurance">
              <span>🔒</span>
              Your information is kept private.
            </div>

          </section>

        </section>

        {/* TRUST STRIP */}

        <section className="ml-trust-strip">

          <div>
            <span className="ml-trust-icon">◎</span>

            <div>
              <h3>Business-Focused</h3>
              <p>Strategies built around your objectives</p>
            </div>
          </div>

          <div>
            <span className="ml-trust-icon">↗</span>

            <div>
              <h3>Data-Informed</h3>
              <p>Decisions guided by performance insights</p>
            </div>
          </div>

          <div>
            <span className="ml-trust-icon">⌁</span>

            <div>
              <h3>Conversion-Focused</h3>
              <p>Designed to support meaningful enquiries</p>
            </div>
          </div>

        </section>

        {/* SERVICES */}

        <section className="ml-section" id="ml-services">

          <div className="ml-section-heading">

            <span className="ml-section-label">
              WHAT WE DO
            </span>

            <h2>
              Digital Marketing Services That Support Your Growth
            </h2>

            <p>
              Choose the right marketing channel to reach your audience and
              build stronger business opportunities.
            </p>

          </div>

          <div className="ml-services-grid">

            {services.map((service) => (
              <article
                className="ml-service-card"
                key={service.number}
              >

                <div className="ml-service-top">
                  <span className="ml-service-icon">
                    {service.icon}
                  </span>

                  <span className="ml-service-number">
                    {service.number}
                  </span>
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <ul>
                  {service.points.map((point) => (
                    <li key={point}>
                      <span>✓</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <a
                  href={`?service=${service.slug}#contact-form-section`}
                  className="ml-service-link"
                >
                  Discuss This Service <span>→</span>
                </a>

              </article>
            ))}

          </div>

        </section>

        {/* WHY CHOOSE US */}

        <section className="ml-why-section">

          <div className="ml-why-intro">

            <span className="ml-section-label">
              WHY WORK WITH US
            </span>

            <h2>
              A Smarter Approach to Digital Marketing
            </h2>

            <p>
              Effective marketing is more than launching campaigns. It
              requires the right strategy, consistent optimization, and
              understanding what drives your business forward.
            </p>

            <a
              href="#contact-form-section"
              className="ml-primary-link"
            >
              Discuss Your Requirements <span>→</span>
            </a>

          </div>

          <div className="ml-benefits-grid">

            {benefits.map((benefit) => (
              <article
                className="ml-benefit-card"
                key={benefit.number}
              >

                <span>{benefit.number}</span>

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>

              </article>
            ))}

          </div>

        </section>

        {/* PROCESS */}

        <section className="ml-section ml-process-section">

          <div className="ml-section-heading">

            <span className="ml-section-label">
              HOW WE WORK
            </span>

            <h2>
              From First Conversation to Continuous Improvement
            </h2>

            <p>
              A straightforward process designed around your business goals.
            </p>

          </div>

          <div className="ml-process-grid">

            {steps.map((step) => (
              <article
                className="ml-process-card"
                key={step.number}
              >

                <span className="ml-process-number">
                  {step.number}
                </span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </article>
            ))}

          </div>

        </section>

        {/* FAQ */}

        <section className="ml-faq-section">

          <div className="ml-section-heading">

            <span className="ml-section-label">
              GOT QUESTIONS?
            </span>

            <h2>
              Frequently Asked Questions
            </h2>

            <p>
              Some useful answers before getting started.
            </p>

          </div>

          <div className="ml-faq-list">

            {faqs.map((faq) => (
              <details
                className="ml-faq-item"
                key={faq.question}
              >

                <summary>
                  <span>{faq.question}</span>
                  <span className="ml-faq-toggle">+</span>
                </summary>

                <p>{faq.answer}</p>

              </details>
            ))}

          </div>

        </section>

        {/* FINAL CTA */}

        <section className="ml-final-cta">

          <div>

            <span className="ml-section-label">
              READY TO GET STARTED?
            </span>

            <h2>
              Let's Find the Right Digital Marketing Strategy for Your Business.
            </h2>

            <p>
              Share your requirements and start a conversation about your
              business growth opportunities.
            </p>

          </div>

          <a
            href="#contact-form-section"
            className="ml-cta-button"
          >
            Get a Free Consultation <span>→</span>
          </a>

        </section>

      </main>
    </>
  );
}
