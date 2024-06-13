import React, { useEffect } from "react";

import Header from "../components/Header/Header";
import HeroSection from "../components/Solutions-Room/LiveStream/HeroSection";
import Content from "../components/Solutions-Room/LiveStream/Content";
import ReactOutToUs from "../components/ReactOutToUs/ReactOutToUs";
import Footer from "../components/Footer/Footer";

const SolutionLiveStream = () => {
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

export default SolutionLiveStream;
