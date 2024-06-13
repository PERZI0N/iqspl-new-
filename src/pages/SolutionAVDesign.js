import React, { useEffect } from "react";

import Header from "../components/Header/Header";
import HeroSection from "../components/Solutions-Room/AV-Design/HeroSection";
import Content from "../components/Solutions-Room/AV-Design/Content";
import ReactOutToUs from "../components/ReactOutToUs/ReactOutToUs";
import Footer from "../components/Footer/Footer";

const SolutionAVDesign = () => {
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

export default SolutionAVDesign;
