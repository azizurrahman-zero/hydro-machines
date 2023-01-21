import { useEffect, useState } from "react";

const useTeam = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch("/Json/Team.json")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);
  return [team];
};

export default useTeam;
