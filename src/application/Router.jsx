import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import PickACard from "../pages/PickACard";
import ReadingPage from "../pages/ReadingPage/ReadingPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pick-a-card" element={<PickACard />} />
        <Route path="/Reading" element={<ReadingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
