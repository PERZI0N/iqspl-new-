import React from "react";

import heroBackground from "../../assets/services-network-hero.jpg";

const HeroSection = () => {
  return (
    <>
      <section className="container text-primary">
        <div
          className="relative w-full h-[10rem] lg:h-[15rem] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center rounded-xl"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundPosition: "center calc(100% + 60px)",
          }}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 rounded-xl"></div>
          <div className="relative text-tertiary text-center px-1">
            <h1 className="text-2xl lg:text-4xl font-bold">
              Network & Security Services
            </h1>
          </div>
        </div>

        <div className={"text-secondary py-12 text-center"}>
          In the digital age, where connectivity is at the core of business
          operations, a robust and secure network infrastructure is fundamental.
          At IQSPL, we specialize in delivering cutting-edge Network and
          Security Services, designed to ensure the integrity, availability, and
          confidentiality of your critical business data.
        </div>
      </section>
    </>
  );
};

export default HeroSection;
