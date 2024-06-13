import React from "react";

import OurExpertiseComp from "../UI/OurExpertiseComp";

import card1 from "../../assets/services-expertise/network-c1.jpg";
import card2 from "../../assets/services-expertise/network-c2.jpg";
import card3 from "../../assets/services-expertise/network-c3.jpg";
import card4 from "../../assets/services-expertise/network-c4.jpg";
import card5 from "../../assets/services-expertise/network-c5.jpg";

const OurExpertise = () => {
  const data = [
    {
      src: card1,
      text: "Network Design and Optimization",
    },
    {
      src: card2,
      text: "Firewall and Intrusion Prevention",
    },
    {
      src: card3,
      text: "Virtual Private Network (VPN) Solutions",
    },
    {
      src: card4,
      text: "Network Monitoring and Management",
    },
    {
      src: card5,
      text: "Secure Wireless Networks",
    },
  ];

  return <OurExpertiseComp data={data} />;
};

export default OurExpertise;
