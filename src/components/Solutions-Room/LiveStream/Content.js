import React from "react";
import List from "../../List/List";
import LiveStream2 from "../../../assets/solutions/LiveStream2.jpg";
import LiveStream3 from "../../../assets/solutions/LiveStream3.jpg";

const Content = () => {
  return (
    <>
      <section className="container font-primary text-primary">
        <div className={"my-8 gap-4"}>
          <section className="w-full">
          <p className={"text-secondary pt-4"}>
                Bring your events, presentations, and content to a global
                audience with our advanced Live Streaming Solutions at IQSPL.
                Our expertise lies in delivering seamless and high-quality live
                streaming experiences, providing a platform for enhanced
                engagement and outreach.
              </p>

              <div className={"flex my-6 gap-4 flex-col-reverse lg:flex-row"}>
                <div className={"w-full lg:w-[70%] h-auto"}>
                  <h1 className={"text-2xl font-semibold"}>Key Features of Our Live Streaming Solutions</h1>

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
                    src={LiveStream2}
                    alt="Live Stream"
                    draggable={"false"}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center w-full h-[10rem] lg:h-[15rem] rounded-lg">
              <img
                src={LiveStream3}
                alt="Live Stream"
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
