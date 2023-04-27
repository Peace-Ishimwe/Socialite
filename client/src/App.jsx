import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./pages/authentication";
import AboutPage from "./pages/about";
import PrivacyPage from "./pages/privacy";
import Home from "./pages/home";
import "react-toastify/dist/ReactToastify.css";
import PageNotFounde from "./pages/pageNotFound";
import UserDashboard from "./pages/userDashboard";
import ContactPage from "./pages/contact";
import ComingSoonPage from "./pages/comingSoon";
import VisitUser from "./pages/visitUser";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFounde />} />
        <Route path="/u/messages" element={<ComingSoonPage />} />
        <Route path="/u/user/visit/:userId" element={<VisitUser />} />
        <Route path="/u/notifications" element={<ComingSoonPage />} />
        <Route path="/authenticate" element={<Authentication />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/u/user" element={<UserDashboard />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
      </Routes>
    </Router>
  );
};

export default App;
