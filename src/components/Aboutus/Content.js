import React from "react";

const Content = () => {
  return (
    <div className="flex my-12 flex-col items-center">
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
        Welcome to IQSPL, your gateway to innovative technology solutions. With
        a commitment to excellence, we provide advanced IT services tailored to
        your unique needs. Our expertise in cutting-edge technology transforms
        challenges into opportunities, paving the way for a smarter, more
        connected future. Join us as we explore new horizons in technology,
        creating solutions that empower and inspire. Since 2006, IQSPL has been
        providing IT Solutions and Services and have tie-ups with all major IT
        brands including global multi-nationals. We specialize in providing
        innovative educational solutions that empower educational institutions
        to enhance teaching and learning experiences. Our core expertise lies in
        building end-to-end turnkey solutions and today, we are catering to a
        cross-section of customers across geographies. We have cross-functional
        experience spanning technologies. IQSPL offers sophisticated technical
        solutions for the present and for the future. We have built and
        maintained some of the most challenging information systems and have
        considerable experience and domain knowledge across multiple
        technologies. We hold certifications in ISO 9001, 27001, and 20000,
        committing ourselves to adhere to industry-leading standards and
        consistently stay ahead of the curve.
      </p>
    </div>
  );
};

export default Content;
