import React, { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";

import seminarOne from "../Images/Event/Seminar_1.png";
import seminarTwo from "../Images/Event/Seminar_2.png";
import one from "../Images/Event/1.png";
import two from "../Images/Event/2.png";
import three from "../Images/Event/3.png";
import four from "../Images/Event/4.png";
import five from "../Images/Event/5.png";

const Events = () => {
  const [currentImage, setCurrentImage] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const images = [seminarOne, seminarTwo, one, two, three, four, five];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <div className="bg-[#f7f7f799] rounded-3xl lg:px-16 2xl:pt-0 sm:px-10 px-6 2xl:pb-16 lg:pt-5 lg:pb-14 pt-14 pb-7 shadow-2xl lg:mx-20 sm:mx-10 mx-5 lg:mt-20 mt-10 w-[unset]">
      <p className="2xl:pb-2 md:pb-0.5 pb-0 text-secondary text-center sm:text-lg xl:text-xl 2xl:text-3xl lg:text-2xl md:text-xl text-lg font-bold text_raleway">
        Photo Album
      </p>
      <h1 className="2xl:text-6xl lg:text-5xl font-bold text-primary text-center text-3xl sm:text-4xl xl:text-4xl text_raleway">
        Events
      </h1>
      <div className="flex sm:flex-row flex-col lg:pt-14 md:pt-10 sm:pt-8 pt-7 2xl:gap-12 xl:gap-8 lg:gap-6 sm:gap-4 gap-3">
        <div>
          <div className="rounded-xl ring ring-accent ring-offset-base-100 lg:ring-offset-4 md:ring-offset-3 sm:ring-offset-2 ring-offset-1">
            <img
              onClick={() => openImageViewer(0)}
              className="rounded-xl"
              src={seminarOne}
              alt="Seminar"
            />
          </div>
          <h5 className="text_raleway text-center xl:text-2xl lg:text-xl sm:text-sm text-xs font-bold md:pt-2 sm:pt-0.5 pt-1">
            Seminar 1 @2016
          </h5>
        </div>
        <div>
          <div className="rounded-xl ring ring-accent ring-offset-base-100 lg:ring-offset-4 md:ring-offset-3 sm:ring-offset-2 ring-offset-1">
            <img
              onClick={() => openImageViewer(1)}
              className="rounded-xl"
              src={seminarTwo}
              alt="Seminar"
            />
          </div>
          <h5 className="text_raleway text-center xl:text-2xl lg:text-xl sm:text-sm text-xs font-bold md:pt-2 sm:pt-0.5 pt-1">
            Seminar 2 @2018
          </h5>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col 2xl:pt-8 xl:pt-5 md:pt-3 sm:pt-3 pt-2.5 2xl:gap-12 xl:gap-8 lg:gap-6 sm:gap-4 gap-3">
        <div className="rounded-xl ring ring-accent ring-offset-base-100 lg:ring-offset-4 md:ring-offset-3 sm:ring-offset-2 ring-offset-1">
          <img
            onClick={() => openImageViewer(2)}
            className="rounded-xl"
            src={one}
            alt="Seminar"
          />
        </div>
        <div className="flex sm:justify-between sm:gap-0 gap-3 flex-col ">
          <div className="rounded-xl ring ring-accent ring-offset-base-100 lg:ring-offset-4 md:ring-offset-3 sm:ring-offset-2 ring-offset-1">
            <img
              onClick={() => openImageViewer(3)}
              className="rounded-xl"
              src={two}
              alt="Seminar"
            />
          </div>
          <div className="rounded-xl ring ring-accent ring-offset-base-100 lg:ring-offset-4 md:ring-offset-3 sm:ring-offset-2 ring-offset-1">
            <img
              onClick={() => openImageViewer(4)}
              className="rounded-xl"
              src={three}
              alt="Seminar"
            />
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col 2xl:pt-12 lg:pt-8 sm:pt-4 pt-3 2xl:gap-12 xl:gap-8 lg:gap-6 sm:gap-4 gap-3">
        <div className="rounded-xl ring ring-accent ring-offset-base-100 lg:ring-offset-4 md:ring-offset-3 sm:ring-offset-2 ring-offset-1">
          <img
            onClick={() => openImageViewer(5)}
            className="rounded-xl"
            src={four}
            alt="Seminar"
          />
        </div>
        <div className="rounded-xl ring ring-accent ring-offset-base-100 lg:ring-offset-4 md:ring-offset-3 sm:ring-offset-2 ring-offset-1">
          <img
            onClick={() => openImageViewer(6)}
            className="rounded-xl"
            src={five}
            alt="Seminar"
          />
        </div>
      </div>
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
};

export default Events;
