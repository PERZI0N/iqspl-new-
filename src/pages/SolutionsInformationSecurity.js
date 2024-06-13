import React, { useEffect } from "react";

import Header from "../components/Header/Header";
import HeroSection from "../components/Solutions-InformationSecurity/HeroSection";
import Content from "../components/Solutions-InformationSecurity/Content";
import ReactOutToUs from "../components/ReactOutToUs/ReactOutToUs";
import Footer from "../components/Footer/Footer";

const SolutionsInformationSecurity = () => {
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

export default SolutionsInformationSecurity;
