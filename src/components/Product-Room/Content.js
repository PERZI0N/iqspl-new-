import React from "react";

import List from "../List/List";

import Card2 from "../../assets/product-room-card2.jpg";
// import Card3 from "../../assets/product-room-card3.jpg";
import Card4 from "../../assets/product-room-card4.jpg";
import Card5 from "../../assets/product-room-card5.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="container mb-8 lg:my-16 text-primary">
        <div className="w-full pb-12 py-2">
          <h1 className="text-2xl font-semibold text-center py-4">
            Our Expertise
          </h1>
          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-2.5"}>LIVE AND INTERACTIVE</h2>
            <List>
              With Roombr App, your room and your interactive wall are
              accessible to the world. Makes your room a shared knowledge space
              and makes collaboration possible (and fun).
            </List>
          </div>

          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-2.5"}>SYNCHRONOUS AND ASYNCHRONOUS</h2>
            <List>
              Roombr App allows you to collaborate live. But it goes a step
              beyond and allows you to collaborate through chat and sharing of
              images and videos during and after the end of the live session.
            </List>
          </div>

          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-2.5"}>RECORD</h2>
            <List>
              Record and share it with student. Recorded content can be stored
              locally or in the cloud. It can be accessed from any where any
              time.
            </List>
          </div>

          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-2.5"}>ARCHIVE AND ETERNIZE</h2>
            <List>
              Every video can be archived for future use. You can always go back
              to it when you need to. Every time you go back and add
              information, you enhance the discussion.
            </List>
          </div>

          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-2.5"}>SHARE AND ENHANCE</h2>
            <List>
              Once the video is archived, you can always go back to it and
              continue the discussion asynchronously. Every time you add to the
              discussion, the quality of content keeps improving.
            </List>
          </div>

          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-2.5"}>INFINITE KNOWLEDGE SPACE</h2>
            <List>
              Roombr App not only enables collaboration, it enables enhanced
              collaboration like never before. Once you switch on Roombr, the
              content you create keeps enhancing in value.
            </List>
          </div>
        </div>

        {/* <div className="flex justify-center">
          <img
            src={Card3}
            alt="Room BR"
            draggable={"false"}
            className="relative w-[38rem] h-[20rem] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center rounded-xl"
          />
        </div> */}

        <div className="py-8">
          <h1 className="text-2xl font-semibold text-center py-4">
            ROOMBR – A NEW PERSPECTIVE ON EDUCATION
          </h1>

          <List>BLENDED CLASSROOMS</List>
          <List>REMEDIAL LEARNING</List>
          <List>REMEDIAL OUTCOMES</List>
          <List>24/7 ROOMBR SCHOOL</List>
          <List>MARKET YOUR CONTENT</List>
          <List>BETTER TRAINING, BETTER STAFFING, BETTER EARNING</List>
        </div>

        <div className="flex justify-center">
          <img
            src={Card4}
            alt="Room BR"
            draggable={"false"}
            className="relative w-[38rem] h-[20rem] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center rounded-xl"
          />
        </div>

        <div className="pt-12 flex flex-col items-center">
          <h1 className="text-2xl font-semibold text-center py-4">
            Roombr App an app that transforms conferencing and collaboration
          </h1>
          <p
            className={
              "text-secondary w-3/4 text-justify lg:text-center text-sm lg:text-base "
            }
          >
            Roombr app that helps you connect, conference and collaborate. That
            too, infinitely. App takes your room and your interactions live
            across the web. It also records and archives the interaction. Both
            during the live interaction and after, it allows you to chat and
            share images and videos that add value to your discussion. This
            means that you don’t have to move to other messaging and mailing
            apps after your discussion. Thus all your information is in one
            place, for always. And every time you go back to the archive and add
            to it, you enhance knowledge.
          </p>
        </div>

        <div className="pt-12 flex justify-center">
          <img
            src={Card2}
            alt="Room BR"
            draggable={"false"}
            className="relative w-[38rem] h-[20rem] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center rounded-xl"
          />
        </div>

        <div className="py-12">
          <h1 className="text-2xl font-semibold text-center py-4">
            WHAT MAKES ROOMBR APP UNIQUE
          </h1>

          <List>Manage users ( students and teachers )</List>
          <List>
            Connect with teachers anytime via chat, audio and video call
          </List>
          <List>Collaborative whiteboard</List>
          <List>Manage class, course, subjects</List>
          <List>Screen share and multimedia content sharing</List>
          <List>Create instant and scheduled classes</List>
          <List>Record the class session and share it with students</List>
          <List>Invite students and guest to the session</List>
          <List>Manage content using drive</List>
          <List>Master control for teachers</List>
        </div>

        <div
          className="relative w-full h-[10rem] lg:h-[20rem] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center rounded-xl"
          style={{ backgroundImage: `url(${Card5})` }}
        ></div>
      </div>
    </>
  );
};

export default AboutUs;
