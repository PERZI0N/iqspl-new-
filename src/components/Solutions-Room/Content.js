import React from "react";

import List from "../List/List";

import ExpertiseImage1 from "../../assets/solutions-room-expertise1.png";
import ExpertiseImage2 from "../../assets/solutions-room-expertise2.png";
import ExpertiseImage3 from "../../assets/solutions-room-expertise3.png";

const Content = () => {
  return (
    <>
      <section className="container font-primary text-primary">
        <div className={"my-8 flex gap-4"}>
          {/* <div className={"p-6 w-1/4 bg-bg-secondary rounded-lg"}>
            <h1 className={"font-semibold pb-2.5 text-lg"}>Content</h1>
            <ul>
              <li
                className={
                  "text-secondary pb-1.5 hover:underline underline-offset-4 cursor-pointer"
                }
              >
                Interactive Training Rooms / Digital classroom
              </li>
              <li
                className={
                  "text-secondary pb-1.5 hover:underline underline-offset-4 cursor-pointer"
                }
              >
                AV Design, Implementation - AV Integration
              </li>

              <li
                className={
                  "text-secondary pb-1.5 hover:underline underline-offset-4 cursor-pointer"
                }
              >
                Live Streaming Solutions
              </li>
            </ul>
          </div> */}

          <section className={"w-full"}>
            <div>
              <h1 className={"text-4xl font-semibold"}>
                Interactive Training Rooms / Digital classroom
              </h1>
              <p className={"text-secondary pt-4"}>
                The evolution of interactive training technology is reshaping
                the educational landscape, impacting both traditional classrooms
                and corporate training venues. This transformative shift is
                fostering increased collaboration, flexibility, and
                interactivity within learning processes. IQSPL Interactive
                Training Rooms enable educational institutions and faculty to
                harness the potential of this evolving technology, meeting the
                rising expectations of students and trainees, and establishing
                dynamic hybrid learning environments. These cutting-edge
                training rooms are instrumental for specialized learning
                institutions and corporations, enhancing the effectiveness of
                their training programs and initiatives.
              </p>

              <div className={"flex my-6 gap-4 flex-col-reverse lg:flex-row"}>
                <div className={"w-full lg:w-[70%] h-auto"}>
                  <h1 className={"text-2xl font-semibold"}>Our Offerings</h1>

                  <div className={"my-4 font-semibold"}>
                    <List>
                      Assistance in design, installation, integration and
                      support for all your collaboration spaces.
                    </List>
                    <List>
                      Highly customized solutions that fit your teams
                      collaboration requirements perfectly, and can be supported
                      almost anywhere.
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
                AV Design, Implementation - AV Integration
              </h1>
              <p className={"text-secondary pt-4"}>
                Elevate your audiovisual experience with our comprehensive AV
                System Integration services at IQSPL. We specialize in
                seamlessly integrating cutting-edge audio and visual
                technologies to create immersive environments for communication,
                collaboration, and entertainment.
              </p>

              <div className={"flex my-6 gap-4 flex-col-reverse lg:flex-row"}>
                <div className={"w-full lg:w-[70%] h-auto"}>
                  <h1 className={"text-2xl font-semibold"}>Our Expertise</h1>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>Custom Design Solutions</h2>
                    <List>
                      Tailor AV solutions to meet the unique needs of your
                      space, whether it's a boardroom, auditorium, or classroom.
                    </List>
                    <List>
                      Design systems that enhance communication and engagement
                      while complementing the aesthetics of the environment.
                    </List>
                  </div>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>Multi-Device Connectivity</h2>
                    <List>
                      Integrate diverse audiovisual devices, including displays,
                      projectors, audio systems, AV mixers, HD cameras, MICs,
                      Digital podium and collaboration tools.
                    </List>
                    <List>
                      Enable seamless connectivity for a variety of devices to
                      enhance user flexibility and convenience.
                    </List>
                  </div>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>Unified Control Systems</h2>
                    <List>
                      Implement unified control systems for intuitive operation
                      of multiple AV components from a centralized interface.
                    </List>
                    <List>
                      Streamline management and operation for an enhanced user
                      experience.
                    </List>
                  </div>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>Video Conferencing Solutions</h2>
                    <List>
                      Facilitate high-quality video conferencing with integrated
                      solutions that connect remote participants seamlessly.
                    </List>
                    <List>
                      Enhance virtual collaboration and communication across
                      geographically dispersed teams.
                    </List>
                  </div>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>
                      Scalability and Future-Proofing
                    </h2>
                    <List>
                      Design systems that are scalable to accommodate future
                      technology upgrades and evolving business needs
                    </List>
                    <List>
                      Ensure that your AV infrastructure remains cutting-edge
                      and relevant over time.
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
                Live Streaming Solutions{" "}
              </h1>
              <p className={"text-secondary pt-4"}>
                Bring your events, presentations, and content to a global
                audience with our advanced Live Streaming Solutions at IQSPL.
                Our expertise lies in delivering seamless and high-quality live
                streaming experiences, providing a platform for enhanced
                engagement and outreach.
              </p>

              <div className={"flex my-6 gap-4 flex-col-reverse lg:flex-row"}>
                <div className={"w-full lg:w-[70%] h-auto"}>
                  <h1 className={"text-2xl font-semibold"}>Our Expertise</h1>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>High-Quality Streaming</h2>
                    <List>
                      Deliver high-definition video and audio streaming for a
                      captivating and immersive viewer experience.
                    </List>
                    <List>
                      Ensure smooth playback across various devices and internet
                      connections.
                    </List>
                  </div>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>
                      Customizable Streaming Platforms
                    </h2>
                    <List>
                      Create customizable streaming platforms with branded
                      interfaces to maintain a consistent visual identity.
                    </List>
                    <List>
                      Incorporate interactive elements, such as chat features
                      and audience engagement tools.
                    </List>
                  </div>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>Multi-Platform Distribution </h2>
                    <List>
                      Simultaneously stream content across multiple platforms,
                      including websites, social media, and dedicated streaming
                      portals.
                    </List>
                    <List>
                      Expand your reach and maximize audience engagement with
                      diverse distribution channels.
                    </List>
                  </div>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>Secure Content Delivery</h2>
                    <List>
                      Implement robust security measures to protect your
                      live-streamed content from unauthorized access.
                    </List>
                    <List>
                      Ensure secure and encrypted delivery to maintain the
                      integrity of sensitive broadcasts.
                    </List>
                  </div>

                  <div className={"my-4 font-semibold"}>
                    <h2 className={"pb-2.5"}>Real-Time Analytics</h2>
                    <List>
                      Access real-time analytics and viewer insights to
                      understand audience behavior and optimize future live
                      streaming events.
                    </List>
                    <List>
                      Enhance content strategy and delivery based on valuable
                      data.
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
