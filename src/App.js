import { useRoutes } from "react-router-dom";
import { galaxyRouteConfig } from "./modules/galaxy-travel/routes";
import { routesNavbarResponsiveConfig } from "./modules/navbar-responsive/routes";
import { Home } from "./pages";

const mainRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  ...routesNavbarResponsiveConfig,
  ...galaxyRouteConfig,
]

function App() {
  const element = useRoutes(mainRoutes)

  return element;
}

export default App;
