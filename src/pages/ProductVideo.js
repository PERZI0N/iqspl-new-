import React, { useEffect } from "react";

import Header from "../components/Header/Header";
import HeroSection from "../components/Product-Video/HeroSection";
import OurExpertise from "../components/Product-Video/OurExpertise";
import OurOfferings from "../components/Product-Video/OurOfferings";
import ReactOutToUs from "../components/ReactOutToUs/ReactOutToUs";
import Footer from "../components/Footer/Footer";

const ProductVideo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <HeroSection />
      <OurExpertise />
      <OurOfferings />
      <ReactOutToUs />
      <Footer />
    </>
  );
};

export default ProductVideo;
