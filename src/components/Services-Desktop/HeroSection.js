import React from "react";

import heroBackground from "../../assets/services-desktop-hero.jpg";

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
              Desktop and Laptop Management
            </h1>
          </div>
        </div>

        <div className={"text-secondary py-12 text-center"}>
          Efficient management of desktops and laptops is crucial for
          maintaining a productive and secure digital workspace. At IQSPL, we
          provide comprehensive Desktop and Laptop Management solutions to
          streamline operations, enhance security, and ensure optimal
          performance across your organization.
        </div>
      </section>
    </>
  );
};

export default HeroSection;
