import site from "../data/site.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>

        <div>
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          {" · "}
          <a href={site.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {" · "}
          <a href="/resume.pdf">Resume PDF</a>
        </div>
      </div>
    </footer>
  );
}