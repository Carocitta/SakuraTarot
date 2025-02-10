import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Historial from "../pages/Historial";
import PickACard from "../pages/PickACard";
import Reading from "../pages/Reading";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pick-a-card" element={<PickACard />} />
        <Route path="/Historial" element={<Historial />} />
        <Route path="/reading" element={<Reading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
