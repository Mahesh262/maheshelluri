import SEO from "../components/SEO.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import ContactForm from "../components/ContactForm.jsx";
import site from "../data/site.js";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact | SEO Project Enquiries"
        path="/contact"
        description="Contact me about SEO opportunities, technical SEO audits, local SEO and digital marketing collaborations."
      />

      <main id="main" className="container page">
        <Breadcrumbs
          items={[
            { label: "Home", to: "/" },
            { label: "Contact" }
          ]}
        />

        <p className="eyebrow">GET IN TOUCH</p>
        <h1>Let's talk SEO</h1>

        <p className="lead">
          For SEO roles, freelance support or project collaborations,
          send a message describing your goals.
        </p>

        <div className="contact-grid">
          <article className="card">
            <h2>Contact details</h2>

            <p>
              Email:{" "}
              <a className="link" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>

            <p>
              <a
                className="link"
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn →
              </a>
            </p>
          </article>

          <ContactForm />
        </div>
      </main>
    </>
  );
}