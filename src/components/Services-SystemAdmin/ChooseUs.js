import React from "react";

import card1 from "../../assets/services-system-admin-c1.png";
import card2 from "../../assets/services-system-admin-c2.png";
import card3 from "../../assets/services-system-admin-c3.png";
import card4 from "../../assets/services-system-admin-c4.png";
import card5 from "../../assets/services-system-admin-c5.png";
import card6 from "../../assets/services-system-admin-c6.png";
import card7 from "../../assets/services-system-admin-c7.png";
import card8 from "../../assets/services-system-admin-c8.png";
import card9 from "../../assets/services-system-admin-c9.png";
import card10 from "../../assets/services-system-admin-c10.png";
import card11 from "../../assets/services-system-admin-c11.png";
import card12 from "../../assets/services-system-admin-c12.png";

const ChooseUs = () => {
  const imgArr = [
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
  ];

  return (
    <>
      <section className="container text-primary py-12">
        <h1 className={"text-2xl font-semibold"}>
          Why Choose IQSPL for System Administration?
        </h1>

        <div className={"py-8 flex flex-wrap gap-4"}>
          {imgArr.map((item, index) => {
            return (
              <img
                src={item}
                alt={`Card - ${index}`}
                className={"w-full lg:w-[32%]"}
                draggable={false}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ChooseUs;
