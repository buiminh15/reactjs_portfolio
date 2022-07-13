import { useRoutes } from "react-router-dom";
import { galaxyRouteConfig } from "./modules/galaxy-travel/routes";
import { routesNavbarResponsiveConfig } from "./modules/navbar-responsive/routes";
import { twitterRouteConfig } from "./modules/twitter-clone/routes";
import { Home } from "./pages";

const mainRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  ...routesNavbarResponsiveConfig,
  ...galaxyRouteConfig,
  ...twitterRouteConfig,
]

function App() {
  const element = useRoutes(mainRoutes)

  return element;
}

export default App;
