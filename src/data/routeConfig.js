import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Projects from "../pages/Projects.jsx";
import Skills from "../pages/Skills.jsx";
import Services from "../pages/Services.jsx";
import Contact from "../pages/Contact.jsx";
import ThankYou from "../pages/ThankYou.jsx";

export const pageRoutes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/projects", component: Projects },
  { path: "/skills", component: Skills },
  { path: "/services", component: Services },
  { path: "/contact", component: Contact },
  { path: "/Thankyou", component: ThankYou },
];

export const staticRoutes = pageRoutes.map((route) => route.path);
