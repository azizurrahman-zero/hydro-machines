import { useEffect, useState } from "react";

const useReferences = () => {
  const [references, setReferences] = useState([]);
  useEffect(() => {
    fetch("/Json/References.json")
      .then((res) => res.json())
      .then((data) => setReferences(data));
  }, []);
  return [references];
};

export default useReferences;
