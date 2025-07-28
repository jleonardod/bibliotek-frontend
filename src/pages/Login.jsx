import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate, Navigate } from "react-router-dom"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { login, user, token } = useAuth()
  const navigate = useNavigate()

  if(user && token){
    return <Navigate to="/dashboard" />
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      await login({username, password})
      navigate("/dashboard")
    } catch (err) {
      alert("Error al iniciar sesión")
    }
  }


  return(
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" value={username} onChange={(e) => setUsername(e.target.value)} />
        < br/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  )
}

export default Login
