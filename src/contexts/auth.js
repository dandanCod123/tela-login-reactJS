import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useContext();

 useEffect(() =>{
     const userToken = localStorage.getItem("user_token");
     const userStorage = localStorage.getItem("user_db");

     if(userToken && userStorage){
       const hasUser = JSON.parse(userStorage)?.filter(
           (user => user.email === JSON.parse(userToken).email)
       );
       if(hasUser) setUser(hasUser[0]);
     }
 },[]);


    return <AuthContext.Provider>{children}</AuthContext.Provider>;
};