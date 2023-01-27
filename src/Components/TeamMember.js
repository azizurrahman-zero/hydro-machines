import React from "react";

const TeamMember = ({ team }) => {
  const { name, designation, image } = team;
  return (
    <div className="flex flex-col items-center">
      <img className="rounded-xl w-52 bg-white" src={image} alt={name} />
      <h6 className="text-secondary font-extrabold lg:text-xl md:text-base text-lg md:pt-3 pt-2 text-center text_raleway">
        {name}
      </h6>
      <p className="text-primary xl:px-0 lg:px-10 md:px-0 sm:px-20 pt-0.5 lg:text-sm text-xs text-center text_raleway">
        {designation}
      </p>
    </div>
  );
};

export default TeamMember;
