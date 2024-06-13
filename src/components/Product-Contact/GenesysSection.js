import React from "react";

import List from "../List/List";

import card2 from "../../assets/product-contact-card2.jpg";
import card3 from "../../assets/product-contact-card3.png";
import card4 from "../../assets/product-contact-card4.jpg";

const GenesysSection = () => {
  return (
    <>
      <section className="container text-primary">
        <div className="py-12">
          <div
            className="relative w-full h-[35rem] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center rounded-xl "
            style={{ backgroundImage: `url(${card2})` }}
          >
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 rounded-xl"></div>
            <div className="relative text-tertiary text-center px-1">
              <h1 className="text-2xl lg:text-4xl font-black">
                Genesys Contact Center Solutions for Superior Customer
                Engagement
              </h1>
            </div>
          </div>
        </div>
        <div className={"text-secondary text-center pb-12"}>
          Empower your customer service initiatives with our cutting-edge
          Genesys Contact Center Solutions at IQSPL. As a provider of Genesys, a
          leading contact center system, we bring advanced technologies to
          optimize customer engagement, support, and satisfaction.
        </div>
        <div className={"flex flex-col-reverse lg:flex-row"}>
          <div className={"w-full lg:w-[70%] h-auto"}>
            <h1 className={"text-2xl font-semibold"}>
              Key Features of Our Genesys Contact Center Solutions:
            </h1>

            <div className={"my-4 font-semibold"}>
              <h2 className={"pb-2.5"}>Industry-Leading Platform</h2>
              <List>
                Harness the power of Genesys, a renowned and industry-leading
                contact center system known for its reliability and innovation.
              </List>
              <List>
                Leverage a comprehensive suite of features designed to enhance
                customer interactions.
              </List>
            </div>

            <div className={"my-4 font-semibold"}>
              <h2 className={"pb-2.5"}>Omni-Channel Excellence</h2>
              <List>
                Deliver a seamless customer experience across various channels,
                including voice, email, chat, and social media.
              </List>
              <List>
                Enable customers to connect with your business through their
                preferred communication channels.
              </List>
            </div>

            <div className={"my-4 font-semibold"}>
              <h2 className={"pb-2.5"}>Intelligent Routing and Distribution</h2>
              <List>
                Implement intelligent call routing and agent distribution to
                optimize response times and customer satisfaction.
              </List>
              <List>
                Ensure that each interaction is directed to the most qualified
                agent for efficient issue resolution.
              </List>
            </div>

            <div className={"my-4 font-semibold"}>
              <h2 className={"pb-2.5"}>Advanced Analytics and Reporting</h2>
              <List>
                Utilize Genesys' advanced analytics and reporting tools to gain
                actionable insights into customer interactions and agent
                performance.
              </List>
              <List>
                Make informed decisions to enhance operational efficiency and
                service quality.
              </List>
            </div>

            <div className={"my-4 font-semibold"}>
              <h2 className={"pb-2.5"}>Automation and AI Integration</h2>
              <List>
                Integrate automation and Artificial Intelligence (AI)
                capabilities from Genesys to streamline routine processes and
                improve response times.
              </List>
              <List>
                Enhance agent productivity and focus on more complex customer
                needs.
              </List>
            </div>
          </div>

          <div className={"mx-auto mb-12 lg:mb-0 w-[50%] lg:w-[30%] h-[90%]"}>
            <img src={card3} alt="Our Expertise" draggable={"false"} />
          </div>
        </div>

        <div className="pb-12">
          <h1 className={"text-2xl font-semibold"}>
            Call centre software that powers personalised experiences
          </h1>

          <div className={"text-secondary my-2"}>
            Customer expectations are higher than ever. Meeting them means
            having the right tools, people and strategies in place. Genesys
            makes it possible to deliver unique, personalised experiences your
            customers will love. You can scale to keep pace with both customer
            preferences and business demands. With our comprehensive
            capabilities and advanced features, you can always put customers
            first.
          </div>

          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>Inbound</h2>
            <List>
              Make it easy for customers to connect with you. Be ready to answer
              their questions, offer support and exceed expectations across
              channels.
            </List>
          </div>
          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>Outbound</h2>
            <List>
              Proactively reach customers via the channels they love most.
              Increase customer engagement, response rates and revenue with
              targeted outbound campaigns.
            </List>
          </div>
          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>Voice services</h2>
            <List>
              Get cloud telephony, unified communications and call centre
              services in a way that works best for you. Be there for customers
              who’ll always prefer phone-based support.
            </List>
          </div>
          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>Automatic call distribution (ACD)</h2>
            <List>
              Route customer interactions with skills-based and intelligent
              routing. Go beyond call routing and ensure every customer gets the
              right support, every time.
            </List>
          </div>
          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>Digital</h2>
            <List>
              Give customers the easy, seamless digital experiences they expect.
              And support your teams with an all-in-one suite of digital
              capabilities — or with your own solution.
            </List>
          </div>
          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>
              Unified communication and collaboration
            </h2>
            <List>
              Enhance your employee experience. Enable seamless collaboration
              and easy communications — all from a single platform or
              third-party solution.
            </List>
          </div>
          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>Workforce engagement management (WEM)</h2>
            <List>
              Give your employees the tools, support and growth opportunities
              they need to engage and thrive. After all, great customer
              experiences start with them.
            </List>
          </div>
          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>AI and automation</h2>
            <List>
              Power omnichannel experiences with artificial intelligence (AI).
              Meet your customers in the moment with bot support, data-based
              insights and more.
            </List>
          </div>
          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>
              Interactive voice response (IVR) and self-service
            </h2>
            <List>
              Drive better customer experiences while making business more
              profitable with Genesys call center IVR.
            </List>
          </div>
        </div>

        <div className="pb-12">
          <h1 className={"text-2xl font-semibold"}>
            Why Choose IQSPL for Genesys Contact Center Solutions?
          </h1>

          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>Genesys Expertise</h2>
            <List>
              Our team specializes in implementing and optimizing the Genesys
              Contact Center System, ensuring that your organization benefits
              from its full capabilities.
            </List>
          </div>
          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>Tailored Deployment</h2>
            <List>
              Customize the Genesys solution to align with your specific
              business requirements and objectives.
            </List>
          </div>
          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>Scalability and Support</h2>
            <List>
              Scale your contact center infrastructure as your business grows,
              with ongoing support to ensure smooth operations.
            </List>
          </div>
          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>Innovation and Integration</h2>
            <List>
              Stay ahead in customer engagement with our commitment to
              integrating the latest features and updates from Genesys.
            </List>
          </div>
        </div>

        <div
          className="relative w-full h-[10rem] lg:h-[20rem] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center rounded-xl"
          style={{ backgroundImage: `url(${card4})` }}
        ></div>
      </section>
    </>
  );
};

export default GenesysSection;
