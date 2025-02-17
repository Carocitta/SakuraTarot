import { useEffect, useState } from "react";

const useUserName = () => {
  const [userName, setUserName] = useState(
    () => localStorage.getItem("userName") || ""
  );

  useEffect(() => {
    localStorage.setItem("userName", userName);
  }, [userName]);

  const addUserName = (newName) => {
    if (newName.trim() && newName !== userName) {
      setUserName(newName);
    }
  };

  return { userName, addUserName };
};

export default useUserName;
