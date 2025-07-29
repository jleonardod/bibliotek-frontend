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
    <div className="min-h-screen flex min-w-screen bg-[url('https://images.unsplash.com/photo-1588580000645-4562a6d2c839?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] overflow-x-hidden overflow-y-hidden px-16 py-10 bg-cover bg-no-repeat bg-center">
      <div className="w-full bg-black/60 backdrop-blur-sm grid grid-cols-5 gap-2">
        <div className="col-span-3 flex flex-col justify-center items-left pl-16 pr-24 text-white gap-y-4">
          <h2 className="font-bold text-7xl">Bienvenido a Bibliotek</h2>
          <p className="font-semibold leading-4">Explora, comparte y administra tus libros en un solo lugar, manten tu bilbioteca siempre organizada y descubre nuevas lecturas al alcance de un clic</p>
        </div>
        <div className="col-span-2 flex flex-col justify-center bg-black/40 backdrop-blur px-10 gap-y-16 text-white">
          <div className="flex flex-col gap-y-6 ">
            <div className="flex flex-col gap-y-3">
              <h1 className="font-bold text-5xl text-left">Ingresa ahora</h1>
              <p>Por favor ingresa tus credenciales o accede al demo</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
              <input className="w-full bg-transparent border-0 border-b-2 border-white focus:border-green-500 focus:ring-0 p-2 focus:outline-none transition-colors text-lg font-semibold" type="email" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Email"/>
              <input className="w-full bg-transparent border-0 border-b-2 border-white focus:border-green-500 focus:ring-0 p-2 focus:outline-none transition-colors text-lg font-semibold" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
              <button className="font-semibold bg-green-800 rounded-sm py-3 text-lg cursor-pointer hover:bg-green-900 transition-all" type="submit">Iniciar Sesión</button>
              <button className="font-semibold bg-white text-black rounded-sm py-1 text-lg cursor-pointer hover:bg-green-800 hover:text-white transition-all" type="submit">Live Demo</button>
            </form>
          </div>
          <div className="w-full text-center font-semibold flex flex-col gap-y-2">
            <a href="" className="cursor-pointer transition-color hover:text-green-800">¿Olvidaste tu contraseña?</a>
            <a href="" className="cursor-pointer transition-color hover:text-green-800">¿No tienes aun una cuenta? Registrate</a>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Login
