import React from "react";

import OurExpertiseComp from "../UI/OurExpertiseComp";

import card1 from "../../assets/services-expertise/desktop-c1.jpg";
import card2 from "../../assets/services-expertise/desktop-c2.jpg";
import card3 from "../../assets/services-expertise/desktop-c3.jpg";
import card4 from "../../assets/services-expertise/desktop-c4.jpg";
import card5 from "../../assets/services-expertise/desktop-c5.jpg";
import card6 from "../../assets/services-expertise/desktop-c6.jpg";

const OurExpertise = () => {
  const data = [
    {
      src: card1,
      text: "Deployment and Configuration",
    },
    {
      src: card2,
      text: "Software Installation and Updates",
    },
    {
      src: card3,
      text: "Security Measures and Compliance",
    },
    {
      src: card4,
      text: "Remote Support and Troubleshooting",
    },
    {
      src: card5,
      text: "User Access Management",
    },
    {
      src: card6,
      text: "Hardware Monitoring and Maintenance",
    },
  ];

  return <OurExpertiseComp data={data} />;
};

export default OurExpertise;
