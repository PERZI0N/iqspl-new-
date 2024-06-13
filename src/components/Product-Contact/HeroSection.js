import React from "react";

import heroBackground from "../../assets/product-contact-hero.jpg";

const HeroSection = () => {
  const handleButton = (e) => {
    e.preventDefault();
    console.log("hello");
    window.open("#", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section className="container pt-2 text-primary">
        <div
          className="relative w-full h-[10rem] lg:h-[15rem] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center rounded-xl"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="relative text-tertiary text-center px-1">
            <h1 className="text-2xl lg:text-4xl font-bold">Contact Centre</h1>
          </div>
        </div>

        <div className=" text-quaternary text-center text-2xl font-semibold pt-8 ">
          Create a call centre that goes beyond just calls
        </div>

        <div className={"text-secondary text-center py-8"}>
          Optimize your customer interactions and elevate service quality with
          our Contact Center Solutions at IQSPL. We specialize in providing
          advanced contact center technologies to enhance customer engagement,
          support, and satisfaction.
        </div>

        <div className="flex justify-center pb-12 items-center mt-8">
          <a href="#" onClick={handleButton} rel="noreferrer" target="_blank">
            <button
              className="p-[8px] rounded-lg min-w-[136px] font-semibold font-primary bg-tertiary hover:bg-quaternary text-quaternary hover:text-tertiary border-2 border-quaternary transition-all duration-300"
              type="submit"
            >
              Explore
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
