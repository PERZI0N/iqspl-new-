import React from "react";

import OurExpertiseComp from "../UI/OurExpertiseComp";

import card1 from "../../assets/services-expertise/email-c1.jpg";
import card2 from "../../assets/services-expertise/email-c2.jpg";
import card3 from "../../assets/services-expertise/email-c3.jpg";
import card4 from "../../assets/services-expertise/email-c4.png";
import card5 from "../../assets/services-expertise/email-c5.jpg";

const OurExpertise = () => {
  const expertiseData = [
    {
      id: 1,
      src: card1,
      text: "Email Configuration and Optimization",
    },
    {
      id: 2,
      src: card2,
      text: "Collaborative Messaging Platforms",
    },
    {
      id: 3,
      src: card3,
      text: "Mail Archiving and Compliance",
    },
    // {
    //   id: 4,
    //   src: card4,
    //   text: "Mobile Messaging Solutions",
    // },
    {
      id: 5,
      src: card5,
      text: "Troubleshooting and Support",
    },
  ];

  return (
    <>
      <OurExpertiseComp data={expertiseData} />
    </>
  );
};

export default OurExpertise;
