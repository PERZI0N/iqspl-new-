import React from "react";

import List from "../List/List";

import ExpertiseImage1 from "../../assets/solutions-network-expertise1.png";
import ExpertiseImage2 from "../../assets/solutions-network-expertise2.png";
import ExpertiseImage3 from "../../assets/solutions-network-expertise3.png";

const Content = () => {
  return (
    <>
      <section className="container font-primary text-primary">
        <div className={"my-8 flex gap-4"}>
          <section className={"w-full"}>
            <div>
              <h1 className={"text-4xl font-semibold"}>Structured Cabling</h1>
              <p className={"text-secondary pt-4"}>
                Unlock seamless connectivity and maximize network efficiency
                with our expert Structured Cabling solutions at IQSPL. We
                specialize in designing, implementing, and maintaining robust
                cabling infrastructures tailored to meet the dynamic needs of
                your organization.
              </p>

              <div className={"flex my-6 gap-4 flex-col-reverse lg:flex-row"}>
                <div className={"w-full lg:w-[70%] h-auto"}>
                  <h1 className={"text-2xl font-semibold"}>Our Expertise</h1>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>Design and Planning</h2>
                    <List>
                      Tailored cabling designs to optimize network performance
                      and accommodate future expansions.
                    </List>
                    <List>
                      Strategic planning to ensure efficient cable routing and
                      organization.
                    </List>
                  </div>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>
                      Installation and Implementation
                    </h2>
                    <List>
                      Expert installation of high-quality cables, connectors,
                      and network components.
                    </List>
                    <List>
                      Precision implementation to minimize signal interference
                      and ensure reliability.
                    </List>
                  </div>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>
                      Cable Testing and Certification
                    </h2>
                    <List>
                      Rigorous testing and certification of cables to guarantee
                      optimal performance and adherence to industry standards.
                    </List>
                    <List>
                      Comprehensive documentation of test results for
                      transparency and compliance.
                    </List>
                  </div>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>Scalability and Flexibility</h2>
                    <List>
                      Scalable solutions that grow with your business,
                      accommodating new technologies and increasing data
                      demands.
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
                </div>

                <div
                  className={"mx-auto mb-12 lg:mb-0 w-[50%] lg:w-[30%] h-[90%]"}
                >
                  <img
                    src={ExpertiseImage1}
                    alt="Our Expertise"
                    draggable={"false"}
                  />
                </div>
              </div>
            </div>

            <div>
              <h1 className={"text-4xl font-semibold"}>
                LAN, WAN Designing, Deployment and Management
              </h1>
              <p className={"text-secondary pt-4"}>
                Empower your organization with robust and efficient network
                solutions through our comprehensive LAN (Local Area Network) and
                WAN (Wide Area Network) services at IQSPL. From meticulous
                design to seamless deployment and ongoing management, we
                specialize in optimizing network infrastructures for enhanced
                connectivity and performance.
              </p>

              <div className={"flex my-6 gap-4 flex-col-reverse lg:flex-row"}>
                <div className={"w-full lg:w-[70%] h-auto"}>
                  <h1 className={"text-2xl font-semibold"}>Our Expertise</h1>

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
                      Minimized downtime during deployment to maintain
                      operational continuity.
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
                      designs to safeguard sensitive data and prevent
                      unauthorized access.
                    </List>
                    <List>
                      Regular security assessments and updates to mitigate
                      potential vulnerabilities.
                    </List>
                  </div>
                </div>

                <div
                  className={"mx-auto mb-12 lg:mb-0 w-[50%] lg:w-[30%] h-[90%]"}
                >
                  <img
                    src={ExpertiseImage2}
                    alt="Our Expertise"
                    draggable={"false"}
                  />
                </div>
              </div>
            </div>

            <div>
              <h1 className={"text-4xl font-semibold"}>SD - WAN </h1>
              <p className={"text-secondary pt-4"}>
                Elevate your organization's network connectivity with our
                specialized SD-WAN (Software-Defined Wide Area Network) services
                at IQSPL. We provide innovative solutions to optimize the
                performance, reliability, and flexibility of your wide area
                network, ensuring seamless operations and enhanced user
                experiences.
              </p>

              <div className={"flex my-6 gap-4 flex-col-reverse lg:flex-row"}>
                <div className={"w-full lg:w-[70%] h-auto"}>
                  <h1 className={"text-2xl font-semibold"}>Our Expertise</h1>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>Intelligent Traffic Routing</h2>
                    <List>
                      Utilize intelligent and dynamic traffic routing to
                      optimize data flow across multiple network paths.
                    </List>
                    <List>
                      Enhance application performance by choosing the most
                      efficient and reliable routes in real-time.
                    </List>
                  </div>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>
                      Network Agility and Flexibility
                    </h2>
                    <List>
                      Enjoy increased network agility with the ability to adapt
                      to changing business needs and varying network conditions.
                    </List>
                    <List>
                      Easily scale your network infrastructure without
                      compromising performance.
                    </List>
                  </div>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>Cost-Efficient Connectivity </h2>
                    <List>
                      Leverage cost-efficient connectivity options by
                      intelligently utilizing multiple transport links,
                      including broadband and secure internet connections.
                    </List>
                    <List>
                      Reduce reliance on expensive MPLS (Multiprotocol Label
                      Switching) circuits while maintaining network reliability.
                    </List>
                  </div>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>
                      Centralized Management and Control
                    </h2>
                    <List>
                      Centralize network management and control through a
                      user-friendly interface.
                    </List>
                    <List>
                      Simplify configuration, monitoring, and troubleshooting
                      for enhanced operational efficiency.
                    </List>
                  </div>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>Enhanced Security Measures</h2>
                    <List>
                      Implement advanced security measures, including encryption
                      and threat detection, to safeguard data transmitted over
                      the SD-WAN.
                    </List>
                    <List>Ensure secure and compliant network operations.</List>
                  </div>
                </div>

                <div
                  className={"mx-auto mb-12 lg:mb-0 w-[50%] lg:w-[30%] h-[90%]"}
                >
                  <img
                    src={ExpertiseImage3}
                    alt="Our Expertise"
                    draggable={"false"}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Content;
