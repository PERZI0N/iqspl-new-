import React from "react";
import List from "../../List/List";
import StructuredCabling2 from "../../../assets/solutions/StructuredCabling2.jpg";
import StructuredCabling3 from "../../../assets/solutions/StructuredCabling3.jpg";

const Content = () => {
  return (
    <>
      <section className="container font-primary text-primary">
        <div className={"my-8 gap-4"}>
          <section className="w-full">
            <p className={"text-secondary pt-4"}>
              Unlock seamless connectivity and maximize network efficiency with
              our expert Structured Cabling solutions at IQSPL. We specialize in
              designing, implementing, and maintaining robust cabling
              infrastructures tailored to meet the dynamic needs of your
              organization.
            </p>

            <div className={"flex my-6 gap-4 flex-col-reverse lg:flex-row"}>
              <div className={"w-full lg:w-[70%] h-auto"}>
                <h1 className={"text-2xl font-semibold"}>Our Expertise</h1>

                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>Design and Planning</h2>
                  <List>
                    Tailored cabling designs to optimize network performance and
                    accommodate future expansions.
                  </List>
                  <List>
                    Strategic planning to ensure efficient cable routing and
                    organization.
                  </List>
                </div>

                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>Installation and Implementation</h2>
                  <List>
                    Expert installation of high-quality cables, connectors, and
                    network components.
                  </List>
                  <List>
                    Precision implementation to minimize signal interference and
                    ensure reliability.
                  </List>
                </div>

                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>Cable Testing and Certification</h2>
                  <List>
                    Rigorous testing and certification of cables to guarantee
                    optimal performance and adherence to industry standards.
                  </List>
                  <List>
                    Comprehensive documentation of test results for transparency
                    and compliance.
                  </List>
                </div>

                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>Scalability and Flexibility</h2>
                  <List>
                    Scalable solutions that grow with your business,
                    accommodating new technologies and increasing data demands.
                  </List>
                  <List>
                    Flexibility to adapt to evolving business requirements and
                    technological advancements.
                  </List>
                </div>

                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>Reliability and Performance</h2>
                  <List>
                    Structured cabling solutions designed for reliability,
                    minimizing downtime and ensuring consistent network
                    performance.
                  </List>
                  <List>
                    High-quality materials and craftsmanship to withstand the
                    demands of a modern business environment.
                  </List>
                </div>
                <div className="text-secondary py-6">
                  Enhance your organization's connectivity foundation with
                  IQSPL's Structured Cabling solutions. Contact us today to
                  discuss how we can optimize your network infrastructure for
                  seamless and reliable operations.
                </div>
              </div>

              <div
                className={"mx-auto mb-12 lg:mb-0 w-[50%] lg:w-[30%] h-[90%]"}
              >
                <img
                  src={StructuredCabling2}
                  alt="Structured Cabling"
                  draggable={"false"}
                />
              </div>
            </div>
            <div className="flex justify-center items-center w-full h-[10rem] lg:h-[15rem] rounded-lg">
              <img
                src={StructuredCabling3}
                alt="Structured Cabling"
                draggable={"false"}
                className="w-full h-[10rem] lg:h-[15rem] rounded-lg"
              />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Content;
