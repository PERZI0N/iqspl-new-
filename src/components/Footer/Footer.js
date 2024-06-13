import React from "react";

import logo from "../../assets/logo.svg";

import LinkedIn from "../../icons/LinkedIn";
import Twitter from "../../icons/Twitter";
import Facebook from "../../icons/Facebook";
import Internet from "../../icons/Internet";

const Footer = () => {
  return (
    <>
      <div className={"pt-8 lg:pt-16 text-primary bg-bg-secondary"}>
        <section className="container">
          <div
            className={
              "flex flex-col items-center lg:flex-row lg:justify-between lg:items-center"
            }
          >
            <div className={"flex flex-col"}>
              <div className={"mx-auto lg:mx-0"}>
                <img src={logo} alt={"Logo"} className={"mb-6"} />
              </div>

              <h1
                className={
                  "text-center lg:text-left my-1 text-lg font-semibold"
                }
              >
                Intelligent Quotient System Pvt. Ltd.
              </h1>

              <p className={"text-center lg:text-left text-sm"}>
                IN | US | NZ | NL | AUS
              </p>
            </div>

            <div className={"pt-12 lg:pt-0"}>
              <h1
                className={
                  "my-1 text-lg font-semibold text-center lg:text-left"
                }
              >
                Follow us
              </h1>
              <div className={"flex gap-4"}>
                <LinkedIn />
                <Twitter />
                <Facebook />
                <Internet />
              </div>
            </div>
          </div>
        </section>

        <section className="container py-4">
          <div className={"text-center text-secondary"}>
            @ {new Date().getFullYear()} Japan Grab Technologies All Rights
            Reserved
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
