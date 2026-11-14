
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function ContactForm({ initialService = "SEO" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [service, setService] = useState(initialService);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    if (isLoading) return;

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert([
          {
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim(),
            website: website.trim() || null,
            service,
          },
        ]);

      if (error) throw error;

      navigate("/thank-you", {
        state: { submitted: true },
      });

    } catch (error) {
      console.error("Error submitting form:", error);

      alert(
        "Unable to submit your enquiry. Please try again or contact us directly."
      );

      setIsLoading(false);
    }
  }

  return (
    <form
      className="ml-contact-form"
      onSubmit={handleSubmit}
    >

      {/* NAME */}

      <div className="ml-field">
        <label htmlFor="ml-name">
          Full Name <span>*</span>
        </label>

        <input
          id="ml-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          minLength={2}
          maxLength={100}
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your full name"
        />
      </div>

      {/* EMAIL AND PHONE */}

      <div className="ml-form-row">

        <div className="ml-field">
          <label htmlFor="ml-email">
            Email Address <span>*</span>
          </label>

          <input
            id="ml-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
          />
        </div>

        <div className="ml-field">
          <label htmlFor="ml-phone">
            Phone Number <span>*</span>
          </label>

          <input
            id="ml-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            minLength={7}
            maxLength={20}
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="+91 98765 43210"
          />
        </div>

      </div>

      {/* WEBSITE AND SERVICE */}

      <div className="ml-form-row">

        <div className="ml-field">
          <label htmlFor="ml-website">
            Website <span className="ml-optional">(Optional)</span>
          </label>

          <input
            id="ml-website"
            name="website"
            type="url"
            maxLength={2048}
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            placeholder="https://yourwebsite.com"
          />
        </div>

        <div className="ml-field">
          <label htmlFor="ml-service">
            Interested Service <span>*</span>
          </label>

          <select
            id="ml-service"
            name="service"
            required
            value={service}
            onChange={(event) => setService(event.target.value)}
          >
            <option value="SEO">SEO & Organic Growth</option>
            <option value="Google Ads">Google Ads</option>
            <option value="Meta Ads">Meta Ads</option>
            <option value="All Services">Full Digital Marketing</option>
          </select>
        </div>

      </div>

      {/* SUBMIT */}

      <button
        type="submit"
        className="ml-submit-button"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <span className="ml-button-spinner"></span>
            Submitting...
          </>
        ) : (
          <>
            Get My Free Consultation
            <span>→</span>
          </>
        )}
      </button>

      <p className="ml-form-note">
        No obligation. Share your requirements and start a conversation.
      </p>

    </form>
  );
}
