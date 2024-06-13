import React from "react";

import List from "../List/List";

import card1 from "../../assets/product-contact-card1.png";

const Features = () => {
  return (
    <>
      <section className="container text-primary">
        <div className={"flex flex-col-reverse lg:flex-row"}>
          <div className={"w-full lg:w-[70%] h-auto"}>
            <h1 className={"text-2xl font-semibold"}>
              Key Features of Our Contact Center Solutions:
            </h1>

            <div className={"my-4 font-semibold"}>
              <h2 className={"pb-2.5"}>Multi-Channel Communication</h2>
              <List>
                Enable seamless communication across multiple channels,
                including phone, email, chat, and social media.
              </List>
              <List>
                Enhance customer accessibility and responsiveness with a unified
                multi-channel approach.
              </List>
            </div>

            <div className={"my-4 font-semibold"}>
              <h2 className={"pb-2.5"}>Intelligent Routing</h2>
              <List>
                Implement intelligent call routing and distribution to connect
                customers with the most suitable agents efficiently.
              </List>
              <List>
                Streamline workflows and reduce waiting times for enhanced
                customer satisfaction.
              </List>
            </div>

            <div className={"my-4 font-semibold"}>
              <h2 className={"pb-2.5"}>CRM Integration</h2>
              <List>
                Integrate with Customer Relationship Management (CRM) systems to
                provide agents with comprehensive customer information.
              </List>
              <List>
                Enhance personalized interactions and improve issue resolution.
              </List>
            </div>

            <div className={"my-4 font-semibold"}>
              <h2 className={"pb-2.5"}>Analytics and Reporting</h2>
              <List>
                Access real-time analytics and reporting tools to gain insights
                into customer interactions and agent performance.
              </List>
              <List>
                Make data-driven decisions to improve operational efficiency.
              </List>
            </div>

            <div className={"my-4 font-semibold"}>
              <h2 className={"pb-2.5"}>Automation and AI Integration</h2>
              <List>
                Incorporate automation and Artificial Intelligence (AI) to
                handle routine queries, freeing up agents for more complex
                tasks.
              </List>
              <List>
                Improve response times and efficiency with intelligent
                automation.
              </List>
            </div>
          </div>

          <div className={"mx-auto mb-12 lg:mb-0 w-[50%] lg:w-[30%] h-[90%]"}>
            <img src={card1} alt="Our Expertise" draggable={"false"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
