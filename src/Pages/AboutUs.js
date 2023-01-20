import React from "react";
import Iframe from "react-iframe";
import Team from "../Components/Team";

const AboutUs = () => {
  return (
    <>
      <div className="bg-[#0E1F51] mb-20 rounded-3xl md:py-20 sm:py-14 pt-10 pb-6  shadow-2xl md:mx-20 sm:mx-12 mx-5 md:mt-16 sm:mt-14 mt-14 w-[unset]">
        <h1 className="2xl:text-6xl md:text-3xl text-3xl sm:text-4xl xl:text-4xl lg:text-5xl font-bold text-accent text-center text_raleway">
          About Us
        </h1>
        <div className="grid xl:grid-cols-[1.5fr_2fr] grid-cols-1 gap-10 md:pt-14 pt-10 lg:px-24 md:px-12 sm:px-8 px-4">
          <div className="card w-full bg-base-100">
            <div className="card-body justify-between">
              <h3 className="text-primary font-medium text_raleway sm:text-xl text-sm">
                Bangladesh is a developing country, where technological
                development is now a prime concern. With this idea and
                dedication, <b>"Hydro Machines Ltd."</b> was established in{" "}
                <b>2005</b> to supply Industrial Machinery with Technical
                support. Since then we have been working in{" "}
                <b>
                  Textiles, Food & Beverages, Pharmaceuticals and Marine
                  Industries
                </b>{" "}
                for their requirements of utility equipment.
              </h3>
            </div>
          </div>
          <div className="card w-full bg-base-100">
            <div className="card-body justify-between h-96 xl:h-0">
              <Iframe
                url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14608.5816221569!2d90.4089268!3d23.7421937!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb0d4885d215c6637!2sHYDRO%20MACHINES%20LTD!5e0!3m2!1sen!2sbd!4v1674106198009!5m2!1sen!2sbd"
                height="100%"
                loading="lazy"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <Team />
    </>
  );
};

export default AboutUs;
