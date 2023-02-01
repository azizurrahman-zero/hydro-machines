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
    <div className="md:pt-24 sm:pt-28 pt-16 xl:pt-0 w-[unset] 2xl:py-14 xl:py-6 2xl:ml-16 xl:ml-5 sm:px-3 px-10 md:mx-20 sm:mx-20 hero_section">
      <div className="flex xl:items-center justify-center xl:gap-6 lg:gap-20 md:gap-16 sm:gap-20 gap-16 2xl:pb-48 xl:pb-40 lg:pb-64 md:pb-52 pb-48 flex-col xl:flex-row 2xl:bg-[bottom_left_25rem] xl:bg-[bottom_left_15rem] lg:bg-[bottom_left_3rem] bg-[bottom_right] bg-no-repeat 2xl:bg-[length:200px_200px] bg-[length:180px_180px] bottom">
        <div className="lg:pl-20 sm:pl-16 pl-0 2xl:w-6/12 xl:w-[53%] bg-no-repeat xl:mt-[-6rem] 2xl:bg-[length:200px_200px] bg-[length:180px_180px] left">
          <p className="2xl:text-lg xl:text-base md:text-[15px] sm:text-sm text-xs text-primary text_roboto 2xl:mt-[-6rem] xl:mt-[-3.5rem] lg:mt-[-3.5rem] md:mt-[-3.4rem] sm:mt-[-4rem] mt-[-2.5rem] text-center sm:text-start">
            "
            <span className="font-medium text-secondary">
              Exclusive distributor
            </span>{" "}
            of AF Compressors, Belgium for
            <br />
            100% Oil Free, Low & High Pressure Air Compressors"
          </p>
          <p className="sm:pb-2 lg:pb-4 md:pt-20 sm:pt-24 pt-20 2xl:pt-32 xl:pt-30 text-secondary 2xl:text-5xl xl:text-4xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text_raleway pl-10 sm:pl-0">
            We are here for
          </p>
          <h1 className="2xl:text-3xl xl:text-2xl lg:text-4xl md:text-[24px] sm:text-xl text-sm 2xl:leading-tight lg:pb-8 md:pb-6 pb-5 font-bold text-primary pl-10 sm:pl-0 text_raleway">
            <p>Supply, Installation & Commissioning</p>
            <p>of Industrial Utility Equipment</p>
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
        <div className="2xl:w-6/12 xl:w-[47%] 2xl:p-2 lg:p-4 md:p-3 p-5 bg-no-repeat bg-center bg-contain bg">
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
            <SwiperSlide className="flex flex-col items-center justify-center">
              <img className="pt-16" src={one} alt="Slide" />
              <p className="md:pt-6 pt-5 md:pb-20 pb-16 font-bold 2xl:text-lg xl:text-sm lg:text-lg sm:text-base text-xs text-center text_raleway">
                High Pressure Air Compressor for PET Bottle Blowing
              </p>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center justify-center">
              <img className="pt-16" src={two} alt="Slide" />
              <p className="md:pt-6 pt-5 md:pb-20 pb-16 font-bold 2xl:text-lg xl:text-sm lg:text-lg sm:text-base text-xs text-center text_raleway">
                Low Pressure Air Compressor for Pneumatic Application
              </p>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center justify-center">
              <img className="pt-16" src={three} alt="Slide" />
              <p className="md:pt-6 pt-5 md:pb-20 pb-16 font-bold 2xl:text-lg xl:text-sm lg:text-lg sm:text-base text-xs text-center text_raleway">
                Industrial Water Chiller for Process & Environmental Cooling
              </p>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center justify-center">
              <img className="pt-16" src={four} alt="Slide" />
              <p className="md:pt-6 pt-5 md:pb-20 pb-16 font-bold 2xl:text-lg xl:text-sm lg:text-lg sm:text-base text-xs text-center text_raleway">
                Box Type, Cross Flow Cooling Tower for Generator & Condenser
                Cooling
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
