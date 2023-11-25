import React, { createContext } from 'react';
import useFirebase from "../hooks/useFirebase";

export const AuthContext =createContext();


const AuthContextProvider = ({children}) => {
    const authMethods =useFirebase();
    return (
        <AuthContext.Provider value={authMethods}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;