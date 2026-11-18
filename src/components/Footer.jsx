
import site from "../data/site.js";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="cinema-footer">

      <div className="cinema-footer-main">

        <div className="cinema-footer-brand">
          <span>EM.</span>
          <h2>LET'S BUILD<br />SOMETHING GREAT.</h2>

          <a href={`mailto:${site.email}`}>
            START A CONVERSATION ↗
          </a>
        </div>

        <div className="cinema-footer-links">
          <div>
            <span className="cinema-footer-label">EXPLORE</span>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/skills">Expertise</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div>
            <span className="cinema-footer-label">CONNECT</span>

            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>

            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>

            <a href="/resume.pdf">
              Resume PDF ↗
            </a>
          </div>
        </div>

      </div>

      <div className="cinema-footer-bottom">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>

        <span>DESIGNED WITH PURPOSE.</span>

        <a href="#main">BACK TO TOP ↑</a>
      </div>

    </footer>
  );
}
