import React, { useEffect } from "react";

import Header from "../components/Header/Header";
import HeroSection from "../components/Services-Network/HeroSection";
import OurExpertise from "../components/Services-Network/OurExpertise";
import ReactOutToUs from "../components/ReactOutToUs/ReactOutToUs";
import Footer from "../components/Footer/Footer";

const ServicesNetwork = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <HeroSection />
      <OurExpertise />
      <ReactOutToUs />
      <Footer />
    </>
  );
};

export default ServicesNetwork;
