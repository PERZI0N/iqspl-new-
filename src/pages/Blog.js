import React, { useEffect } from "react";

import Header from "../components/Header/Header";
import Content from "../components/Blog/Content";
import ReactOutToUs from "../components/ReactOutToUs/ReactOutToUs";
import Footer from "../components/Footer/Footer";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Content />
      <ReactOutToUs />
      <Footer />
    </>
  );
};

export default Blog;