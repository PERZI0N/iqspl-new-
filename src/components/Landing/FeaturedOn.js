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

import logo1 from "../../assets/client-logos/featured1.jpeg";
import logo2 from "../../assets/client-logos/featured2.jpeg";
import logo3 from "../../assets/client-logos/featured3.jpeg";
import logo4 from "../../assets/client-logos/featured4.jpeg";
import logo5 from "../../assets/client-logos/featured5.jpeg";
import logo6 from "../../assets/client-logos/featured6.jpeg";
import logo7 from "../../assets/client-logos/featured7.jpeg";
import logo8 from "../../assets/client-logos/featured8.jpeg";
import logo9 from "../../assets/client-logos/featured9.jpeg";
import logo10 from "../../assets/client-logos/featured10.jpeg";

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
];

const Featured = () => {
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
      <section className="container my-5 lg:my-6 text-primary">
        <div className="flex justify-center">
          <h1
            className={"text-2xl lg:text-3xl text-center font-semibold"}
            style={{ position: "relative", display: "inline-block" }}
          >
            Featured On
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
              reverseDirection: true,
            }}
            loop={true}
            // direction="rtl"
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

export default Featured;
