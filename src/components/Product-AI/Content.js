import React from "react";

import List from "../List/List";

import ProductAI2 from "../../assets/product/productAI2.jpg";

const Content = () => {
  return (
    <>
      <section className="container text-primary">
        <div className={"w-full h-auto py-12"}>
          <h1 className={"text-2xl font-semibold"}>Key AI Services:</h1>
          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Custom AI Development</h2>
            <List>
              Leverage the expertise of our AI specialists to build custom
              solutions tailored to your unique needs. Whether it's developing
              intelligent algorithms, predictive models, or AI-powered
              applications, we transform ideas into intelligent, functional
              realities.
            </List>
          </div>

          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Machine Learning Solutions</h2>
            <List>
              Embrace the future with our machine learning services. From
              predictive analytics to recommendation engines, we utilize machine
              learning algorithms to extract actionable insights from your data,
              driving informed decision-making.
            </List>
          </div>

          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Natural Language Processing (NLP)</h2>
            <List>
              Enhance user experiences and streamline operations with our NLP
              services. Our solutions enable machines to understand, interpret,
              and generate human-like text, powering applications such as
              chatbots, sentiment analysis, and language translation.
            </List>
          </div>

          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Computer Vision Applications</h2>
            <List>
              See the world through the eyes of AI. Our computer vision
              solutions enable image and video analysis, allowing businesses to
              automate processes, enhance security, and extract valuable
              information from visual data.
            </List>
          </div>
          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>AI Integration and Automation</h2>
            <List>
              Seamlessly integrate AI into your existing systems and processes
              for enhanced efficiency. Our AI integration services ensure a
              smooth transition, automating repetitive tasks and enabling your
              business to operate at a new level of productivity.
            </List>
          </div>
        </div>

        <div className="pb-12">
          <h1 className={"text-2xl font-semibold"}>
            Why Choose IQSPL for AI Services?
          </h1>

          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>Expertise and Innovation</h2>
            <List>
              Our AI team comprises experts at the forefront of AI research and
              development, ensuring that you receive innovative solutions that
              align with the latest advancements in the field.
            </List>
          </div>
          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>Customization and Scalability</h2>
            <List>
              We understand that one size doesn't fit all. Our AI services are
              customizable to meet your specific requirements, and they scale
              seamlessly to accommodate your business growth.
            </List>
          </div>
          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>Continuous Support and Optimization</h2>
            <List>
              Beyond implementation, we provide ongoing support and optimization
              services to ensure that your AI solutions evolve with your
              business needs.{" "}
            </List>
          </div>
        </div>

        <div className="text-secondary text-center pb-12">
          Discover the transformative potential of AI with IQSPL. Whether you're
          looking to enhance operational efficiency, gain insights from data, or
          create intelligent applications, our AI services are designed to
          propel your organization into the future. Contact us today for a
          personalized consultation and embark on your AI journey.
        </div>

        <div className="flex justify-center items-center w-full h-[10rem] lg:h-[15rem] rounded-lg">
          <img
            src={ProductAI2}
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
