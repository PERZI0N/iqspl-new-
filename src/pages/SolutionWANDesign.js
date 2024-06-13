import React, { useEffect } from "react";

import Header from "../components/Header/Header";
import HeroSection from "../components/Solutions-Network/WAN-Design/HeroSection";
import Content from "../components/Solutions-Network/WAN-Design/Content";
import ReactOutToUs from "../components/ReactOutToUs/ReactOutToUs";
import Footer from "../components/Footer/Footer";

const SolutionWANDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <HeroSection />
      <Content />
      <ReactOutToUs />
      <Footer />
    </>
  );
};

export default SolutionWANDesign;