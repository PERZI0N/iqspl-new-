import React from "react";
import List from "../../List/List";
import DataBackup2 from "../../../assets/solutions/DataBackup2.jpg";
import DataBackup3 from "../../../assets/solutions/DataBackup3.jpg";

const Content = () => {
  return (
    <>
      <section className="container font-primary text-primary">
        <div className={"my-8 gap-4"}>
          <section className="w-full">
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
                    src={DataBackup2}
                    alt="Data backup"
                    draggable={"false"}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center w-full h-[10rem] lg:h-[15rem] rounded-lg ">
              <img
                src={DataBackup3}
                alt="Data backup"
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
