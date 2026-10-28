import { useState } from "react";
import { NavLink } from "react-router-dom";
import site from "../data/site.js";
import ResumeButton from "./ResumeButton.jsx";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/projects", "Projects"],
  ["/skills", "Skills"],
  ["/services", "Services"],
  ["/contact", "Contact"]
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <nav className="container navbar" aria-label="Main navigation">
        <NavLink
          className="brand"
          to="/"
          aria-label="Go to homepage"
          onClick={closeMenu}
        >
          <span className="brand-mark" aria-hidden="true">
            EM
          </span>

          <span className="brand-copy">
            <strong>{site.name}</strong>
            <small>SEO Executive &amp; Digital Marketer</small>
          </span>
        </NavLink>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id="mobile-navigation"
          className={`nav-links${menuOpen ? " nav-links-open" : ""}`}
        >
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}

          <ResumeButton className="nav-resume" />
        </div>
      </nav>
    </header>
  );
}
