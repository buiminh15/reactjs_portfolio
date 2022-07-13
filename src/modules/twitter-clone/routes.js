import React from "react";

const HomeLazy = React.lazy(() => import("./pages/Home"));

const twitterRouteConfig = [
  {
    path: "twitter-clone",
    element: <HomeLazy />,
  },
];

export { twitterRouteConfig };
