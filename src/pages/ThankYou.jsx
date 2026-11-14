import { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";

export default function ThankYou() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Prevent direct access: if not submitted via form, redirect to contact
    if (!location.state?.submitted) {
      navigate("/contact", { replace: true });
    }
  }, [location, navigate]);

  return (
    <>
      <SEO
        title="Thank You | Message Sent"
        path="/thank-system"
        description="Thank you for reaching out. Your message has been received successfully."
      />

      <main id="main" className="container page">
        <Breadcrumbs
          items={[
            { label: "Home", to: "/" },
            { label: "Contact", to: "/contact" },
            { label: "Thank You" }
          ]}
        />

        <p className="eyebrow">SUCCESS</p>
        <h1>Thank you for reaching out!</h1>

        <p className="lead">
          Your message and project details have been successfully submitted. I will review your inquiry and get back to you as soon as possible.
        </p>

        <div style={{ marginTop: "2rem" }}>
          <Link className="button" to="/">
            Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}