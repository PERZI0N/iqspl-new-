import React, { useEffect } from "react";

import Header from "../components/Header/Header";
import HeroSection from "../components/Services-Email/HeroSection";
import OurExpertise from "../components/Services-Email/OurExpertise";
import Platforms from "../components/Services-Email/Platforms";
import ReactOutToUs from "../components/ReactOutToUs/ReactOutToUs";
import Footer from "../components/Footer/Footer";

const ServiceEmail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <HeroSection />
      <OurExpertise />
      <Platforms />
      <ReactOutToUs />
      <Footer />
    </>
  );
};

export default ServiceEmail;
