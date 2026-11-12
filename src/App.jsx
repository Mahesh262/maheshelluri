
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import ProjectDetail from "./pages/ProjectDetail.jsx";
import NotFound from "./pages/NotFound.jsx";
import MobileExperience from "./mobile/MobileExperience.jsx";

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
