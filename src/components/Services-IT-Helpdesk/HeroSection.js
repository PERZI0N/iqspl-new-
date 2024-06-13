import React from "react";

import heroBackground from "../../assets/services-it-helpdesk-hero.jpg";

const HeroSection = () => {
  return (
    <>
      <section className="container text-primary">
        <div
          className="relative w-full h-[10rem] lg:h-[15rem] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center rounded-xl"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 rounded-xl"></div>
          <div className="relative text-tertiary text-center px-1">
            <h1 className="text-2xl lg:text-4xl font-bold">
              IT Help Desk Management
            </h1>
          </div>
        </div>

        <div className={"text-secondary py-12 text-center"}>
          At IQSPL, we understand the critical role that an efficient IT Help
          Desk plays in ensuring the smooth operation of your business. In
          today's dynamic business environment, where technology is integral to
          virtually every aspect of operations, the need for an efficient IT
          Help Desk software has become paramount. Such a tool serves as the
          linchpin for seamless communication between employees and the IT team,
          fostering a proactive approach to problem resolution and optimizing
          overall productivity. Here's why your company should invest in IT Help
          Desk software. By automating routine tasks and providing self-service
          options, IT Help Desk software optimizes the use of IT resources. This
          allows IT professionals to focus on strategic initiatives and
          high-priority issues, contributing to overall business success.
          Investing in a comprehensive IT Help Desk software is an investment in
          the efficiency, transparency, and resilience of your organization's IT
          support infrastructure. It not only addresses current challenges but
          also prepares your company for future technological advancements and
          increased operational complexity.
        </div>
        <h1 className={"text-2xl font-semibold text-quaternary text-center"}>
          Comprehensive Helpdesk Services Tailored to Your Needs
        </h1>
        <h1 className={"text-secondary py-6"}>
          At IQSPL, we take pride in offering a diverse range of helpdesk
          services to meet the unique requirements of our clients. Our expertise
          extends to leveraging industry-leading platforms such as ZOHO and
          SolarWinds, as well as crafting customized solutions that precisely
          align with your business goals.
        </h1>
      </section>
    </>
  );
};

export default HeroSection;
