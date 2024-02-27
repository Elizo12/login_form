import React, { useState } from "react";

const myContext = React.createContext()

const ContextProvider = ({children}) =>{
    const action = "Sign Up"
    return (
        <myContext.Provider value={action}>
            {children}
        </myContext.Provider>
    )
}

export const useMyContext = ()=> React.myContext;

export default ContextProvider;