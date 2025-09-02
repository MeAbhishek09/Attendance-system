// // src/App.jsx
// import Login from "./components/login";
// import Admin from "./components/Admin";
// import Event from "./components/Event"
// import Background from "./components/Background"
// import Analytics from "./components/Analytics"
// import Participants from "./components/Participants"

// function App() {
//   return (
//     <>
//       {/* <Login /> */}
//       {/* <Admin/> */}
//       {/* <Event/> */}
//       {/* <Background /> */}
//       {/* <Analytics/> */}
//       <Participants/>
//     </>
//   );
// }

// export default App;




// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Participants from "./components/Participants";
import Analytics from "./components/Analytics";
import Event from "./components/Event";
import SignupPage from "./components/SignupPage";
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
