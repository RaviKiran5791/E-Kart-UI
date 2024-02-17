import React, { createContext, useContext, useEffect, useState } from 'react'

const authContext=createContext({})

const AuthProvider = ({child}) => {
    const[auth,setAuth]=useState({
        userId:"",
        userName:"",
        userRole:"CUSTOMER",
        isAuthenticated:false,
        accessExpiration:"",
        refereshExpiration:"",

    })
    useEffect(() =>{
        console.log("UseEffect");
        console.log(auth);
      },[auth]);
  return (
    <authContext.Provider value={{auth,setAuth}}>
        {child}
    </authContext.Provider>
  )
}

export default AuthProvider

export const useAuth=()=>useContext(authContext);