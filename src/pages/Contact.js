import React, { useEffect } from "react";

import Header from "../components/Header/Header";
import HeroSection from "../components/Contact/HeroSection";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Footer/Footer";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <HeroSection />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
