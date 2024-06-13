import React from "react";
import List from "../../List/List";
import WanDesign2 from "../../../assets/solutions/WanDesign2.jpg";
import WanDesign3 from "../../../assets/solutions/WanDesign3.jpg";

const Content = () => {
  return (
    <>
      <section className="container font-primary text-primary">
        <div className={"my-8 gap-4"}>
          <section className="w-full">
            <p className={"text-secondary pt-4"}>
              Empower your organization with robust and efficient network
              solutions through our comprehensive LAN (Local Area Network) and
              WAN (Wide Area Network) services at IQSPL. From meticulous design
              to seamless deployment and ongoing management, we specialize in
              optimizing network infrastructures for enhanced connectivity and
              performance.
            </p>

            <div className={"flex my-6 gap-4 flex-col-reverse lg:flex-row"}>
              <div className={"w-full lg:w-[70%] h-auto"}>
                <h1 className={"text-2xl font-semibold"}>
                  Key Features of Our LAN, WAN Services
                </h1>

                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>Strategic Design</h2>
                  <List>
                    Tailored LAN and WAN designs crafted to align with your
                    business goals and network requirements.
                  </List>
                  <List>
                    Strategic planning to ensure scalability, flexibility, and
                    optimal performance.
                  </List>
                </div>

                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>Deployment Expertise</h2>
                  <List>
                    Expert deployment of LAN and WAN architectures, utilizing
                    industry best practices and cutting-edge technologies.
                  </List>
                  <List>
                    Minimized downtime during deployment to maintain operational
                    continuity.
                  </List>
                </div>

                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>Performance Optimization</h2>
                  <List>
                    Ongoing management to optimize LAN and WAN performance,
                    ensuring seamless and reliable connectivity.
                  </List>
                  <List>
                    Proactive monitoring to identify and address potential
                    bottlenecks or issues before they impact operations.
                  </List>
                </div>

                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>Scalability and Flexibility</h2>
                  <List>
                    Scalable solutions that evolve with your business,
                    accommodating growth and technological advancements.
                  </List>
                  <List>
                    Flexibility to adapt to changing business requirements and
                    network demands.
                  </List>
                </div>

                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>Security Integration</h2>
                  <List>
                    Incorporation of robust security measures into LAN and WAN
                    designs to safeguard sensitive data and prevent unauthorized
                    access.
                  </List>
                  <List>
                    Regular security assessments and updates to mitigate
                    potential vulnerabilities.
                  </List>
                </div>
                <div className="text-secondary py-6">
                  Optimize your network infrastructure for peak performance with
                  IQSPL's LAN, WAN Designing, Deployment, and Management
                  services. Contact us today to discuss how we can elevate your
                  organization's connectivity capabilities.
                </div>
              </div>

              <div
                className={"mx-auto mb-12 lg:mb-0 w-[50%] lg:w-[30%] h-[90%]"}
              >
                <img src={WanDesign2} alt="WAN Design" draggable={"false"} />
              </div>
            </div>
            <div className="flex justify-center items-center w-full h-[10rem] lg:h-[15rem] rounded-lg">
              <img
                src={WanDesign3}
                alt="WAN Design"
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
