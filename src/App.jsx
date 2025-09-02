
// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./dashboard/Login";
import Admin from "./dashboard/Admin";
import Participants from "./dashboard/Participants";
import Analytics from "./dashboard/Analytics";
import Event from "./dashboard/Event";
import SignupPage from "./dashboard/SignupPage";
import Home from "./home/home"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Default route shows Home page */}
        
        <Route path="/SignupPage" element={<SignupPage />} />

        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* Admin route */}
        <Route path="/admin" element={<Admin />} />

        {/* Other pages in admin */}
        <Route path="/participants" element={<Participants />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </Router>
  );
}

export default App;
