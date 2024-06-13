import React from "react";

import heroBackground from "../../assets/product-room-hero.png";
import Card1 from "../../assets/product-room-card1.jpg";

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
            <h1 className="text-2xl lg:text-4xl font-bold">Roombr</h1>
          </div>
        </div>
        <h1
          className={"text-2xl font-semibold text-quaternary text-center py-12"}
        >
          ROOMBR, The World's first Walltop Computer
        </h1>

        <div className={"text-secondary text-center"}>
          With Roombr, your wall becomes an interactive, computing screen. This
          makes video-conferencing truly life-size, life-like and immersive.
          Invite people to collaborate on your screen, virtually, and your room
          transforms into a shared knowledge space. Wherever in the world you
          are, with Roombr you are in one room, collaborating on one interactive
          whiteboard.
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
          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kuPWxI9h2ME?si=0OMX6Y0lF723X8aP"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe> */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ekx0q3UPLA8?si=1HRLDT-1czt1ctJ3"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="pt-12">
          <div
            className="relative w-full h-[35rem] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center rounded-xl "
            style={{ backgroundImage: `url(${Card1})` }}
          >
            <div className="relative text-tertiary text-center px-1">
              <h1 className="text-2xl lg:text-4xl font-black">
                TRANSFORMING EDUCATION WITH ROOMBR
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
