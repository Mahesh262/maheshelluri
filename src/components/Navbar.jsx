
import { useState } from "react";
import { NavLink } from "react-router-dom";
import site from "../data/site.js";
import ResumeButton from "./ResumeButton.jsx";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/projects", "Projects"],
  ["/skills", "Expertise"],
  ["/services", "Services"],
  ["/contact", "Contact"]
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="cinema-header">
      <nav className="cinema-navbar" aria-label="Main navigation">

        {/* BRAND */}

        <NavLink
          to="/"
          className="cinema-brand"
          aria-label="Go to homepage"
          onClick={closeMenu}
        >
          <span className="cinema-brand-mark">EM</span>

          <span className="cinema-brand-copy">
            <strong>{site.name}</strong>
            <small>SEO & DIGITAL GROWTH</small>
          </span>
        </NavLink>

        {/* DESKTOP LINKS */}

        <div className="cinema-desktop-links">
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* MENU BUTTON */}

        <button
          type="button"
          className={`cinema-menu-toggle ${
            menuOpen ? "is-open" : ""
          }`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="cinema-overlay"
        >
          <span />
          <span />
        </button>

      </nav>

      {/* FULLSCREEN MENU */}

      <div
        id="cinema-overlay"
        className={`cinema-overlay ${
          menuOpen ? "cinema-overlay-open" : ""
        }`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="cinema-overlay-inner">

          <p className="cinema-menu-label">
            NAVIGATION / EXPLORE
          </p>

          <div className="cinema-overlay-links">
            {links.map(([to, label], index) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={closeMenu}
              >
                <span className="cinema-link-number">
                  0{index + 1}
                </span>

                <span>{label}</span>

                <span className="cinema-link-arrow">↗</span>
              </NavLink>
            ))}
          </div>

          <div className="cinema-overlay-bottom">
            <div>
              <span>LET'S CONNECT</span>
              <a href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>

            <ResumeButton className="nav-resume" />
          </div>

        </div>
      </div>
    </header>
  );
}
