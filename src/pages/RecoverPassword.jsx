import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate, Navigate } from "react-router-dom"

const RecoverPassword = () => {
  const [username, setUsername] = useState("")
  const [loading, setLoading] = useState(false)
  const [loadingDemo, setLoadingDemo] = useState(false)
  const [error, setError] = useState(false)
  const { user, token, loginDemo, recoveryPassword } = useAuth()
  const navigate = useNavigate()

  if(user && token){
    return <Navigate to="/dashboard" />
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    setLoading(true)
    try{
      await recoveryPassword({username})
      alert("Se han enviado las instrucciones a tu correo")
      setLoading(false)
      //navigate("/login")
    } catch (err) {
      setError(true)
      setLoading(false)
    }
  }

  const handleDemoLogin = async(e) => {
    e.preventDefault()
    setLoadingDemo(true)
    try {
      await loginDemo()
      navigate("/dashboard")
    } catch(err) {
      setError(true)
      setLoadingDemo(false)
    }
  }


  return(
    <div className="min-h-screen flex justify-center min-w-screen bg-[url('https://images.unsplash.com/photo-1588580000645-4562a6d2c839?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] overflow-x-hidden overflow-y-hidden md:px-16 md:py-10 bg-cover bg-no-repeat bg-center">
      <div className="col-span-2 flex flex-col justify-center md:py-0 py-24 bg-black/70 backdrop-blur px-10 gap-y-16 text-white">
        <div className="flex flex-col gap-y-6 ">
          <div className="flex flex-col gap-y-3">
            <h1 className="font-bold md:text-5xl text-4xl text-left">Recupera tu contraseña</h1>
            <p>Por favor ingresa tu correo electronico para poder ayudarte</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
            <input className={`w-full bg-transparent border-0 border-b-2 ${error ? "border-red-800" : "border-white"} focus:border-green-500 focus:ring-0 p-2 focus:outline-none transition-colors text-lg font-semibold`} type="email" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Email"/>
            {error ? <span className="text-red-800 font-semibold text-lg text-center">No se pudo encontrar el correo</span> : null}
            <button className="font-semibold bg-green-800 rounded-sm h-12 text-lg cursor-pointer hover:bg-green-900 transition-all flex justify-center items-center" type="submit">
              {loading ? <img className="w-[24px]" src="/loading.svg" alt="Cargando..." /> : "Recuperar Contraseña"}
            </button>
          </form>
          <button onClick={handleDemoLogin} className="font-semibold bg-white text-black rounded-sm py-1 text-lg cursor-pointer flex justify-center items-center hover:bg-green-800 hover:text-white transition-all">
            {loadingDemo ? <img className="w-[24px]" src="/loading-black.svg" alt="Cargando..." /> : "Live Demo"}
          </button>
        </div>
        <div className="w-full text-center font-semibold flex flex-col gap-y-2">
          <a href="/login" className="cursor-pointer transition-color hover:text-green-800">Regresa al inicio</a>
          <a href="/registro" className="cursor-pointer transition-color hover:text-green-800">¿No tienes aun una cuenta? Registrate</a>
        </div>
      </div>
    </div>
  )
}

export default RecoverPassword
