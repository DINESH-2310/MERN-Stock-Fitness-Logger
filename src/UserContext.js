import React from 'react'
import { createContext,useState } from 'react'
let UserContext=createContext();
export const UseProvider=({children})=>{
    const [user,setUser]=useState({name:""});
    return(
    <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider> 

    );
};

export default UserContext