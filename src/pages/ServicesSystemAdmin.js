import React, { useEffect } from "react";

import Header from "../components/Header/Header";
import HeroSection from "../components/Services-SystemAdmin/HeroSection";
import OurExpertise from "../components/Services-SystemAdmin/OurExpertise";
// import ChooseUs from "../components/Services-SystemAdmin/ChooseUs";
import ReactOutToUs from "../components/ReactOutToUs/ReactOutToUs";
import Footer from "../components/Footer/Footer";

const ServicesSystemAdmin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <HeroSection />
      <OurExpertise />
      {/* <ChooseUs /> */}
      <ReactOutToUs />
      <Footer />
    </>
  );
};

export default ServicesSystemAdmin;
