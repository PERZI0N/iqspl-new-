import React, { useState, useEffect } from "react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import logo1 from "../../assets/client-logos/landing-logo1.png";
import logo2 from "../../assets/client-logos/landing-logo2.png";
import logo3 from "../../assets/client-logos/landing-logo3.png";
import logo4 from "../../assets/client-logos/landing-logo4.png";
import logo5 from "../../assets/client-logos/landing-logo5.png";
import logo6 from "../../assets/client-logos/landing-logo6.png";
import logo7 from "../../assets/client-logos/landing-logo7.png";
import logo8 from "../../assets/client-logos/landing-logo8.png";
import logo9 from "../../assets/client-logos/landing-logo9.png";
import logo10 from "../../assets/client-logos/landing-logo10.png";
import logo11 from "../../assets/client-logos/landing-logo11.png";
import logo12 from "../../assets/client-logos/landing-logo12.png";
import logo13 from "../../assets/client-logos/landing-logo13.png";
import logo14 from "../../assets/client-logos/landing-logo14.png";
import logo15 from "../../assets/client-logos/landing-logo15.png";
import logo16 from "../../assets/client-logos/landing-logo16.png";
import logo17 from "../../assets/client-logos/landing-logo17.png";
import logo18 from "../../assets/client-logos/landing-logo18.png";
import logo19 from "../../assets/client-logos/landing-logo19.png";
import logo20 from "../../assets/client-logos/landing-logo20.png";
import logo21 from "../../assets/client-logos/landing-logo21.png";
import logo22 from "../../assets/client-logos/landing-logo22.png";
import logo23 from "../../assets/client-logos/landing-logo23.png";
import logo24 from "../../assets/client-logos/landing-logo24.png";
import logo25 from "../../assets/client-logos/landing-logo25.png";
import logo26 from "../../assets/client-logos/landing-logo26.jpg";
import logo27 from "../../assets/client-logos/landing-logo27.jpg";

const logos = [
  { id: 1, logo: logo1, alt: "Logo 1" },
  { id: 2, logo: logo2, alt: "Logo 2" },
  { id: 3, logo: logo3, alt: "Logo 3" },
  { id: 4, logo: logo4, alt: "Logo 4" },
  { id: 5, logo: logo5, alt: "Logo 5" },
  { id: 6, logo: logo6, alt: "Logo 6" },
  { id: 7, logo: logo7, alt: "Logo 7" },
  { id: 8, logo: logo8, alt: "Logo 8" },
  { id: 9, logo: logo9, alt: "Logo 9" },
  { id: 10, logo: logo10, alt: "Logo 10" },
  { id: 11, logo: logo11, alt: "Logo 11" },
  { id: 12, logo: logo12, alt: "Logo 12" },
  { id: 13, logo: logo13, alt: "Logo 13" },
  { id: 14, logo: logo14, alt: "Logo 14" },
  { id: 15, logo: logo15, alt: "Logo 15" },
  { id: 16, logo: logo16, alt: "Logo 16" },
  { id: 17, logo: logo17, alt: "Logo 17" },
  { id: 18, logo: logo18, alt: "Logo 18" },
  { id: 19, logo: logo19, alt: "Logo 19" },
  { id: 20, logo: logo20, alt: "Logo 20" },
  { id: 21, logo: logo21, alt: "Logo 21" },
  { id: 22, logo: logo22, alt: "Logo 22" },
  { id: 23, logo: logo23, alt: "Logo 23" },
  { id: 24, logo: logo24, alt: "Logo 24" },
  { id: 25, logo: logo25, alt: "Logo 25" },
  { id: 26, logo: logo26, alt: "Logo 26" },
  { id: 27, logo: logo27, alt: "Logo 27" },
];

const Clients = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className="container m-4 my-6 lg:my-6 text-primary">
        <div className=" my-2">
          <iframe
            src="https://widgets.commoninja.com/iframe/5f8d1b61-269f-4ce8-a945-df058e80c10f"
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="yes"
            className="overflow-auto m-4 h-[150vh] md:h-[90vh]  lg:h-[90vh] "
          ></iframe>
        </div>
        <div className="flex mt-10 justify-center">
          <h1
            className={"text-2xl lg:text-3xl text-center font-semibold"}
            style={{ position: "relative", display: "inline-block" }}
          >
            Our Clients
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
        </div>

        <div className="flex justify-center items-center py-8 lg:w-full">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={32}
            slidesPerView={width >= 992 ? 4 : width <= 748 ? 2 : 3}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
            style={{ width: "90%", height: "auto" }}
            className="float-left block"
          >
            {logos.map((item) => {
              return (
                <SwiperSlide
                  key={item.id}
                  className="flex justify-center items-center w-full rounded-lg bg-bg-secondary p-4 md:w-fit"
                >
                  <img
                    src={item.logo}
                    alt={item.alt}
                    className="object-contain h-24 mx-auto"
                    draggable={false}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Clients;
