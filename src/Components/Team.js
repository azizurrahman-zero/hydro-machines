import React from "react";

import one from "../Images/Team/1.png";
import two from "../Images/Team/2.png";
import three from "../Images/Team/3.png";

const Team = () => {
  return (
    <div className="bg-[#f7f7f799] mt-10 mb-5 pt-10 pb-12 px-20 md:px-10 2xl:px-64 lg:px-20">
      <p className="2xl:pb-2 md:pb-0.5 pb-0 text-secondary text-center sm:text-lg 2xl:text-3xl md:text-xl xl:text-xl font-bold text_raleway">
        Team
      </p>
      <h1 className="2xl:text-6xl text-3xl sm:text-4xl xl:text-4xl font-bold text-primary text-center text_raleway">
        Our Leaders
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 2xl:gap-16 lg:gap-10 md:gap-5 gap-10 pt-10">
        <div className="flex flex-col items-center">
          <img
            className="rounded-xl bg-white"
            src={one}
            alt="Engr. Raiyan Silvia Habib"
          />
          <h6 className="text-secondary font-extrabold lg:text-xl md:text-base text-lg md:pt-3 pt-2 text-center text_raleway">
            Engr. Raiyan Silvia Habib
          </h6>
          <p className="text-primary lg:text-sm text-xs text-center text_raleway">
            Assistant Sales Manager,
            <br />
            Air Compressors
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="rounded-xl bg-white"
            src={two}
            alt="Engr. Khurshed Alam"
          />
          <h6 className="text-secondary font-extrabold lg:text-xl md:text-base text-lg md:pt-3 pt-2 text-center text_raleway">
            Engr. Khurshed Alam
          </h6>
          <p className="text-primary lg:text-sm text-xs text-center text_raleway">
            B. Sc. Engg. (Mechanical), CUET, MIEB
            <br />
            General Manager (Business Development & Operation)
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="rounded-xl bg-white"
            src={three}
            alt="Md. Mosharef Hossain"
          />
          <h6 className="text-secondary font-extrabold lg:text-xl md:text-base text-lg md:pt-3 pt-2 text-center text_raleway">
            Md. Mosharef Hossain
          </h6>
          <p className="text-primary lg:text-sm text-xs text-center text_raleway">
            Asst. Manager (HVAC)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
