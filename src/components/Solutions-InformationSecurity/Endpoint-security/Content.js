import React from "react";
import List from "../../List/List";
import Endpoint2 from "../../../assets/solutions/Endpoint-2.png";
import Endpoint3 from "../../../assets/solutions/Endpoint-3.jpg";

const Content = () => {
  return (
    <>
      <section className="container font-primary text-primary">
        <div className={"my-8 gap-4"}>
          <section className="w-full">
            <p className={"text-secondary pt-4"}>
              At IQSPL, we specialize in delivering cutting-edge Endpoint
              Security services to fortify every device in your digital
              landscape. Safeguard your organization against evolving cyber
              threats with our proactive and comprehensive security solutions.
              Trust us to protect your endpoints, ensuring a resilient defense
              in today's dynamic cybersecurity landscape.
            </p>

            <div
                className={" my-12 mx-auto mb-12 lg:mb-0 w-[50%] lg:w-[30%] h-[90%]"}
              >
                <img src={Endpoint2} alt="Our Expertise" draggable={"false"} />
              </div>

            <div className={"flex my-6 gap-4 flex-col-reverse lg:flex-row"}>
              <div className={"w-full lg:w-[70%] h-auto"}>
                <h1 className={"text-2xl font-semibold"}>
                  Our key offerings include:
                </h1>

                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>Sophos Endpoint Security</h2>
                  <List>
                    Leverage the robust security features of Sophos to protect
                    your endpoints from a spectrum of cyber threats.
                  </List>
                  <List>
                    Advanced antivirus, anti-malware, and threat detection
                    capabilities ensure comprehensive endpoint security.
                  </List>
                </div>

                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>Checkpoint Endpoint Protection</h2>
                  <List>
                    Fortify your digital perimeter with Checkpoint's Endpoint
                    Protection solutions.
                  </List>
                  <List>
                    Robust firewall, intrusion prevention, and threat
                    intelligence contribute to a resilient defense against
                    evolving cyber threats.
                  </List>
                </div>

                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>Emsisoft Endpoint Security</h2>
                  <List>
                    Harness the power of Emsisoft for effective endpoint
                    protection and malware prevention.
                  </List>
                  <List>
                    Emsisoft's behavior-based analysis and dual-engine scanning
                    enhance threat detection and response capabilities.
                  </List>
                </div>

                {/* <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>User Identity Verification</h2>
                  <List>
                    Implement user-based policies for a more secure and
                    personalized firewall protection.
                  </List>
                  <List>
                    Ensure that access rights are granted based on verified user
                    identities, enhancing overall network security.
                  </List>
                </div>

                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>Real-Time Threat Intelligence</h2>
                  <List>
                    Stay ahead of emerging threats with real-time threat
                    intelligence feeds.
                  </List>
                  <List>
                    The NGFW dynamically adapts to evolving cyber threats,
                    providing a proactive defense mechanism.
                  </List>
                </div> */}
              </div>

              {/* <div
                className={"mx-auto mb-12 lg:mb-0 w-[50%] lg:w-[30%] h-[90%]"}
              >
                <img src={Endpoint2} alt="Our Expertise" draggable={"false"} />
              </div> */}
            </div>
            <div className="flex justify-center items-center w-full h-[10rem] lg:h-[15rem] rounded-lg">
              <img
                src={Endpoint3}
                alt="End point Security"
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
