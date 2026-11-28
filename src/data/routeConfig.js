import { lazy } from "react";

export const pageRoutes = [
  { path: "/", component: lazy(() => import("../pages/Home.jsx")) },
  { path: "/about", component: lazy(() => import("../pages/About.jsx")) },
  { path: "/projects", component: lazy(() => import("../pages/Projects.jsx")) },
  { path: "/skills", component: lazy(() => import("../pages/Skills.jsx")) },
  { path: "/services", component: lazy(() => import("../pages/Services.jsx")) },
  { path: "/contact", component: lazy(() => import("../pages/Contact.jsx")) },
  { path: "/Thankyou", component: lazy(() => import("../pages/ThankYou.jsx")) },
];

export const staticRoutes = pageRoutes.map((route) => route.path);
