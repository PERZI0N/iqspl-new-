import React from "react";

import heroBackground from "../../assets/product/productLMS1.jpg";

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
              Moodle Customize LMS
            </h1>
          </div>
        </div>

        <h1
          className={"text-2xl font-semibold text-quaternary text-center py-12"}
        >
          Tailored Excellence: Unleashing the Power of Customized Moodle LMS
          Solutions{" "}
        </h1>
        <div className={"text-secondary text-center"}>
          At IQSPL, we pride ourselves on being at the forefront of e-learning
          innovation. Specializing in Moodle LMS customization, we bring you
          unparalleled expertise in tailoring solutions that align seamlessly
          with your unique educational objectives. Step into a world of
          limitless possibilities as we present our custom Moodle LMS solutions
          designed to elevate your online learning experience.
        </div>

        <div className="flex justify-center items-center mt-8">
          <a href="#" onClick={handleButton} rel="noreferrer" target="_blank">
            <button
              className="p-[8px] rounded-lg min-w-[136px] font-semibold font-primary bg-tertiary hover:bg-quaternary text-quaternary hover:text-tertiary border-2 border-quaternary transition-all duration-300"
              type="submit"
            >
              Explore
            </button>
          </a>
        </div>

        <div className="flex justify-center my-12">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-65Q-1_Pe-E?si=rqcoetArk9yW0z6u"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
