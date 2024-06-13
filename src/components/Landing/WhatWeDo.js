import React from "react";

import img1 from "../../assets/landing-whatwedo1.jpg";
import img2 from "../../assets/landing-whatwedo2.jpg";
import img3 from "../../assets/landing-whatwedo3.jpg";
import img4 from "../../assets/landing-whatwedo4.jpg";
import img5 from "../../assets/landing-whatwedo5.jpg";

const Card = ({ className, src, text }) => {
  const divClass = `relative overflow-hidden ${className} rounded-lg`;
  return (
    <div className={divClass}>
      <img
        src={src}
        alt={text}
        draggable={false}
        loading="lazy"
        className="relative w-full h-full object-cover transition-all duration-300 hover:scale-105"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 rounded-xl"></div>

      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-0 hover:bg-opacity-25 rounded-lg transition-all duration-150 w-full h-full flex flex-col justify-end py-4" />

      <p className="absolute bottom-0 px-4 py-3 font-medium lg:text-base text-tertiary ">
        {text}
      </p>
    </div>
  );
};

const WhatWeDo = () => {
  return (
    <>
      <section
        className="container my-8 lg:my-16 text-primary"
        id="LandingWhatWeDo"
      >
        <div className="flex justify-center">
          <h1
            className={
              "text-primary text-2xl lg:text-4xl font-semibold my-4 lg:my-8"
            }
            style={{ position: "relative", display: "inline-block" }}
          >
            What we do
            <span
              style={{
                display: "block",
                height: "2.5px",
                background:
                  "linear-gradient(to right, rgba(0,0,0,0) 0%, #161616 50%, rgba(0,0,0,0) 100%)",
                position: "absolute",
                width: "120%",
                bottom: "-7px",
                left: "-10%",
              }}
            ></span>
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row justify-between my-4 gap-4">
          <Card
            className="w-full sm:w-[66.25%] hover:scale-[101%] transition-all duration-150"
            src={img1}
            text="Transforming Ideas into Digital Reality Through Seamless Web and App Development."
          />
          <Card
            className="w-full sm:w-[32.5%] hover:scale-[102%] transition-all duration-150"
            src={img2}
            text="Unlocking Intelligent Solutions: Explore the Power of Our AI Services"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between my-4 gap-4">
          <Card
            className="w-full sm:w-[32.5%] hover:scale-[102%] transition-all duration-150"
            src={img3}
            text="Experience the Power of Sight and Sound: Elevate with Our AV Solutions"
          />
          <Card
            className="w-full sm:w-[32.5%] hover:scale-[102%] transition-all duration-150"
            src={img4}
            text="Empowering Education Everywhere: Unleash Potential with Our customized LMS Solutions."
          />
          <Card
            className="w-full sm:w-[32.5%] hover:scale-[102%] transition-all duration-150"
            src={img5}
            text="Securing Tomorrow's Digital Frontiers: Explore Innovation with Our Cyber LAB"
          />
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
