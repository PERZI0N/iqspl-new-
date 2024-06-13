import React from "react";

import OurExpertiseComp from "../UI/OurExpertiseComp";

import card1 from "../../assets/services-expertise/it-c1.jpg";
import card2 from "../../assets/services-expertise/it-c2.jpg";
import card3 from "../../assets/services-expertise/it-c3.jpg";

const OurExpertise = () => {
  const data = [
    {
      src: card1,
      text: "ZOHO Helpdesk Solutions",
    },
    {
      src: card2,
      text: "SolarWinds Support Services",
    },
    {
      src: card3,
      text: "Tailored and Customized Solutions",
    },
  ];

  return <OurExpertiseComp data={data} />;
};

export default OurExpertise;
