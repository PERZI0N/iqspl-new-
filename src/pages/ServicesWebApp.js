import React, { useEffect } from "react";

import Header from "../components/Header/Header";
import HeroSection from "../components/Services-WebApp/HeroSection";
import OurExpertise from "../components/Services-WebApp/OurExpertise";
import ReactOutToUs from "../components/ReactOutToUs/ReactOutToUs";
import Footer from "../components/Footer/Footer";

const ServicesWebApp = () => {
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

export default ServicesWebApp;
