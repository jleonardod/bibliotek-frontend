import { createContext, useContext, useState, useEffect } from "react"
import { loginRequest, getMeRequest } from "../api/auth.js"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const savedUser = localStorage.getItem("user")
    const savedToken = localStorage.getItem("token")
    
    if(savedToken && savedUser){
      setUser(JSON.parse(savedUser))
      setToken(savedToken)
      
      //getMe(savedToken)
    }
    setLoading(false)
  }, [])

  const login = async(credentials) => {
    const data = await loginRequest(credentials)
    localStorage.setItem("token", data.access_token)
    setToken(data.access_token)

    await getMe(data.access_token)
  }

  const getMe = async(authToken) => {
    try{
      const userData = await getMeRequest(authToken)
      setUser(userData)
      localStorage.setItem("user", JSON.stringify(userData))
    }catch(err){
      console.error(err)
    }
  }

  const logout = () => {
    setToken(null)
    setUser(null)
    localStorage.clear()
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
