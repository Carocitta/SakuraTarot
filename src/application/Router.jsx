import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App"
import Historial from "../pages/Historial"



function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Historial" element={<Historial />} />
                
            </Routes>

        </BrowserRouter>

    )

}

export default Router;