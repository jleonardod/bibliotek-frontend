import { createContext, useState, useEffect, Children } from "react"
import { getMe } from "../api/auth"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  useEffect(() => {
    const savedToken = localStorage.getItem("token")
    if (savedToken) {
      setToken(savedToken)
      getMe(savedToken).then(res => setUser(res.data))
    }
  }, [])

  const login = async(username, password) => {
    const res = await fetch("http://localhost:8000/token", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({username, password})
    })
    const data = await res.json()

    localStorage.setItem("token", data.access_token)
    setToken(data.access_token)

    const userRes = await getMe(data.access_token)
    setUser(userRes.data)
  }

  const logout = () => {
    localStorage.removeItem("token")
    setToken(null)
    setUser(null)
  }

  return(
    <AuthContext.Provider value={{user, token, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}
