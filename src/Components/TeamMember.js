import React from "react";

const TeamMember = ({ team }) => {
  const { name, designation, image } = team;
  return (
    <div className="flex flex-col items-center">
      <img className="rounded-xl w-52 bg-white" src={image} alt={name} />
      <h6
        className="text-secondary font-extrabold lg:text-xl md:text-base text-lg md:pt-3 pt-2 text-center text_raleway
      
      sm:text-pink-600 md:text-orange-500 lg:text-blue-500 xl:text-lime-500 2xl:text-red-900
      "
      >
        {name}
      </h6>
      <p className="text-primary xl:px-0 lg:px-10 md:px-0 sm:px-20 pt-0.5 lg:text-sm text-xs text-center text_raleway">
        {designation}
      </p>
    </div>
  );
};

export default TeamMember;
