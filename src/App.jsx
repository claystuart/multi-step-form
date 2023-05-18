import { Routes, Route } from "react-router-dom"

import Info from "./pages/Info"
import Plan from "./pages/Plan"
import Addons from "./pages/AddOns"
import NoPage from "./pages/404"
import Finish from "./pages/Finish"
import ThankYou from "./pages/ThankYou"

import Header from "./Header"
import Footer from "./Footer"

export default function App() {

    return (
        <>
            <Header />
            {/* Begin Routing */}
            <Routes>
                <Route path="/multi-step-form" element={<Info />} />
                <Route path="/plan" element={<Plan />} />
                <Route path="/addons" element={<Addons />} />
                <Route path="/finish" element={<Finish />} />
                <Route path="/thankYou" element={<ThankYou />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
            {/* End Routing */}
            <Footer />
        </>
    )
}