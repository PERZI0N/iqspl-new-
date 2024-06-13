import React from "react";

import heroBackground from "../../assets/services-email-hero.jpg";

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
            <h1 className="text-2xl lg:text-4xl font-bold">Email Services</h1>
          </div>
        </div>

        <div className={"text-secondary py-12 text-center"}>
          Efficient communication is at the heart of a productive business
          environment. At IQSPL, we specialize in Mail Management solutions that
          ensure seamless and secure communication across your organization.
        </div>
      </section>
    </>
  );
};

export default HeroSection;
