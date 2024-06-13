import React from "react";

import logo1 from "../../assets/product-video-logo1.png";
import logo2 from "../../assets/product-video-logo2.png";
import logo3 from "../../assets/product-video-logo3.png";
import logo4 from "../../assets/product-video-logo4.png";
import logo5 from "../../assets/product-video-logo5.png";
import card3 from "../../assets/product-video-card2.PNG";
import List from "../List/List";

const ChooseUs = () => {
  return (
    <>
      <section className="container text-primary py-12">
        <h1 className={"text-2xl font-semibold text-center"}>
          Our Key Offerings
        </h1>
        {/* <div>
          <div className={"py-8 pb-4 flex flex-wrap gap-4 justify-center"}>
            <img
              src={logo1}
              alt={`PeopleLink`}
              className={"w-full lg:w-[20rem] h-[12rem]"}
              draggable={false}
            />
          </div>
          <List>
            Leverage Peoplelink's advanced video conferencing solutions for
            immersive and reliable virtual meetings.
          </List>
          <List>
            Enjoy a range of features to enhance communication and collaboration
            across your organization.
          </List>
        </div> */}

        <div className={"pt-4 my-4 font-semibold"}>
          <h2 className={"pb-2.5 text-xl"}>Peoplelink</h2>
          <div className="py-2 pb-4 flex flex-wrap gap-4 justify-center">
            <img
              src={logo1}
              alt={`PeopleLink`}
              className={"w-full lg:w-[20rem] h-[12rem]"}
              draggable={false}
            />
          </div>
          <List>
            Leverage Peoplelink's advanced video conferencing solutions for
            immersive and reliable virtual meetings.
          </List>
          <List>
            Enjoy a range of features to enhance communication and collaboration
            across your organization.
          </List>
        </div>

        <div className={"pt-4 my-4 font-semibold"}>
          <h2 className={"pb-2.5 text-xl"}>Polycom</h2>
          <div className="py-6 pb-4 flex flex-wrap gap-4 justify-center">
            <img
              src={logo2}
              alt={`Polycom`}
              className={"w-full lg:w-[20rem] h-[12rem]"}
              draggable={false}
            />
          </div>
          <List>
            Benefit from Polycom's renowned audio and video solutions, known for
            their exceptional quality and reliability.
          </List>
          <List>
            Elevate your virtual meetings with Polycom's innovative conferencing
            technology.{" "}
          </List>
        </div>

        <div className={"pt-4 my-4 font-semibold"}>
          <h2 className={"pb-2.5 text-xl"}>Zoom</h2>
          <div className="py-6 pb-4 flex flex-wrap gap-4 justify-center">
            <img
              src={logo3}
              alt={`Zoom`}
              className={"w-full lg:w-[20rem] h-[12rem]"}
              draggable={false}
            />
          </div>
          <List>
            Unlock the full potential of virtual collaboration with Zoom's
            user-friendly and feature-rich video conferencing platform.{" "}
          </List>
          <List>
            Host virtual meetings, webinars, and collaborative sessions
            effortlessly with Zoom.{" "}
          </List>
        </div>

        <div className={"pt-4 my-4 font-semibold"}>
          <h2 className={"pb-2.5 text-xl"}>Microsoft Teams</h2>
          <div className="py-6 pb-4 flex flex-wrap gap-4 justify-center">
            <img
              src={logo4}
              alt={`Microsoft Teams`}
              className={"w-full lg:w-[20rem] h-[12rem]"}
              draggable={false}
            />
          </div>
          <List>
            Seamlessly integrate Microsoft Teams into your workflow for unified
            communication, collaboration, and productivity.{" "}
          </List>
          <List>
            Enjoy the convenience of chat, video calls, file sharing, and
            integrated Office 365 applications in one platform.{" "}
          </List>
        </div>

        <div className={"py-10 my-4 font-semibold"}>
          <h2 className={"pb-2.5 text-xl"}>Cisco Webex</h2>
          <div className="py-6 pb-4 flex flex-wrap gap-4 justify-center">
            <img
              src={logo5}
              alt={`Cisco Webex`}
              className={"w-full lg:w-[20rem] h-[12rem]"}
              draggable={false}
            />
          </div>
          <List>
            Experience secure and scalable video conferencing with Cisco Webex,
            offering advanced features for virtual meetings and events.{" "}
          </List>
          <List>
            Connect with teams, partners, and clients with Cisco's trusted
            conferencing solutions.{" "}
          </List>
        </div>

        <div
          className="relative w-full h-[10rem] lg:h-[20rem] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center rounded-xl"
          style={{ backgroundImage: `url(${card3})` }}
        ></div>
      </section>
    </>
  );
};

export default ChooseUs;
