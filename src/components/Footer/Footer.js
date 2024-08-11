import React from "react";
import logo from "../../assets/logo.svg";
import LinkedIn from "../../icons/LinkedIn";
import Twitter from "../../icons/Twitter";
import Facebook from "../../icons/Facebook";
import Internet from "../../icons/Internet";

const Footer = () => {
  return (
    <div className={"pt-8 lg:pt-16 text-primary bg-bg-secondary"}>
      <section className="container mx-auto px-4">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-start">
          {/* Company Information */}
          <div className="flex flex-col items-center mx-8 lg:items-start mb-8 lg:mb-0">
            <img src={logo} alt={"Logo"} className={"mb-6 "} />
            <h1 className="text-lg font-semibold mb-2 text-center lg:text-left">
              Intelligent Quotient System Pvt. Ltd.
            </h1>
            <p className="text-sm text-center lg:text-left">
              IN | US | NZ | NL | AUS
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-3 lg:gap-16">
            {/* Company Links */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Company</h2>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>Career</li>
                <li>Gallery</li>
                <li>Contact</li>
              </ul>
            </div>
            {/* Quick Links */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
              <ul className="text-sm space-y-2">
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
                <li>Disclaimers</li>
                <li>Refund Policy</li>
                <li>Reschedule Policy</li>
              </ul>
            </div>
            {/* Contact Info */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
              <p className="text-sm">
                Registered Office: <br />
                Venkateshwara House, 1st floor, office 3, opp. Kalinga hotel,
                near Sharda center, off. Karve Road, Pune – 411004
              </p>
              <p className="text-sm mt-2">Email: enquiry@skills-factory.com</p>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="flex ml-4 flex-col items-center lg:items-start mt-12 lg:mt-0">
            <h2 className="text-lg font-semibold mb-4 text-center lg:text-left">
              Follow us
            </h2>
            <div className="flex gap-4">
              <LinkedIn />
              <Twitter />
              <Facebook />
              <Internet />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-4 px-4">
        <div className={"text-center text-secondary"}>
          &copy; {new Date().getFullYear()} Intelligent Quotient System Pvt Ltd.
          All Rights Reserved.
        </div>
      </section>
    </div>
  );
};

export default Footer;
