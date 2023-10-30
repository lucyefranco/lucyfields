'use client'
import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

function Context({ children }) {
    const [isAuth, setIsAuth] = useState(false);
  
    return (
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        {children}
      </AuthContext.Provider>
    );
  }

export default Context;


export function useAuthContext(){
    return useContext(AuthContext)
}