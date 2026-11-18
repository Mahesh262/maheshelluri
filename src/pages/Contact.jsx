import SEO from "../components/SEO.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import ContactForm from "../components/ContactForm.jsx";
import site from "../data/site.js";

export default function Contact() {
  return (
    <div className="cinema-home">
      <SEO
        title="Contact | SEO Project Enquiries"
        path="/contact"
        description="Contact me about SEO opportunities, technical SEO audits, local SEO and digital marketing collaborations."
      />

      <main id="main" className="ch-contact-page">
        <section className="ch-expertise-section">
          
          <div className="ch-section-top ch-animate ch-delay-1">
            <span className="ch-section-number">01</span>
            <span className="ch-section-line" />
            <span className="ch-section-category">GET IN TOUCH</span>
          </div>

          <div className="ch-animate ch-delay-2" style={{ marginBottom: "25px" }}>
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Contact" }
              ]}
            />
          </div>

          <div className="ch-expertise-heading ch-animate ch-delay-3">
            <div>
              <p className="ch-red-label">START A CONVERSATION</p>
              <h2>
                Let's talk <br />
                <span>SEO.</span>
              </h2>
            </div>
            <p className="ch-lead-text">
              For SEO roles, freelance support or project
              collaborations, send a message describing your goals.
              Let's discuss how we can grow your digital presence.
            </p>
          </div>

          {/* CONTACT LAYOUT CONTAINER */}
          <div className="ch-contact-layout ch-animate ch-delay-4">

            {/* LEFT INFO CARD */}
            <article className="ch-contact-info-card">
              <div>
                <span className="ch-red-label" style={{ margin: 0 }}>DIRECT INFO</span>
                <h2>Let's start a conversation.</h2>
                <p style={{ color: "#aaa", fontSize: "14px", lineHeight: "1.8", marginTop: "12px" }}>
                  Have a project in mind, need SEO support, or looking
                  for a digital marketing collaboration? I'd love to
                  hear from you.
                </p>
              </div>

              <div>
                <div className="ch-contact-info-item">
                  <span className="ch-contact-info-label">EMAIL ADDRESS</span>
                  <a className="ch-contact-link" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </div>

                <div className="ch-contact-info-item">
                  <span className="ch-contact-info-label">PROFESSIONAL NETWORK</span>
                  <a className="ch-contact-link" href={site.linkedin} target="_blank" rel="noreferrer">
                    Connect on LinkedIn ↗
                  </a>
                </div>

                <div className="ch-contact-info-footer">
                  Open to SEO projects, freelance work and professional collaborations.
                </div>
              </div>
            </article>

            {/* PURE CSS CINEMATIC PAPER-CUT DIVIDER INSTEAD OF IMAGE */}
            <div className="ch-paper-cut-divider" aria-hidden="true" />

            {/* RIGHT FORM CARD */}
            <section className="ch-contact-form-card">
              <div className="contact-form-heading">
                <p className="ch-red-label">SEND AN ENQUIRY</p>
                <h2>Tell me about your project</h2>
                <p style={{ color: "#999", fontSize: "13px", marginTop: "6px" }}>
                  Fill in the details below and I'll get back to you promptly.
                </p>
              </div>

              <ContactForm />
            </section>

          </div>
        </section>
      </main>
    </div>
  );
}