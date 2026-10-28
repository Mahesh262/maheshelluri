import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | Portfolio"
        description="The page you requested could not be found."
        path="/404"
      />

      <main id="main" className="container page">
        <p className="eyebrow">404 ERROR</p>
        <h1>Page not found</h1>

        <p>
          The address may be incorrect or the page may have moved.
        </p>

        <Link className="button" to="/">
          Return home
        </Link>
      </main>
    </>
  );
}