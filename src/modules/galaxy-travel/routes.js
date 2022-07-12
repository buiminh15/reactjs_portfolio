import Layout from "./components/Layout";
import { Contact, Home, Pricing, Training } from "./pages";

const galaxyRouteConfig = [
  {
    path: "galaxy",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "training",
        element: <Training />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "Pricing",
        element: <Pricing />,
      },
    ],
  },
];

export { galaxyRouteConfig };
