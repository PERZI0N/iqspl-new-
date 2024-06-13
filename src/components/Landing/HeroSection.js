import React from "react";

import { HashLink } from "react-router-hash-link";

import useWindowSize from "../../hooks/useWindowSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import Button from "../UI/Button";

// import heroVideo from "../../assets/hero-video.mp4";
import dc1 from "../../assets/slides/desktop/c1.png";
import dc2 from "../../assets/slides/desktop/c2.png";
import dc3 from "../../assets/slides/desktop/c3.png";
import dc4 from "../../assets/slides/desktop/c4.png";
import dc5 from "../../assets/slides/desktop/c5.png";
import dc6 from "../../assets/slides/desktop/c6.png";

import mc1 from "../../assets/slides/mobile/c1.png";
import mc2 from "../../assets/slides/mobile/c2.png";
import mc3 from "../../assets/slides/mobile/c3.png";
import mc4 from "../../assets/slides/mobile/c4.png";
import mc5 from "../../assets/slides/mobile/c5.png";
import mc6 from "../../assets/slides/mobile/c6.png";

const HeroSection = () => {
  const { width } = useWindowSize();

  const slidesArr = [
    {
      id: 1,
      src: width < 768 ? mc1 : dc1,
      message:
        "Excellence is not an act but a habit. Upholding responsiveness, reliability, and professionalism defines our commitment to you",
    },
    {
      id: 2,
      src: width < 768 ? mc2 : dc2,
      message:
        "Our promise - Delivering quality at a price that keeps you ahead of the competition",
    },
    {
      id: 3,
      src: width < 768 ? mc3 : dc3,
      message:
        "Our guarantee - Prompt delivery to keep your business moving forward",
    },
    {
      id: 4,
      src: width < 768 ? mc4 : dc4,
      message:
        "In our team, dynamic synergy, passionate spirit – the recipe for our success",
    },
    {
      id: 5,
      src: width < 768 ? mc5 : dc5,
      message:
        "Empowering enterprises with innovative tech-driven solutions for a future of success",
    },
    {
      id: 6,
      src: width < 768 ? mc6 : dc6,
      message: "We're all about making you happy",
    },
  ];

  return (
    <>
      <section className={`container font-primary text-primary`}>
        <div className="relative w-full h-[35rem] flex flex-col justify-center items-center rounded-xl overflow-hidden">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            effect={"fade"}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFade]}
            className="w-full h-full"
          >
            {slidesArr.map((slide) => (
              <SwiperSlide
                key={slide.id}
                className="flex justify-center items-center"
              >
                <div
                  className="min-w-full min-h-full bg-no-repeat bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.src})` }}
                >
                  {/* <div className="absolute z-10 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
                    <div className="text-center px-4 py-2">
                      <h1 className="text-2xl lg:text-3xl font-bold text-tertiary">
                        {slide.message}
                      </h1>
                      </div>

                      <div className="absolute bottom-10">
                        <HashLink smooth to="/#LandingWhatWeDo">
                          <Button>Explore Now</Button>
                        </HashLink>
                      </div>
                    </div>
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex justify-center pt-12">
          <button
            className={`p-5 rounded-lg min-w-[200px] font-semibold font-primary bg-blue-500 hover:bg-blue-700 text-white border-2 border-blue-700 transition-all duration-300 flex items-center justify-center`}
            type="submit"
          >
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
            <a href="https://calendly.com/milind-auti" target="blank">Book an Appointment</a>
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
