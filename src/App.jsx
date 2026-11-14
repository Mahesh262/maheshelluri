import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import ProjectDetail from "./pages/ProjectDetail.jsx";
import NotFound from "./pages/NotFound.jsx";
import MobileExperience from "./mobile/MobileExperience.jsx";
import ThankYou from "./pages/ThankYou.jsx";
import MasterLanding from "./pages/MasterLanding.jsx"; // Imported your master ad landing page
import { pageRoutes } from "./data/routeConfig.js";

import "./mobile/bruno-mobile.css";

function DesktopSite() {
  return (
    <div className="desktop-site">
      <Navbar />

      <Routes>
        {pageRoutes.map(({ path, component: Page }) => (
          <Route
            key={path}
            path={path}
            element={<Page />}
          />
        ))}

        <Route
          path="/projects/:slug"
          element={<ProjectDetail />}
        />

        {/* Protected Thank You Page for Ad Conversions */}
        <Route path="/thank-you" element={<ThankYou />} /> 

        {/* Master Dynamic Ad Landing Page */}
        <Route path="/digital-marketing-services" element={<MasterLanding />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <>
      <DesktopSite />
      <MobileExperience />
    </>
  );
}