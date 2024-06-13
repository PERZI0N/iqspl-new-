import React from "react";

import List from "../List/List";

import ExpertiseImage1 from "../../assets/solutions-information-security-expertise1.png";
import ExpertiseImage2 from "../../assets/solutions-information-security-expertise2.png";
import ExpertiseImage3 from "../../assets/solutions-information-security-expertise3.png";

const Content = () => {
  return (
    <>
      <section className="container font-primary text-primary">
        <div className={"my-8 flex gap-4"}>
          <section className={"w-full"}>
            <div>
              <h1 className={"text-4xl font-semibold"}>
                Next Generation Firewall
              </h1>
              <p className={"text-secondary pt-4"}>
                In an era where cyber threats are evolving rapidly, traditional
                firewalls may fall short in providing adequate protection. Enter
                the Next-Generation Firewall (NGFW). At IQSPL, we specialize in
                delivering advanced Next-Generation Firewall solutions that go
                beyond conventional security measures, ensuring robust
                protection for your digital assets.
              </p>

              <div className={"flex my-6 gap-4 flex-col-reverse lg:flex-row"}>
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
                      The NGFW includes an Intrusion Prevention System to
                      actively block malicious activities.
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
                      Implement security protocols to protect against
                      unauthorized access and cyber threats.
                    </List>
                  </div>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>User Identity Verification</h2>
                    <List>
                      Implement user-based policies for a more secure and
                      personalized firewall protection.
                    </List>
                    <List>
                      Ensure that access rights are granted based on verified
                      user identities, enhancing overall network security.
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
              <h1 className={"text-4xl font-semibold"}>Endpoint Security</h1>
              <p className={"text-secondary pt-4"}>
                At IQSPL, we specialize in delivering cutting-edge Endpoint
                Security services to fortify every device in your digital
                landscape. Safeguard your organization against evolving cyber
                threats with our proactive and comprehensive security solutions.
                Trust us to protect your endpoints, ensuring a resilient defense
                in today's dynamic cybersecurity landscape.
              </p>

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
                      Emsisoft's behavior-based analysis and dual-engine
                      scanning enhance threat detection and response
                      capabilities.
                    </List>
                  </div>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>User Identity Verification</h2>
                    <List>
                      Implement user-based policies for a more secure and
                      personalized firewall protection.
                    </List>
                    <List>
                      Ensure that access rights are granted based on verified
                      user identities, enhancing overall network security.
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
              <h1 className={"text-4xl font-semibold"}>
                Data backup Disaster Recovery{" "}
              </h1>
              <p className={"text-secondary pt-4"}>
                In the digital age, safeguarding your data is non-negotiable. At
                IQSPL, we understand the critical importance of having robust
                Backup and Disaster Recovery solutions in place. Our services
                are designed to ensure the resilience of your business,
                providing peace of mind in the face of unforeseen events.
              </p>

              <div className={"flex my-6 gap-4 flex-col-reverse lg:flex-row"}>
                <div className={"w-full lg:w-[70%] h-auto"}>
                  <h1 className={"text-2xl font-semibold"}>Our Expertise</h1>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>Comprehensive Data Backup</h2>
                    <List>
                      Implement reliable and automated data backup solutions
                      tailored to your business needs.
                    </List>
                    <List>
                      Regular backups of critical data to secure on-premise or
                      cloud-based storage.
                    </List>
                  </div>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>Rapid Disaster Recovery</h2>
                    <List>
                      Minimize downtime with our rapid disaster recovery
                      solutions.
                    </List>
                    <List>
                      Swift restoration of systems and data to ensure business
                      continuity in the aftermath of a disaster.
                    </List>
                  </div>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>Redundancy and Data Integrity </h2>
                    <List>
                      Utilize redundancy measures to safeguard against data
                      loss.
                    </List>
                    <List>
                      Implement thorough data integrity checks to ensure the
                      reliability of backed-up information.
                    </List>
                  </div>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>
                      Continuous Monitoring and Testing
                    </h2>
                    <List>
                      Continuous monitoring of backup systems to identify and
                      address potential issues.
                    </List>
                    <List>
                      Regular testing of disaster recovery processes to validate
                      their effectiveness in real-world scenarios.
                    </List>
                  </div>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>Scalable Solutions</h2>
                    <List>
                      Our Backup and Disaster Recovery solutions scale with your
                      business growth.
                    </List>
                    <List>
                      Adapt to changing data volumes and evolving business needs
                      without compromising on protection.
                    </List>
                  </div>

                  <h1 className={"text-2xl font-semibold"}>
                    Our key offerings include:
                  </h1>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>Acronis Cyber Protection</h2>
                    <List>
                      Ensure the integrity and availability of your critical
                      data with Acronis Cyber Protection solutions.
                    </List>
                    <List>
                      Comprehensive data backup, secure file sharing, and
                      cutting-edge cyber protection measures to safeguard your
                      digital assets.
                    </List>
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
