import React from "react";

import heroBackground from "../../assets/product-video-hero.jpg";

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
              Video Conference System
            </h1>
          </div>
        </div>

        <div className={"text-secondary text-center py-12"}>
          Connect, collaborate, and communicate seamlessly with our advanced
          Video Conference System solutions at IQSPL. We specialize in providing
          reliable and immersive video conferencing experiences, facilitating
          effective communication across diverse teams and locations.
        </div>

        <div className="flex pb-12 justify-center items-center mt-8">
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
