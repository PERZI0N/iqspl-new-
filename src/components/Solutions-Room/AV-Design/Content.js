import React from "react";
import List from "../../List/List";
import AVDesign2 from "../../../assets/solutions/AVDesign2.jpg";
import AVDesign3 from "../../../assets/solutions/AVDesign3.png";

const Content = () => {
  return (
    <>
      <section className="container font-primary text-primary">
        <div className={"my-8 gap-4"}>
          <section className="w-full">
            <p className={"text-secondary pt-4"}>
              Elevate your audiovisual experience with our comprehensive AV
              System Integration services at IQSPL. We specialize in seamlessly
              integrating cutting-edge audio and visual technologies to create
              immersive environments for communication, collaboration, and
              entertainment.
            </p>

            <div className="flex justify-center my-10">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/W6Ndz3UCAGs?si=Y2VDx0Bl9naLAgzL"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>

            <div className={"flex my-6 gap-4 flex-col-reverse lg:flex-row"}>
              <div className={"w-full lg:w-[70%] h-auto"}>
                <h1 className={"text-2xl font-semibold"}>
                  Key Features of Our AV System Integration Services
                </h1>

                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>Custom Design Solutions</h2>
                  <List>
                    Tailor AV solutions to meet the unique needs of your space,
                    whether it's a boardroom, auditorium, or classroom.
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
                    Implement unified control systems for intuitive operation of
                    multiple AV components from a centralized interface.
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
                  <h2 className={"pb-2.5"}>Scalability and Future-Proofing</h2>
                  <List>
                    Design systems that are scalable to accommodate future
                    technology upgrades and evolving business needs
                  </List>
                  <List>
                    Ensure that your AV infrastructure remains cutting-edge and
                    relevant over time.
                  </List>
                </div>
                <div className="text-secondary py-6">
                  Transform your spaces with IQSPL's AV System Integration
                  services. Contact us today to explore how our solutions can
                  enhance your audiovisual capabilities.
                </div>
              </div>

              <div
                className={"mx-auto mb-12 lg:mb-0 w-[50%] lg:w-[30%] h-[90%]"}
              >
                <img src={AVDesign2} alt="AV Design" draggable={"false"} />
              </div>
            </div>
            <div className="flex justify-center items-center w-full h-[10rem] lg:h-[15rem] rounded-lg">
              <img
                src={AVDesign3}
                alt="AV Design"
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
