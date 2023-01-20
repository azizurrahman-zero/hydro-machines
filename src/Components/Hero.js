import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard } from "swiper";

import one from "../Images/Slider/1.png";
import two from "../Images/Slider/2.png";
import three from "../Images/Slider/3.png";
import four from "../Images/Slider/4.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="md:pt-24 sm:pt-28 pt-16 xl:pt-0 w-[unset] 2xl:py-14 xl:py-6 xl:pl-16 2xl:pr-16 2xl:ml-16 xl:ml-8 px-7 md:mx-40 sm:mx-20 hero_section">
      <div className="flex xl:items-center justify-center xl:gap-6 lg:gap-20 md:gap-16 sm:gap-8 gap-7 2xl:pb-48 xl:pb-40 lg:pb-64 md:pb-52 pb-48 flex-col xl:flex-row 2xl:bg-[bottom_left_25rem] xl:bg-[bottom_left_15rem] lg:bg-[bottom_left_3rem] bg-[bottom_right] bg-no-repeat 2xl:bg-[length:200px_200px] bg-[length:180px_180px] bottom">
        <div className="lg:pl-20 sm:pl-16 pl-0 xl:w-6/12 bg-no-repeat xl:mt-[-6rem] 2xl:bg-[length:200px_200px] bg-[length:180px_180px] left">
          <p className="2xl:text-lg xl:text-base md:text-[15px] sm:text-base text-xs text-primary text_roboto 2xl:mt-[-6rem] xl:mt-[-3.5rem] lg:mt-[-3.5rem] md:mt-[-3.4rem] sm:mt-[-4rem] mt-[-2.5rem] text-center sm:text-start">
            "
            <span className="font-medium text-secondary">
              Exclusive distributor
            </span>{" "}
            of AF Compressors, Belgium for
            <br />
            100% Oil Free, Low & High Pressure Air Compressors"
          </p>
          <p className="sm:pb-2 lg:pb-4 md:pt-20 sm:pt-24 pt-20 2xl:pt-32 xl:pt-30 text-secondary 2xl:text-4xl xl:text-3xl lg:text-5xl sm:text-3xl text-2xl font-bold text_raleway pl-10 sm:pl-0">
            We are here for
          </p>
          <h1 className="2xl:text-5xl xl:text-4xl lg:text-6xl sm:text-4xl text-2xl 2xl:leading-tight lg:pb-8 md:pb-6 pb-5 font-bold text-primary pl-10 sm:pl-0 text_raleway">
            Supply, Installation <br /> & Commissioning
          </h1>
          <Link
            to="/products"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="btn text-white normal-case font-semibold text-base bg-secondary border-none hover:border-none hover:bg-[#ed1b24bf] px-8 py-2.5 ml-10 sm:ml-0 text_raleway"
          >
            View More
          </Link>
        </div>
        <div className="xl:w-6/12 2xl:p-2 lg:p-4 md:p-3 p-5 bg-no-repeat bg-center bg-contain bg">
          <Swiper
            spaceBetween={40}
            centeredSlides={true}
            keyboard={{
              enabled: true,
            }}
            loop={true}
            grabCursor={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Keyboard]}
          >
            <SwiperSlide className="flex justify-center">
              <img src={one} alt="Slide" />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <img src={two} alt="Slide" />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <img src={three} alt="Slide" />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <img src={four} alt="Slide" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
