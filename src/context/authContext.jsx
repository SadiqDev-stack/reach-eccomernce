import { Children, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    isAuth: false,
    email: ''
  })

 

  const login = data => {
    setUser({ email: data.email, isAuth: true })
  }
  
  const logout = () => {
    setUser({ email: '', isAuth: false })
  }




  return <AuthContext.Provider value={{
    user, login, logout
  }}>
    {children}
  </AuthContext.Provider>
}


export {
    AuthContext,
    AuthProvider
}