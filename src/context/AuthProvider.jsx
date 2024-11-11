import React, { createContext, useEffect, useState } from "react";
import { getLocalstorage, setLocalstorage } from "../utils/LocalStorage";

export const  AuthContext = createContext();






const AuthProvider = ({ children }) => {
  const [userData,setUserData]= useState(null);

  useEffect(() => {
    setLocalstorage();
    const { employee } = getLocalstorage();
    setUserData( employee );
  }, []);

  return (
    <div>
      <AuthContext.Provider value={[userData,setUserData]}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
