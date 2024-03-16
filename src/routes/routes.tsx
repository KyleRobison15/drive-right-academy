import App from "../App";
import About from "./About";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Glossary from "./Glossary";
import Home from "./Home";
import Programs from "./Programs";
import Schedule from "./Schedule";

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
        path: "schedule",
        element: <Schedule />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "frequently-asked-questions",
        element: <FAQ />,
      },
      {
        path: "glossary",
        element: <Glossary />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
];

export default applicationRoutes;
