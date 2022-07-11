import Layout from "./components/Layout";
import Home from "./pages/Home";

const galaxyRouteConfig = [
  {
    path: 'galaxy',
    element: <Layout />,
    children: [{
      path: '',
      element: <Home />
    }]
  }
];

export { galaxyRouteConfig };
