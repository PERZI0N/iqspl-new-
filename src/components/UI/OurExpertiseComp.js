import React from "react";

const ExpertiseCard = ({ src, text }) => {
  return (
    <div
      className="w-[24rem] mx-2 mb-4 flex flex-col justify-center items-center rounded-lg"
      style={{ height: "auto" }}
    >
      <div className="w-full h-[8.75rem] overflow-hidden rounded-lg">
        <img
          src={src}
          alt={text}
          draggable={false}
          loading="lazy"
          className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
        />
      </div>
      <p className="text-center font-medium lg:text-lg text-primary mt-2">
        {text}
      </p>
    </div>
  );
};

const OurExpertiseComp = ({ data }) => {
  return (
    <>
      <section className="container mx-auto text-primary">
        <h1 className="text-2xl font-semibold text-center py-4">
          Our Expertise
        </h1>
        <div className="flex justify-center flex-wrap">
          {data.map((item) => {
            return (
              <ExpertiseCard key={item.key} src={item.src} text={item.text} />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default OurExpertiseComp;
