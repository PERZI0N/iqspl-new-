import React from "react";

import heroBackground from "../../assets/product/productTyping1.jpg";

const HeroSection = () => {
  const handleButton = (e) => {
    e.preventDefault();
    console.log("hello");
    window.open(" https://dainty-quokka-e96459.netlify.app/", "_blank", "noopener,noreferrer");
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
            <h1 className="text-2xl lg:text-4xl font-bold">Typing Software</h1>
          </div>
        </div>

        <h1
          className={"text-2xl font-semibold text-quaternary text-center py-10"}
        >
          Revolutionizing Typing Efficiency: Unveiling Typing Software{" "}
        </h1>
        <div className={"text-secondary text-center pb-6"}>
          Welcome to the future of typing proficiency with our innovative typing
          software, specially designed for typing centers. At IQSPL, we
          recognize the importance of precision and speed in official
          documentation, and we are excited to introduce our cutting-edge
          solution to enhance the typing experience at government centers. we
          also understand the importance of hands-on learning, especially in the
          realm of government documentation, and we are thrilled to introduce an
          innovative feature: maximum assignments with different scenarios for
          students' practical application.
        </div>

        <div className="flex justify-center items-center mt-8">
          <a href=" https://dainty-quokka-e96459.netlify.app/" onClick={handleButton} rel="noreferrer" target="_blank">
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
