import React from "react";

import List from "../List/List";

import google from "../../assets/service-email-google.jpg";
import microsoft from "../../assets/service-email-microsoft.png";
import custom from "../../assets/service-email-custom.webp";

const Platforms = () => {
  return (
    <>
      <section className="container text-primary my-12">
        <div className={"flex flex-col-reverse lg:flex-row"}>
          <div className={"w-full lg:w-auto h-auto"}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1
                className={
                  "text-2xl font-semibold text-quaternary py-6 text-center"
                }
                style={{ position: "relative", display: "inline-block" }}
              >
                Messaging you can rely on!
                <span
                  style={{
                    display: "block",
                    height: "2.5px",
                    background:
                      "linear-gradient(to right, rgba(0,0,0,0) 0%, #015AAA 50%, rgba(0,0,0,0) 100%)",
                    position: "absolute",
                    width: "120%",
                    bottom: "10px",
                    left: "-10%",
                  }}
                ></span>
              </h1>
            </div>

            <h1 className={"text-2xl font-semibold my-6"}>
              Expert Helpdesk Services Tailored to Your Email Needs
            </h1>
            <div className={"text-secondary py-6"}>
              At IQSPL, we specialize in providing top-notch helpdesk services
              to elevate your email communication and collaboration. Our
              dedicated team offers comprehensive support for various platforms,
              ensuring a seamless and efficient email experience for your
              organization.
            </div>

            <div className={"my-4 font-semibold"}>
              <h2 className={"pb-2.5"}>Google Workspace Support</h2>
              <List>
                Unlock the full potential of Google Workspace with our expert
                support
              </List>
              <List>
                Seamless integration, configuration, and ongoing assistance to
                optimize your team's collaboration using Google's suite of
                productivity tools.
              </List>

              <img
                src={google}
                alt="Google Workspace"
                className="w-3/4 md:w-[30%] mx-auto py-6 hover:scale-105 transition-all duration-150"
              />
            </div>

            <div className={"my-4 font-semibold"}>
              <h2 className={"pb-2.5"}>
                Office 365 Integration and Support / Microsoft Exchange Design
                and Deployment
              </h2>
              <List>
                Leverage the power of Office 365 with our integration and
                support services.
              </List>
              <List>
                Expertise in Microsoft Exchange design and deployment, ensuring
                a robust and secure email infrastructure for your organization.
              </List>

              <img
                src={microsoft}
                alt="Microsoft"
                className="w-3/4 md:w-[30%] mx-auto py-6 hover:scale-105 transition-all duration-150"
              />
            </div>

            <div className={"my-4 font-semibold"}>
              <h2 className={"pb-2.5"}>Customized Email Services</h2>
              <List>Tailored solutions to meet your unique email needs.</List>
              <List>
                Work with our team to design a customized email service that
                aligns perfectly with your business workflows and communication
                requirements.
              </List>

              <img
                src={custom}
                alt="Custome Email"
                className="w-3/4 md:w-[30%] mx-auto py-6 hover:scale-105 transition-all duration-150"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Platforms;
