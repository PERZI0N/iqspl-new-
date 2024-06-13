import React from "react";

import heroBackground from "../../assets/services-webapp-hero.jpg";

const HeroSection = () => {
  return (
    <>
      <section className="container text-primary">
        <div
          className="relative w-full h-[10rem] lg:h-[15rem] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center rounded-xl"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 rounded-xl"></div>

          <div className="relative text-tertiary text-center px-1 z-10">
            <h1 className="text-2xl lg:text-4xl font-bold">
              Windows Server Management
            </h1>
          </div>
        </div>

        <div className={"text-secondary py-12 text-center"}>
          In the digital landscape, servers form the backbone of your IT
          infrastructure. At IQSPL, we offer comprehensive Server Management
          services to ensure the reliability, security, and optimal performance
          of your servers.
        </div>
      </section>
    </>
  );
};

export default HeroSection;
