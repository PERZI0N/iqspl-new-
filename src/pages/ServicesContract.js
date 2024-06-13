import React, { useEffect } from "react";

import Header from "../components/Header/Header";
import HeroSection from "../components/Services-Contract/HeroSection";
import OurExpertise from "../components/Services-Contract/OurExpertise";
import ReactOutToUs from "../components/ReactOutToUs/ReactOutToUs";
import Footer from "../components/Footer/Footer";

const ServicesContract = () => {
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

export default ServicesContract;
