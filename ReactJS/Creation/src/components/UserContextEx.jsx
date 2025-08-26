import React, { createContext, useState } from "react";
import UserProfileusercontextex from "./UserProfileusercontextex";

const UserContext = createContext();

const UserContextEx = ({ children }) => {
  const [user, setUser] = useState({ name: "John Nige" });

  const updateUser = (newName) => {
    setUser({ name: newName });
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
      <UserProfileusercontextex />
    </UserContext.Provider>
  );
};

export { UserContextEx, UserContext };
