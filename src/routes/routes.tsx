import App from "../App";
import About from "./About";
import AccessibilityStatement from "./AccessibilityStatement";
import Contact from "./Contact";
import Home from "./Home";
import Programs from "./Programs";
import SiteMap from "./SiteMap";

const applicationRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      // Public Routes
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "programs",
        element: <Programs />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "sitemap",
        element: <SiteMap />,
      },
      {
        path: "accessibility",
        element: <AccessibilityStatement />,
      },
    ],
  },
];

export default applicationRoutes;
