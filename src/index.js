import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Navigation";
import Footer from "./Footer";

import Home from "./pages/Home";
import Plan from "./pages/Plan";
import Addons from "./pages/AddOns";
import NoPage from "./pages/NoPage";
import Finish from "./pages/Finish";
import ThankYou from "./pages/ThankYou";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="plan" element={<Plan />} />
          <Route path="addons" element={<Addons />} />
          <Route path="finish" element={<Finish />} />
          <Route path="thankYou" element={<ThankYou />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
     
    </BrowserRouter>
    <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
