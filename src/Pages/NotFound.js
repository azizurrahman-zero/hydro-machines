import React from "react";
import { Link } from "react-router-dom";
import notFound from "../Images/not_found.png";

const NotFound = () => {
  return (
    <div className="py-12">
      <img className="lg:w-8/12 m-auto" src={notFound} alt="not found" />
      <div className="flex justify-center">
        <button className="btn text-white normal-case font-semibold text-base bg-secondary border-none hover:border-none hover:bg-[#ed1b24bf] px-8 py-2.5 text_raleway ml-12 sm:ml-0">
          <Link to="/">Back to home</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
