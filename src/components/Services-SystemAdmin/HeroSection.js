import React from "react";

import heroBackground from "../../assets/services-system-admin-hero.jpg";

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
              System Administrator Services
            </h1>
          </div>
        </div>

        <div className={"text-secondary py-12 text-center"}>
          At IQSPL, we understand that the backbone of any successful business
          lies in its IT infrastructure. Our team of seasoned System
          Administrators is dedicated to ensuring the seamless operation and
          optimal performance of your systems.
        </div>
      </section>
    </>
  );
};

export default HeroSection;
