import React from "react";
import Layout from "./components/Layout";
import { Contact, Home, Pricing, Training } from "./pages";

const HomeLazy = React.lazy(() => import('./pages/Home'))
const TrainingLazy = React.lazy(() => import('./pages/Training'))
const ContactLazy = React.lazy(() => import('./pages/Contact'))
const PricingLazy = React.lazy(() => import('./pages/Pricing'))

const galaxyRouteConfig = [
  {
    path: "galaxy",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomeLazy />,
      },
      {
        path: "training",
        element: <TrainingLazy />,
      },
      {
        path: "contact",
        element: <ContactLazy />,
      },
      {
        path: "Pricing",
        element: <PricingLazy />,
      },
    ],
  },
];

export { galaxyRouteConfig };
