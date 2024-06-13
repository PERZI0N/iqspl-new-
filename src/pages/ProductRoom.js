import React, { useEffect } from "react";

import Header from "../components/Header/Header";
import HeroSection from "../components/Product-Room/HeroSection";
import Content from "../components/Product-Room/Content";
import ReactOutToUs from "../components/ReactOutToUs/ReactOutToUs";
import Footer from "../components/Footer/Footer";

const ProductRoom = () => {
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

export default ProductRoom;
