import React from "react";
import List from "../../List/List";
import Sdwan2 from "../../../assets/solutions/SDWAN2.jpg";
import Sdwan3 from "../../../assets/solutions/SDWAN3.png";

const Content = () => {
  return (
    <>
      <section className="container font-primary text-primary">
        <div className={"my-8 gap-4"}>
          <section className="w-full">
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
                <h1 className={"text-2xl font-semibold"}>
                  Key Features of Our SD-WAN Services
                </h1>

                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>Intelligent Traffic Routing</h2>
                  <List>
                    Utilize intelligent and dynamic traffic routing to optimize
                    data flow across multiple network paths.
                  </List>
                  <List>
                    Enhance application performance by choosing the most
                    efficient and reliable routes in real-time.
                  </List>
                </div>

                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>Network Agility and Flexibility</h2>
                  <List>
                    Enjoy increased network agility with the ability to adapt to
                    changing business needs and varying network conditions.
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
                    intelligently utilizing multiple transport links, including
                    broadband and secure internet connections.
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
                    Simplify configuration, monitoring, and troubleshooting for
                    enhanced operational efficiency.
                  </List>
                </div>

                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>Enhanced Security Measures</h2>
                  <List>
                    Implement advanced security measures, including encryption
                    and threat detection, to safeguard data transmitted over the
                    SD-WAN.
                  </List>
                  <List>Ensure secure and compliant network operations.</List>
                </div>
                <div className="text-secondary py-6">
                  Transform your wide area network into a dynamic, efficient,
                  and cost-effective asset with IQSPL's SD-WAN services. Contact
                  us today to explore how our solutions can revolutionize your
                  network connectivity.
                </div>
              </div>

              <div
                className={"mx-auto mb-12 lg:mb-0 w-[50%] lg:w-[30%] h-[90%]"}
              >
                <img src={Sdwan2} alt="SD - WAN" draggable={"false"} />
              </div>
            </div>
            <div className="flex justify-center items-center w-full h-[10rem] lg:h-[15rem] rounded-lg">
              <img
                src={Sdwan3}
                alt="SD - WAN"
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
