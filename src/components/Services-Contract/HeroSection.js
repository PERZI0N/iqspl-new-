import React from "react";

import heroBackground from "../../assets/services-contract-hero.jpg";

const HeroSection = () => {
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
              Managed Annual Maintenance Contract of IT services
            </h1>
          </div>
        </div>

        <div className={"text-secondary py-12 text-center"}>
          Ensure the uninterrupted performance of your IT infrastructure with
          our comprehensive Annual Maintenance Contract (AMC) services at IQSPL.
          Our AMC services are designed to provide proactive maintenance,
          support, and peace of mind, allowing you to focus on your core
          business activities.
        </div>
      </section>
    </>
  );
};

export default HeroSection;
