import React from "react";

import OurExpertiseComp from "../UI/OurExpertiseComp";

import card1 from "../../assets/services-expertise/server-c1.jpg";
import card2 from "../../assets/services-expertise/server-c2.jpg";
import card3 from "../../assets/services-expertise/server-c3.jpg";
import card4 from "../../assets/services-expertise/server-c4.jpg";
import card5 from "../../assets/services-expertise/server-c5.jpg";
import card6 from "../../assets/services-expertise/server-c6.jpg";

const OurExpertise = () => {
  const data = [
    {
      src: card1,
      text: "Server Deployment and Configuration",
    },
    {
      src: card2,
      text: "Ongoing Maintenance and Updates",
    },
    {
      src: card3,
      text: "Performance Monitoring and Optimization",
    },
    {
      src: card4,
      text: "Security Protocols and Compliance",
    },
    {
      src: card5,
      text: "Data Backup and Disaster Recovery",
    },
    {
      src: card6,
      text: "Virtualization and Cloud Integration",
    },
  ];

  return <OurExpertiseComp data={data} />;
};

export default OurExpertise;
