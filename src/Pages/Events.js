import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

import seminarOne from "../Images/Event/Seminar_1.png";
import seminarTwo from "../Images/Event/Seminar_2.png";
import one from "../Images/Event/1.png";
import two from "../Images/Event/2.png";
import three from "../Images/Event/3.png";
import four from "../Images/Event/4.png";
import five from "../Images/Event/5.png";

const Events = () => {
  return (
    <div className="bg-[#f7f7f799] rounded-3xl lg:px-16 2xl:pt-0 sm:px-10 px-6 2xl:pb-16 lg:pt-5 lg:pb-14 pt-14 pb-7 shadow-2xl lg:mx-20 sm:mx-10 mx-5 lg:mt-20 mt-10 w-[unset]">
      <p className="2xl:pb-2 md:pb-0.5 pb-0 text-secondary text-center sm:text-lg xl:text-xl 2xl:text-3xl lg:text-2xl md:text-xl text-lg font-bold text_raleway">
        Photo Album
      </p>
      <h1 className="2xl:text-6xl lg:text-5xl font-bold text-primary text-center text-3xl sm:text-4xl xl:text-4xl text_raleway">
        Events
      </h1>
      <PhotoProvider
        speed={() => 800}
        easing={(type) =>
          type === 2
            ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
            : "cubic-bezier(0.34, 1.56, 0.64, 1)"
        }
      >
        <div className="flex sm:flex-row flex-col lg:pt-14 md:pt-10 sm:pt-8 pt-7 2xl:gap-12 xl:gap-8 lg:gap-6 sm:gap-4 gap-3">
          <div>
            <div className="rounded-xl ring ring-accent ring-offset-base-100 lg:ring-offset-4 md:ring-offset-3 sm:ring-offset-2 ring-offset-1">
              <PhotoView src={seminarOne}>
                <img className="rounded-xl" src={seminarOne} alt="Seminar" />
              </PhotoView>
            </div>
            <h5 className="text_raleway text-center xl:text-2xl lg:text-xl sm:text-sm text-xs font-bold md:pt-2 sm:pt-0.5 pt-1">
              Seminar 1 @2016
            </h5>
          </div>
          <div>
            <div className="rounded-xl ring ring-accent ring-offset-base-100 lg:ring-offset-4 md:ring-offset-3 sm:ring-offset-2 ring-offset-1">
              <PhotoView src={seminarTwo}>
                <img className="rounded-xl" src={seminarTwo} alt="Seminar" />
              </PhotoView>
            </div>
            <h5 className="text_raleway text-center xl:text-2xl lg:text-xl sm:text-sm text-xs font-bold md:pt-2 sm:pt-0.5 pt-1">
              Seminar 2 @2018
            </h5>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col 2xl:pt-8 xl:pt-5 md:pt-3 sm:pt-3 pt-2.5 2xl:gap-12 xl:gap-8 lg:gap-6 sm:gap-4 gap-3">
          <div className="rounded-xl ring ring-accent ring-offset-base-100 lg:ring-offset-4 md:ring-offset-3 sm:ring-offset-2 ring-offset-1">
            <PhotoView src={one}>
              <img className="rounded-xl" src={one} alt="Seminar" />
            </PhotoView>
          </div>
          <div className="flex sm:justify-between sm:gap-0 gap-3 flex-col ">
            <div className="rounded-xl ring ring-accent ring-offset-base-100 lg:ring-offset-4 md:ring-offset-3 sm:ring-offset-2 ring-offset-1">
              <PhotoView src={two}>
                <img className="rounded-xl" src={two} alt="Seminar" />
              </PhotoView>
            </div>
            <div className="rounded-xl ring ring-accent ring-offset-base-100 lg:ring-offset-4 md:ring-offset-3 sm:ring-offset-2 ring-offset-1">
              <PhotoView src={three}>
                <img className="rounded-xl" src={three} alt="Seminar" />
              </PhotoView>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col 2xl:pt-12 lg:pt-8 sm:pt-4 pt-3 2xl:gap-12 xl:gap-8 lg:gap-6 sm:gap-4 gap-3">
          <div className="rounded-xl ring ring-accent ring-offset-base-100 lg:ring-offset-4 md:ring-offset-3 sm:ring-offset-2 ring-offset-1">
            <PhotoView src={four}>
              <img className="rounded-xl" src={four} alt="Seminar" />
            </PhotoView>
          </div>
          <div className="rounded-xl ring ring-accent ring-offset-base-100 lg:ring-offset-4 md:ring-offset-3 sm:ring-offset-2 ring-offset-1">
            <PhotoView src={five}>
              <img className="rounded-xl" src={five} alt="Seminar" />
            </PhotoView>
          </div>
        </div>
      </PhotoProvider>
    </div>
  );
};

export default Events;
