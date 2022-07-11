import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, NavbarResponsivePage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="navbar-responsive" element={<NavbarResponsivePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
