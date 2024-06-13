import React from "react";
import List from "../../List/List";
import Classroom2 from "../../../assets/solutions/Classroom2.jpg";
import Classroom3 from "../../../assets/solutions/Classroom3.jpg";

const Content = () => {
  return (
    <>
      <section className="container font-primary text-primary">
        <div className={"my-8 gap-4"}>
          <section className="w-full">
            <p className={"text-secondary pt-4"}>
              At IQSPL, we recognize the importance of seamless communication
              and collaboration in today's fast-paced business environment.
              That's why we're excited to introduce our state-of-the-art Digital
              Classrooms & Conference Rooms, designed to empower organizations
              with advanced audio-visual (AV) solutions.
            </p>

            <h1 className="text-2xl my-6 font-semibold">
              Enhanced Learning and Collaboration
            </h1>
            <div className="text-secondary py-6">
              Our Digital Classrooms & Conference Rooms combine cutting-edge
              technology with intuitive design to create dynamic spaces for
              learning, collaboration, and communication. Whether you're hosting
              a virtual meeting, conducting a training session, or facilitating
              a brainstorming session, our solutions are tailored to meet your
              specific needs.
            </div>

            <div className={"flex my-6 gap-4 flex-col-reverse lg:flex-row"}>
              <div className={"w-full lg:w-[70%] h-auto"}>
                <h1 className={"text-2xl font-semibold"}>
                  Key Features and Benefits
                </h1>
                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>Interactive Learning Tools </h2>
                  <List>
                    Our solution integrates interactive displays, touchscreens,
                    and interactive whiteboards to facilitate hands-on learning
                    experiences. From collaborative problem-solving to
                    interactive presentations, these tools empower instructors
                    and learners alike to actively engage with course material.
                  </List>
                </div>
                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>Immersive Multimedia Experience </h2>
                  <List>
                    With high-definition displays, immersive audio systems, and
                    advanced presentation tools, our solutions deliver an
                    unparalleled multimedia experience. From crystal-clear video
                    conferencing to dynamic presentations, every interaction is
                    brought to life with stunning clarity and precision.
                  </List>
                </div>
                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>Flexible Configuration Options </h2>
                  <List>
                    Whether you're outfitting a small meeting room or a large
                    conference hall, our solutions offer flexible configuration
                    options to suit your space and requirements. From integrated
                    video walls to mobile collaboration stations, we have the
                    expertise to design and implement solutions that fit your
                    unique needs.
                  </List>
                </div>
                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>
                    Seamless Integration with Collaboration Tools
                  </h2>
                  <List>
                    Our solutions seamlessly integrate with a wide range of
                    collaboration tools and platforms, including video
                    conferencing software, document sharing platforms, and
                    interactive whiteboards. This integration streamlines
                    communication and ensures that every participant can
                    actively contribute to the discussion.
                  </List>
                </div>
                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>
                    Remote Participation and Accessibility
                  </h2>
                  <List>
                    With remote participation becoming increasingly common, our
                    solutions offer robust features for virtual collaboration
                    and accessibility. Whether participants are joining from
                    across the globe or working from home, they can seamlessly
                    connect to the meeting or classroom environment from any
                    device.
                  </List>
                </div>
                <div className={"my-4 font-semibold"}>
                  <h2 className={"pb-2.5"}>
                    Enhanced Productivity and Engagement
                  </h2>
                  <List>
                    By fostering collaboration, communication, and creativity,
                    our solutions enhance productivity and engagement among
                    participants. Whether you're conducting a training session,
                    hosting a client presentation, or facilitating a team
                    meeting, our solutions empower you to achieve your goals
                    more effectively.
                  </List>
                </div>

                <div className="pb-8">
                  <h1 className={"text-2xl my-6 font-semibold"}>
                    Why Choose IQSPL?
                  </h1>

                  <div className={"my-2 font-semibold"}>
                    <h2 className={"pb-1.5"}>Expertise and Innovation</h2>
                    <List>
                      With years of experience as a leading system integrator,
                      we have the expertise to design, implement, and support
                      innovative AV solutions that meet your unique needs.
                    </List>
                  </div>
                  <div className={"my-2 font-semibold"}>
                    <h2 className={"pb-1.5"}>Commitment to Excellence</h2>
                    <List>
                      We are committed to delivering excellence in everything we
                      do. From initial consultation to ongoing support, we
                      prioritize customer satisfaction and strive to exceed your
                      expectations at every turn.
                    </List>
                  </div>
                  <div className={"my-2 font-semibold"}>
                    <h2 className={"pb-1.5"}>Tailored Solutions</h2>
                    <List>
                      We understand that every organization is unique. That's
                      why we work closely with you to understand your goals,
                      requirements, and challenges, and develop customized
                      solutions that address your specific needs.{" "}
                    </List>
                  </div>
                </div>

                <h1 className="text-2xl  font-semibold">
                  Transform Your Meeting and Learning Spaces Today
                </h1>
                <div className="text-secondary py-6">
                  Ready to transform your meeting and learning spaces into
                  dynamic hubs of collaboration and communication? Contact us
                  today to learn more about our Digital Classrooms & Conference
                  Rooms solutions. Together, let's create spaces where ideas
                  thrive, connections flourish, and success is inevitable.
                </div>
              </div>

              <div
                className={"mx-auto mb-12 lg:mb-0 w-[50%] lg:w-[30%] h-[90%]"}
              >
                <img src={Classroom2} alt="Training Room" draggable={"false"} />
              </div>
            </div>
            <div className="flex justify-center items-center w-full h-[10rem] lg:h-[15rem] rounded-lg">
              <img
                src={Classroom3}
                alt="Training Room"
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
