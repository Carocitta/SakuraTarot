import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import PickACard from "../pages/PickACard";
import ReadingPage from "../pages/ReadingPage/ReadingPage";
import Historial from "../pages/HistorialPage/Historial"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pick-a-card" element={<PickACard />} />
        <Route path="/Reading" element={<ReadingPage />} />
        <Route path="/Historial" element={<Historial />} />

      </Routes>
    </BrowserRouter>
  );
}

export default Router;
