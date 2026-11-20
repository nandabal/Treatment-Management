import { createContext, useContext, useState } from "react";

const AuthContext =createContext()



export const Provider = ({children}) => {
    const [data, setData] = useState(null)
  return (
    <AuthContext.Provider value={{data, setData}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useData =()=>{
  return useContext(AuthContext)
}