import App from "../App";
import About from "./About";
import Contact from "./Contact";
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
        scrollTo: "top",
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
        path: "contact",
        element: <Contact />,
      },
    ],
  },
];

export default applicationRoutes;
