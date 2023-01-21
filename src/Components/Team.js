import React from "react";
import useTeam from "../Hooks/useTeam";
import TeamMember from "./TeamMember";

const Team = () => {
  const [team] = useTeam();

  return (
    <div className="bg-[#f7f7f799] mt-10 mb-5 pt-10 pb-12 px-20 md:px-10 2xl:px-56 lg:px-20">
      <p className="2xl:pb-2 md:pb-0.5 pb-0 text-secondary text-center sm:text-lg 2xl:text-3xl md:text-xl xl:text-xl font-bold text_raleway">
        Team
      </p>
      <h1 className="2xl:text-6xl text-3xl sm:text-4xl xl:text-4xl font-bold text-primary text-center text_raleway">
        Our Leaders
      </h1>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 2xl:gap-12 xl:gap-10 md:gap-y-5 md:gap-x-0 gap-10 pt-10">
        {team.map((team) => (
          <TeamMember key={team._id} team={team} />
        ))}
      </div>
    </div>
  );
};

export default Team;
