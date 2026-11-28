
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import MobileExperience from "./mobile/MobileExperience.jsx";

import { pageRoutes } from "./data/routeConfig.js";

import "./mobile/bruno-mobile.css";

const ProjectDetail = lazy(() => import("./pages/ProjectDetail.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));
const ThankYou = lazy(() => import("./pages/ThankYou.jsx"));
const MasterLanding = lazy(() => import("./pages/MasterLanding.jsx"));

function DesktopSite() {
  return (
    <div className="desktop-site">
      <Navbar />

      <Suspense
        fallback={
          <div className="page-loading" role="status">
            Loading page...
          </div>
        }
      >
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

          <Route
            path="/thank-you"
            element={<ThankYou />}
          />

          <Route
            path="/digital-marketing-services"
            element={<MasterLanding />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </Suspense>

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
