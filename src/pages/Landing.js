import React, { useEffect } from "react";

import Header from "../components/Header/Header";
import HeroSection from "../components/Landing/HeroSection";
import LandingCards from "../components/Landing/LandingCards";
import AboutUs from "../components/Landing/AboutUs";
// import GudiPadwaSection from "../components/Landing/GudiPadwaSection";
import WhatWeDo from "../components/Landing/WhatWeDo";
import Clients from "../components/Landing/Clients";
import WhyUs from "../components/Landing/WhyUs";
import ReactOutToUs from "../components/ReactOutToUs/ReactOutToUs";
import Footer from "../components/Footer/Footer";
import Featured from "../components/Landing/FeaturedOn";

const Landing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <LandingCards />
      {/* <GudiPadwaSection /> */}
      <WhatWeDo />
      <Featured />
      <WhyUs />
      <Clients />
      <ReactOutToUs />
      <Footer />
    </>
  );
};

export default Landing;
