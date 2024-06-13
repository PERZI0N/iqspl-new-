import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="container my-8 lg:my-16 text-primary" id="LandingAbout">
        <div className="flex flex-col items-center">
          <h1
            className={
              "text-primary text-2xl lg:text-4xl font-semibold my-4 lg:my-8"
            }
            style={{ position: "relative", display: "inline-block" }}
          >
            About us
            <span
              style={{
                display: "block",
                height: "2.5px",
                background:
                  "linear-gradient(to right, rgba(0,0,0,0) 0%, #161616 50%, rgba(0,0,0,0) 100%)",
                position: "absolute",
                width: "120%",
                bottom: "-7px",
                left: "-10%",
              }}
            ></span>
          </h1>

          <p
            className={
              "text-secondary w-3/4 text-justify lg:text-center text-sm lg:text-base "
            }
          >
           Welcome to IQSPL, your gateway to innovative technology solutions.
            With a commitment to excellence, we provide advanced IT services
            tailored to your unique needs. Our expertise in cutting-edge
            technology transforms challenges into opportunities, paving the way
            for a smarter, more connected future.
            Join us as we explore new horizons in technology, creating solutions
            that empower and inspire.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
