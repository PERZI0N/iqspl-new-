import React from "react";

import OurExpertiseComp from "../UI/OurExpertiseComp";

import card1 from "../../assets/services-expertise/sys-admin-c1.jpg";
import card2 from "../../assets/services-expertise/sys-admin-c2.jpg";
import card3 from "../../assets/services-expertise/sys-admin-c3.jpg";
import card4 from "../../assets/services-expertise/sys-admin-c4.jpg";
import card5 from "../../assets/services-expertise/sys-admin-c5.jpg";

const OurExpertise = () => {
  const data = [
    {
      src: card1,
      text: "Infrastructure Management",
    },
    {
      src: card2,
      text: "Server Administration",
    },
    {
      src: card3,
      text: "Network Configuration and Optimization",
    },
    {
      src: card4,
      text: "Data Backup and Recovery",
    },
    {
      src: card5,
      text: "User Management",
    },
  ];
  return (
    <>
      <OurExpertiseComp data={data} />
    </>
  );
};

export default OurExpertise;
