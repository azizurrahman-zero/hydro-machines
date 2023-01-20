import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import Footer from "./Components/Footer";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import Products from "./Pages/Products";
import Events from "./Pages/Events";
import NotFound from "./Pages/NotFound";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "./Pages/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/Json/Products.json").then(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/events" element={<Events />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
