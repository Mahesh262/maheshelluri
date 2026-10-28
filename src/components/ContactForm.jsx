import { useState } from "react";
import site from "../data/site.js";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href =
      `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        autoComplete="name"
        required
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        rows="5"
        required
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />

      <button className="button" type="submit">
        Open email to send
      </button>

      <small>
        Your email application must be configured to send the message.
      </small>
    </form>
  );
}