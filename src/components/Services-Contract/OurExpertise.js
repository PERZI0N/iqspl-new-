import React from "react";

import OurExpertiseComp from "../UI/OurExpertiseComp";

import card1 from "../../assets/services-expertise/contract-c1.jpg";
import card2 from "../../assets/services-expertise/contract-c2.jpg";
import card3 from "../../assets/services-expertise/contract-c3.jpg";
import card4 from "../../assets/services-expertise/contract-c4.jpg";
import card5 from "../../assets/services-expertise/contract-c5.jpg";

const OurExpertise = () => {
  const data = [
    {
      src: card1,
      text: "Proactive Maintenance",
    },
    {
      src: card2,
      text: "Priority Support",
    },
    {
      src: card3,
      text: "Comprehensive Coverage",
    },
    {
      src: card4,
      text: "Regular Reporting",
    },
    {
      src: card5,
      text: "Emergency Response",
    },
  ];

  return <OurExpertiseComp data={data} />;
};

export default OurExpertise;
