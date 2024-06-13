import React from "react";

import List from "../List/List";

// import ExpertiseImage from "../../assets/product-video-card1.PNG";

const OurExpertise = () => {
  return (
    <>
      <section className="container text-primary">
        <div className={"flex flex-col-reverse lg:flex-row"}>
          <div className={"w-full lg:w-[70%] h-auto"}>
            <h1 className={"text-2xl font-semibold"}>
              Key Features of Our Video Conference System:
            </h1>

            <div className={"my-4 font-semibold"}>
              <h2 className={"pb-2.5"}>HD Video and Audio Quality</h2>
              <List>
                Enjoy high-definition video and crystal-clear audio for a
                lifelike and immersive conferencing experience.
              </List>
              <List>
                Minimize communication barriers with superior audiovisual
                quality.
              </List>
            </div>

            <div className={"my-4 font-semibold"}>
              <h2 className={"pb-2.5"}>Multi-Platform Compatibility</h2>
              <List>
                Ensure compatibility with various devices and platforms,
                allowing participants to join meetings from desktops, laptops,
                tablets, and mobile devices.
              </List>
              <List>
                Enhance flexibility and accessibility for remote teams and
                on-the-go professionals.
              </List>
            </div>

            <div className={"my-4 font-semibold"}>
              <h2 className={"pb-2.5"}>Virtual Meeting Rooms</h2>
              <List>
                Create virtual meeting rooms with advanced features such as
                screen sharing, file collaboration, and interactive whiteboards.
              </List>
              <List>
                Foster collaboration and productivity during virtual meetings.
              </List>
            </div>

            <div className={"my-4 font-semibold"}>
              <h2 className={"pb-2.5"}>Security and Encryption</h2>
              <List>
                Implement robust security measures, including end-to-end
                encryption, to protect sensitive discussions and information.
              </List>
              <List>Ensure a secure and private conferencing environment.</List>
            </div>

            <div className={"my-4 font-semibold"}>
              <h2 className={"pb-2.5"}>Scalability and Flexibility</h2>
              <List>
                Scale the system to accommodate varying meeting sizes, from
                one-on-one discussions to large-scale conferences.
              </List>
              <List>
                Adapt to the dynamic needs of your organization with flexible
                deployment options.
              </List>
            </div>
          </div>

          {/* <div className={"mx-auto mb-12 lg:mb-0 w-[50%] lg:w-[30%] h-[90%]"}>
            <img src={ExpertiseImage} alt="Our Expertise" draggable={"false"} />
          </div> */}
        </div>
      </section>
    </>
  );
};

export default OurExpertise;
