import React from "react";
import { BsCaretRightFill } from "react-icons/bs";

const Services = () => {
  return (
    <div>
      <div className="2xl:mt-20 mt-24 pb-10 md:px-20 sm:px-10 px-5">
        <h1 className="2xl:text-6xl text-3xl sm:text-4xl xl:text-4xl lg:text-5xl font-bold text-primary text-center text_raleway">
          Our Services
        </h1>
        <div className="gap-4 2xl:px-40 pt-10 flex flex-col">
          <div className="bg-[#f7f7f799] rounded-xl px-7 py-8 shadow">
            <h5 className="text-primary font-medium 2xl:text-3xl xl:text-2xl md:text-xl sm:text-base text-sm text_raleway">
              Supply, Installation & Commissioning of
            </h5>
            <h3 className="pt-1 text-secondary font-extrabold lg:text-3xl md:text-2xl sm:text-xl text-lg text_raleway">
              100% Oil Free High Pressure (40 bar) Air Compressor
            </h3>
          </div>
          <div className="bg-[#f7f7f799] rounded-xl px-7 py-8 shadow">
            <h5 className="text-primary font-medium 2xl:text-3xl xl:text-2xl md:text-xl sm:text-base text-sm text_raleway">
              Supply, Installation & Commissioning of
            </h5>
            <h3 className="pt-1 text-secondary font-extrabold lg:text-3xl md:text-2xl sm:text-xl text-lg text_raleway">
              HVAC Solution for Commercial Buildings
            </h3>
          </div>
          <div className="bg-[#f7f7f799] rounded-xl px-7 py-8 shadow">
            <h5 className="text-primary font-medium 2xl:text-3xl xl:text-2xl md:text-xl sm:text-base text-sm text_raleway">
              Supply, Installation & Commissioning of
            </h5>
            <h3 className="pt-1 text-secondary font-extrabold lg:text-3xl md:text-2xl sm:text-xl text-lg text_raleway">
              Trilobe Roots Blower for Waste Water Treatment Plant
            </h3>
          </div>
          <div className="pt-10">
            <h4 className="text-primary pb-10 font-extrabold lg:text-4xl md:text-3xl sm:text-2xl text-lg text_raleway text-center">
              Our Global Partners
            </h4>
            <div className="bg-[#f7f7f799] rounded-xl shadow px-6 py-10 grid lg:grid-cols-2 sm:gap-1 md:gap-2 lg:gap-0">
              <div className="flex flex-col sm:gap-1 md:gap-2 xl:gap-3">
                <div className="flex items-center gap-2 md:gap-3 lg:gap-2 xl:gap-3">
                  <BsCaretRightFill className="xl:text-3xl lg:text-xl md:text-2xl sm:text-xl text-lg" />
                  <h4 className="text-black font-bold xl:text-2xl lg:text-lg md:text-xl sm:text-lg text-base text_raleway">
                    AF Compressors, Belgium
                  </h4>
                </div>
                <div className="flex items-center gap-2 md:gap-3 lg:gap-2 xl:gap-3">
                  <BsCaretRightFill className="xl:text-3xl lg:text-xl md:text-2xl sm:text-xl text-lg" />
                  <h4 className="text-black font-bold xl:text-2xl lg:text-lg md:text-xl sm:text-lg text-base text_raleway">
                    King Sun Ind. Co., Ltd., Taiwan
                  </h4>
                </div>
                <div className="flex items-center gap-2 md:gap-3 lg:gap-2 xl:gap-3">
                  <BsCaretRightFill className="xl:text-3xl lg:text-xl md:text-2xl sm:text-xl text-lg" />
                  <h4 className="text-black font-bold xl:text-2xl lg:text-lg md:text-xl sm:text-lg text-base text_raleway">
                    Singsung Engineering Co., Ltd., Korea
                  </h4>
                </div>
              </div>
              <div className="flex flex-col sm:gap-1 md:gap-2 xl:gap-3">
                <div className="flex items-center gap-2 md:gap-3 lg:gap-2 xl:gap-3">
                  <BsCaretRightFill className="xl:text-3xl lg:text-xl md:text-2xl sm:text-xl text-lg" />
                  <h4 className="text-black font-bold xl:text-2xl lg:text-lg md:text-xl sm:text-lg text-base text_raleway">
                    Greatech Machinery Ind. Co., Ltd., Taiwan
                  </h4>
                </div>
                <div className="flex items-center gap-2 md:gap-3 lg:gap-2 xl:gap-3">
                  <BsCaretRightFill className="xl:text-3xl lg:text-xl md:text-2xl sm:text-xl text-lg" />
                  <h4 className="text-black font-bold xl:text-2xl lg:text-lg md:text-xl sm:text-lg text-base text_raleway">
                    Palfinger Marine GmbH, Austria
                  </h4>
                </div>
                <div className="flex items-center gap-2 md:gap-3 lg:gap-2 xl:gap-3">
                  <BsCaretRightFill className="xl:text-3xl lg:text-xl md:text-2xl sm:text-xl text-lg" />
                  <h4 className="text-black font-bold xl:text-2xl lg:text-lg md:text-xl sm:text-lg text-base text_raleway">
                    Accessen Shanghai Ind. Ltd., China
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
