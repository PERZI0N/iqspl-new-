import React from "react";

import heroBackground from "../../assets/product/productRecruit1.jpg";
import productRecruit4 from "../../assets/product/productRecruit4.JPG";

const HeroSection = () => {
  const handleButton = (e) => {
    e.preventDefault();
    console.log("hello");
    window.open("https://dainty-quokka-e96459.netlify.app/", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section className="container text-primary">
        <div
          className="relative w-full h-[10rem] lg:h-[15rem] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center rounded-xl"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 rounded-xl"></div>
          <div className="relative text-tertiary text-center px-1">
            <h1 className="text-2xl lg:text-4xl font-bold">
              Recruitment Software
            </h1>
          </div>
        </div>

        <h1
          className={"text-2xl font-semibold text-quaternary text-center py-10"}
        >
          Introducing Our Cutting-Edge Recruitment Software on Your New Website{" "}
        </h1>

        <div className={"text-secondary text-center pb-6"}>
          At IQSPL, we understand the pivotal role that advanced technology
          plays in modern-day recruitment, and we are thrilled to present our
          dynamic solution to streamline your hiring process.
        </div>

        <div className="flex justify-center items-center mt-8">
          <a href="https://dainty-quokka-e96459.netlify.app/" onClick={handleButton} rel="noreferrer" target="_blank">
            <button
              className="p-[8px] rounded-lg min-w-[136px] font-semibold font-primary bg-tertiary hover:bg-quaternary text-quaternary hover:text-tertiary border-2 border-quaternary transition-all duration-300"
              type="submit"
            >
              Explore
            </button>
          </a>
        </div>
        <div className={"mx-auto py-12 w-[70%] lg:w-[70%] h-[90%]"}>
          <img src={productRecruit4} alt="Our Expertise" draggable={"false"} />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
