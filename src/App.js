import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import FrontPage from "./Components/Frontpage/FrontPage";
import AboutUs from "./Components/About-us/about";
import Login from "./Components/Login/login";
import Signup from "./Components/Signup/signup";
import NotFound from "./Components/notfound/notfound";
import TermsOfService from "./Components/termsofservice/terms";
import PaymentForm from "./Components/Payment/payment-gateway";
import PrivacyPolicy from "./Components/privacy/privacy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/payment" element={<PaymentForm />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all for unknown routes */}
      </Routes>
    </Router>
  );
}

export default App;
