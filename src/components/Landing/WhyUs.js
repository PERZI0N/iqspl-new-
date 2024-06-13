import React from "react";

import comp1 from "../../assets/landing-why-us-comp1.svg";
import comp2 from "../../assets/landing-why-us-comp2.svg";
import comp3 from "../../assets/landing-why-us-comp3.svg";
import comp4 from "../../assets/landing-why-us-comp4.svg";
import comp5 from "../../assets/landing-why-us-comp5.svg";
import comp6 from "../../assets/landing-why-us-comp6.svg";

const WhyUsCard = ({ Icon, text }) => (
  <div className="flex flex-col items-center p-6 mb-4 md:mb-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 hover:bg-bg-secondary transition-all duration-150 rounded-lg hover:scale-105">
    <img src={Icon} alt={text} className="h-24 w-24 mb-4" />
    <p className="text-center text-base lg:text-lg text-secondary">{text}</p>
  </div>
);

const WhyUs = () => {
  return (
    <>
      <section className={"container p-6 rounded-lg shadow-mdr"} id="WhyUs">
        <div className="flex justify-center">
          <h1
            className={
              "text-primary text-2xl lg:text-3xl font-semibold my-4 lg:my-8"
            }
            style={{ position: "relative", display: "inline-block" }}
          >
            Why Choose IQSPL
            <span
              style={{
                display: "block",
                height: "2.5px",
                background:
                  "linear-gradient(to right, rgba(0,0,0,0) 0%, #161616 50%, rgba(0,0,0,0) 100%)",
                position: "absolute",
                width: "120%",
                bottom: "-7px",
                left: "-10%",
              }}
            ></span>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between text-center font-semibold my-8 ">
          <WhyUsCard
            Icon={comp4}
            text="Responsiveness, reliability, and professionalism"
          />
          <WhyUsCard Icon={comp1} text="Competitive Pricing" />
          <WhyUsCard Icon={comp2} text="Prompt Delivery" />
          <WhyUsCard Icon={comp3} text="Dynamic and Passionate Team" />
          <WhyUsCard Icon={comp5} text="Innovation and Technology" />
          <WhyUsCard Icon={comp6} text="Customer Satisfaction" />
        </div>
      </section>
    </>
  );
};

export default WhyUs;
