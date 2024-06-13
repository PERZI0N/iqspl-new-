import React from "react";

import List from "../List/List";

import productEvent2 from "../../assets/product/productEvent2.jpg";

const Content = () => {
  return (
    <>
      <section className="container text-primary">
        <div className={"w-full h-auto py-12"}>
          <h1 className={"text-2xl font-semibold"}>Key Features:</h1>
          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Effortless Planning</h2>
            <List>
              Streamline your event planning process with our intuitive and
              feature-rich web applications. From scheduling and venue
              management to participant registration and ticketing, our
              solutions ensure every detail is seamlessly organized.
            </List>
          </div>

          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Customizable Websites</h2>
            <List>
              Make a lasting impression with event-specific websites that
              reflect the theme and identity of your occasion. Our customizable
              designs allow you to showcase event details, speakers, sponsors,
              and more, creating an immersive digital experience for your
              audience.
            </List>
          </div>

          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Robust Registration Systems</h2>
            <List>
              Simplify participant registration with our user-friendly systems.
              Capture attendee information, process payments securely, and
              manage RSVPs effortlessly, ensuring a smooth and organized
              registration process.
            </List>
          </div>

          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Engaging Attendee Experience</h2>
            <List>
              Enhance the attendee experience with interactive features. From
              live polls and Q&A sessions to virtual networking opportunities,
              our event management solutions create an engaging environment that
              goes beyond the physical boundaries of the venue.
            </List>
          </div>
          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Real-time Analytics</h2>
            <List>
              Gain valuable insights into your event's performance with real-time
              analytics. Monitor registrations, track attendee engagement, and
              assess the success of your event, empowering you to make informed
              decisions and improvements for future occasions.
            </List>
          </div>
        </div>

        <div className="pb-12">
          <h1 className={"text-2xl font-semibold"}>
            Why Choose IQSPL for Event Management?
          </h1>

          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>Tailored Solutions</h2>
            <List>
              Our event management solutions are tailored to meet the specific
              needs of your event, whether it's a corporate conference, a
              product launch, or a social gathering
            </List>
          </div>
          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>Scalability</h2>
            <List>
              From small gatherings to large-scale conferences, our solutions
              scale seamlessly to accommodate events of all sizes
            </List>
          </div>
          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>Expert Support</h2>
            <List>
              Our dedicated support team is committed to ensuring the success of
              your event. From initial setup to day-of support, we are here to
              assist you every step of the way.
            </List>
          </div>
        </div>

        <div className="text-secondary text-center pb-12">
          Elevate your events to new heights with IQSPL. Our Event Management
          Web Applications and Websites are more than just tools—they're
          catalysts for unforgettable experiences. Contact us today for a
          personalized demonstration and embark on a journey to redefine the way
          you manage and celebrate events.
        </div>

        <div className="flex justify-center items-center w-full h-[10rem] lg:h-[15rem] rounded-lg">
          <img
            src={productEvent2}
            alt="SD - WAN"
            draggable={"false"}
            className="w-full h-[10rem] lg:h-[15rem] rounded-lg"
          />
        </div>
      </section>
    </>
  );
};

export default Content;
