import React, { useEffect } from "react";

import Header from "../components/Header/Header";
import HeroSection from "../components/Product-Contact/HeroSection";
import Features from "../components/Product-Contact/Features";
import GenesysSection from "../components/Product-Contact/GenesysSection";
import ReactOutToUs from "../components/ReactOutToUs/ReactOutToUs";
import Footer from "../components/Footer/Footer";

const ProductContact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <GenesysSection />
      <ReactOutToUs />
      <Footer />
    </>
  );
};

export default ProductContact;
