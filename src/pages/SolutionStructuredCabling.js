import React, { useEffect } from "react";

import Header from "../components/Header/Header";
import HeroSection from "../components/Solutions-Network/Structures-Cabling/HeroSection";
import Content from "../components/Solutions-Network/Structures-Cabling/Content";
import ReactOutToUs from "../components/ReactOutToUs/ReactOutToUs";
import Footer from "../components/Footer/Footer";

const SolutionStructuredCabling = () => {
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

export default SolutionStructuredCabling;