import React from "react";

import OurExpertiseComp from "../UI/OurExpertiseComp";

import card1 from "../../assets/services-expertise/webapp-c1.jpg";
import card2 from "../../assets/services-expertise/webapp-c2.jpg";
import card3 from "../../assets/services-expertise/webapp-c3.jpg";
import card4 from "../../assets/services-expertise/webapp-c4.jpg";
import card5 from "../../assets/services-expertise/webapp-c5.jpg";

const OurExpertise = () => {
  const data = [
    {
      src: card1,
      text: "Web Development",
    },
    {
      src: card2,
      text: "Mobile App Development",
    },
    {
      src: card3,
      text: "E-commerce Solutions",
    },
    {
      src: card4,
      text: "Custom Software Solutions",
    },
    {
      src: card5,
      text: "User Experience (UX) Design",
    },
  ];

  return <OurExpertiseComp data={data} />;
};

export default OurExpertise;
