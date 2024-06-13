import React from "react";
import List from "../../List/List";
import NextGenImage1 from "../../../assets/solutions/Next-Gen-2.png";
import NextGenImage2 from "../../../assets/solutions/Next-Gen-3.jpg";

const Content = () => {
  return (
    <>
      <section className="container font-primary text-primary">
        <div className={"my-8 gap-4"}>
          <section className="w-full">
            <p className={"text-secondary pt-4"}>
              In an era where cyber threats are evolving rapidly, traditional
              firewalls may fall short in providing adequate protection. Enter
              the Next-Generation Firewall (NGFW). At IQSPL, we specialize in
              delivering advanced Next-Generation Firewall solutions that go
              beyond conventional security measures, ensuring robust protection
              for your digital assets.
            </p>

            <div className={"flex my-6 gap-4 flex-col"}>
              <div className={"w-full lg:w-[70%] h-auto"}>
                <h1 className={"text-2xl font-semibold"}>Our Expertise</h1>

                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>Advanced Threat Detection</h2>
                  <List>
                    Our Next-Generation Firewall is equipped with advanced
                    threat detection capabilities.
                  </List>
                  <List>
                    Identify and mitigate sophisticated threats, including
                    malware, ransomware, and zero-day attacks.
                  </List>
                </div>

                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>
                    Intrusion Prevention System (IPS)
                  </h2>
                  <List>
                    The NGFW includes an Intrusion Prevention System to actively
                    block malicious activities.
                  </List>
                  <List>
                    Proactively identify and prevent unauthorized access
                    attempts and potential security breaches.
                  </List>
                </div>

                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>
                    Network Configuration and Optimization
                  </h2>
                  <List>
                    Configure and optimize network settings for maximum
                    efficiency.
                  </List>
                  <List>
                    Implement security protocols to protect against unauthorized
                    access and cyber threats.
                  </List>
                </div>

                <div className={"my-4 font-semibold"}>
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
                </div>

                </div>

                <div
                className={"mx-auto my-12 lg:mb-0 w-[50%] lg:w-[30%] h-[90%]"}
              >
                <img
                  src={NextGenImage1}
                  alt="Next Genereation Firewall"
                  draggable={"false"}
                />
              </div>

                <div className="w-full mt-6 lg:w-[70%] h-auto">

                <h1 className={"text-2xl font-semibold"}>
                  Empower Your Network Security with IQSPL
                </h1>
                <div className="text-secondary py-6">
                  Upgrade your network security to the next level with IQSPL's
                  Next-Generation Firewall solutions. Contact us today to
                  discuss how our advanced security measures can fortify your
                  organization against the ever-evolving landscape of cyber
                  threats.
                </div>
                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>SOPHOS</h2>
                  <List>
                    SOPHOS is a prominent provider of cybersecurity solutions,
                    offering antivirus software, firewalls, endpoint protection,
                    encryption, and secure web gateways. Their products aim to
                    defend against malware, ransomware, and other cyber threats.
                  </List>
                </div>

                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>WatchGuard</h2>
                  <List>
                    WatchGuard specializes in network security, providing
                    firewalls, VPN solutions, intrusion prevention systems, and
                    secure Wi-Fi. Their products ensure comprehensive protection
                    for networks against various cyber threats.
                  </List>
                </div>

                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>Fortinet</h2>
                  <List>
                    Fortinet is a global leader offering integrated
                    cybersecurity solutions. Their portfolio includes firewalls,
                    antivirus solutions, secure access solutions, and network
                    security appliances, catering to diverse security needs.
                  </List>
                </div>

                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>Ubiquiti</h2>
                  <List>
                    Ubiquiti specializes in networking and wireless solutions,
                    offering products like access points, routers, switches, and
                    surveillance equipment. Known for their simplicity and
                    scalability, Ubiquiti products are popular for creating
                    robust and efficient network infrastructures.
                  </List>
                </div>

                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>HP</h2>
                  <List>
                    HP's wireless access points provide secure and
                    high-performance wireless connectivity. These devices are
                    designed to create robust and scalable wireless networks,
                    supporting the increasing demand for mobility and
                    connectivity in modern workplaces.
                  </List>
                </div>
              </div>

              {/* <div
                className={"mx-auto mb-12 lg:mb-0 w-[50%] lg:w-[30%] h-[90%]"}
              >
                <img
                  src={NextGenImage1}
                  alt="Next Genereation Firewall"
                  draggable={"false"}
                />
              </div> */}
            </div>
            <div className="flex justify-center items-center w-full h-[10rem] lg:h-[15rem] rounded-lg">
              <img
                src={NextGenImage2}
                alt="Next Generation Fireball"
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
