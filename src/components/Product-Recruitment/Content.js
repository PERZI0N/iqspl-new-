import React from "react";

import List from "../List/List";

import ProductRecruit2 from "../../assets/product/productRecruit2.jpg";
import ProductRecruit3 from "../../assets/product/productRecruit3.jpg";


const Content = () => {
  return (
    <>
      <section className="container text-primary">
        <div className={"w-full h-auto pb-6"}>
          <h1 className={"text-2xl font-semibold"}>Key Features:</h1>
          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>User-Friendly Interface</h2>
            <List>
              Our recruitment software boasts an intuitive interface, ensuring a
              user-friendly experience for both recruiters and candidates.
              Navigate through the hiring process effortlessly, from posting job
              openings to managing applications.
            </List>
          </div>

          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Customized Solutions</h2>
            <List>
              Tailored to meet the unique needs of your organization, our
              software adapts to your specific requirements. Enjoy the
              flexibility of customizable workflows, ensuring a perfect fit for
              your hiring practices.
            </List>
          </div>

          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Efficient Candidate Management</h2>
            <List>
              Stay organized with our robust candidate management system. Track
              applicants, manage resumes, and streamline communication all in
              one centralized platform.
            </List>
          </div>

          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Automated Screening Processes</h2>
            <List>
              Save time and resources with automated screening processes.
              Identify top-tier candidates efficiently, allowing your team to
              focus on the most promising talent.
            </List>
          </div>

          <div className={"my-4 font-semibold"}>
            <h2 className={"pb-2.5"}>Seamless Integration</h2>
            <List>
              Our software seamlessly integrates into your new website,
              providing a cohesive and professional experience for both
              employers and job seekers.
            </List>
          </div>
        </div>

        <div className={"mx-auto pb-6 w-[80%] lg:w-[70%] h-[90%]"}>
          <img src={ProductRecruit2} alt="Our Expertise" draggable={"false"} />
        </div>

        <div className="text-secondary text-center pb-12">
          Enjoy the convenience of managing your recruitment process within the
          same digital ecosystem.
        </div>

        <div className="pb-12">
          <h1 className={"text-2xl font-semibold"}>
            Why Choose IQSPL Recruitment Software?
          </h1>

          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>Proven Track Record</h2>
            <List>
              Trusted by [number] of businesses, our recruitment software has a
              proven track record of enhancing hiring efficiency and success.
            </List>
          </div>
          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>Scalability</h2>
            <List>
              Whether you are a growing startup or an established enterprise,
              our software scales to meet your evolving recruitment needs.
            </List>
          </div>
          <div className={"my-2 font-semibold"}>
            <h2 className={"pb-1.5"}>Dedicated Support</h2>
            <List>
              Our customer support team is always ready to assist you. From
              onboarding to troubleshooting, we ensure a smooth experience with
              our software.{" "}
            </List>
          </div>
        </div>

        <div className="flex justify-center items-center pb-12 w-full h-[10rem] lg:h-[15rem] rounded-lg">
          <img
            src={ProductRecruit3}
            alt="SD - WAN"
            draggable={"false"}
            className="w-full h-[10rem] lg:h-[15rem] rounded-lg"
          />
        </div>

        <div className="text-secondary text-center">
          Elevate your hiring process to new heights with our cutting-edge
          recruitment software. Explore the possibilities and discover the
          transformative impact on your talent acquisition efforts. Contact us
          today to schedule a demo and unlock the full potential of streamlined,
          technology-driven recruitment.
        </div>
      </section>
    </>
  );
};

export default Content;
