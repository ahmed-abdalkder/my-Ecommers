import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

function AuthContextProvider({children}) {

    const [token,setToken]=useState(null)

    useEffect(()=>{
    const tokn =localStorage.getItem('toky')
    if(tokn != null){
    setToken(tokn)
 }
    },[])
    return (
        <>
 <AuthContext.Provider value={{token,setToken}}>
{children}
 </AuthContext.Provider>
        </>
    )
}

export default AuthContextProvider
