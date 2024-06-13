import React from "react";

import card1 from "../../assets/landing-card1.png";
import card2 from "../../assets/landing-card2.png";
import card3 from "../../assets/landing-card3.png";

const Card = ({ src, alt, number, title, color }) => {
  return (
    <>
      <div className="relative w-[100%] lg:w-[30%] my-2 lg:my-0 overflow-hidden font-primary">
        <img
          src={src}
          alt={alt}
          draggable={false}
          loading="lazy"
          className="relative w-full h-full object-cover transition-all duration-300 hover:scale-105"
          style={{ transition: "all 0.3s ease" }}
        />
        <div
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-0 hover:bg-opacity-25 rounded-lg transition-opacity duration-300 w-full h-full flex flex-col justify-end py-4"
          style={{ transition: "all 0.3s ease" }}
        >
          <div className="h-[65%] flex flex-col justify-between">
            <div className={`${color} pl-4 text-3xl`}>{number}</div>
            <div className={`${color} pl-4`}>{title}</div>
          </div>
        </div>
      </div>
    </>
  );
};

const LandingCards = () => {
  return (
    <>
      <section className={"container my-5 lg:my-16 text-primary "}>
        <div
          className={"flex justify-between items-center flex-col lg:flex-row"}
        >
          <Card
            src={card1}
            alt={"Card - 1"}
            number={"2 k+"}
            title={"Happy customers"}
            color={"text-black"}
          />
          <Card
            src={card2}
            alt="Card - 2"
            number="12 k+"
            title="Elegant websites"
            color="text-white"
          />
          <Card
            src={card3}
            alt="Card - 3"
            number="18 +"
            title="Years of service"
            color="text-white"
          />
        </div>
      </section>
    </>
  );
};

export default LandingCards;
