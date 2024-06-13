import React from "react";

import heroBackground from "../../assets/product/productEvent1.jpg";
import productEvent3 from "../../assets/product/productEvent3.png";

const HeroSection = () => {
  const handleButton = (e) => {
    e.preventDefault();
    console.log("hello");
    window.open("#", "_blank", "noopener,noreferrer");
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
              Event Management Web Applications and Websites
            </h1>
          </div>
        </div>

        <h1
          className={"text-2xl font-semibold text-quaternary text-center py-12"}
        >
          Elevate Your Events: Introducing Our Dynamic Event Management
          Solutions{" "}
        </h1>
        <div className={"text-secondary text-center"}>
          At IQSPL, we understand that every event is a unique story waiting to
          unfold. That's why we are thrilled to present our cutting-edge Event
          Management Web Applications and Websites—a suite of solutions designed
          to redefine how you plan, execute, and experience events.
        </div>

        <div className="flex justify-center items-center mt-8">
          <a href="#" onClick={handleButton} rel="noreferrer" target="_blank">
            <button
              className="p-[8px] rounded-lg min-w-[136px] font-semibold font-primary bg-tertiary hover:bg-quaternary text-quaternary hover:text-tertiary border-2 border-quaternary transition-all duration-300"
              type="submit"
            >
              Explore
            </button>
          </a>
        </div>
        <div className={"mx-auto py-12 w-[80%] lg:w-[80%] h-[90%]"}>
          <img src={productEvent3} alt="Our Expertise" draggable={"false"} />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
