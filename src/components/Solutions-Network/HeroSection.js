import React from "react";

import heroBackground from "../../assets/solutions-network-hero.png";

const HeroSection = () => {
  return (
    <>
      <section className="container text-primary">
        <div
          className="relative w-full h-[10rem] lg:h-[15rem] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center rounded-xl"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="relative text-tertiary text-center px-1">
            <h1 className="text-2xl lg:text-4xl font-bold">
              Networking Solutions
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
