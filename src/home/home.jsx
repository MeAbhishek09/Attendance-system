import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import StatsSection from "./StatsSection"


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features/>
      <StatsSection/>
      <Footer />
    </div>
  );
};

export default Home;
