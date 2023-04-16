import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./pages/authentication";
import About from "./pages/about";
import Contact from "./pages/contact";
import Privacy from "./pages/privacy";
import Home from "./pages/home";
import "react-toastify/dist/ReactToastify.css";
import PageNotFounde from "./pages/pageNotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFounde />} />
        <Route path="/authenticate" element={<Authentication />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<Privacy />} />
      </Routes>
    </Router>
  );
};

export default App;
