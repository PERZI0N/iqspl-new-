import React, { useEffect } from "react";

import Header from "../components/Header/Header";
import HeroSection from "../components/Services-WindowsServer/HeroSection";
import OurExpertise from "../components/Services-WindowsServer/OurExpertise";
import ReactOutToUs from "../components/ReactOutToUs/ReactOutToUs";
import Footer from "../components/Footer/Footer";

const ServicesWinServer = () => {
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

export default ServicesWinServer;
