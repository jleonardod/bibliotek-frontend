import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate, Navigate } from "react-router-dom"

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const id_role = 2
  const [validate, setValidate] = useState(false)
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [errorPassword, setErrorPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loadingDemo, setLoadingDemo] = useState(false)
  const [error, setError] = useState(false)
  const { user, token, loginDemo, register } = useAuth()
  const navigate = useNavigate()

  if(user && token){
    return <Navigate to="/dashboard" />
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    setLoading(true)
    try{
      await register({name, email, id_role, password})
      alert("Usuario registrado con exito")
      navigate("/login")
    } catch (err) {
      setError(true)
      setLoading(false)
    }
  }

  const validateConditionsPassword = (password) => {
    setPassword(password)
    if(password.length < 6){
      setValidate(true)
    }else{
      setValidate(false)
    }
  }

  const validatePassword = (passwordConfirm) => {
    setPasswordConfirm(passwordConfirm)
    if(password !== passwordConfirm){
      setErrorPassword(true)
    }else{
      setErrorPassword(false)
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
    <div className="min-h-screen flex min-w-screen bg-[url('https://images.unsplash.com/photo-1588580000645-4562a6d2c839?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] overflow-x-hidden overflow-y-hidden md:px-16 xl:py-10 md:py-6 bg-cover bg-no-repeat bg-center">
      <div className="w-full bg-black/60 backdrop-blur-sm md:grid md:grid-cols-5 flex flex-col gap-2 px-2 md:px-0">
        <div className="md:col-span-3 flex flex-col md:justify-center md:items-left text-center md:text-left py-10 md:pt-0 md:pl-16 md:pr-24 text-white gap-y-4">
          <h2 className="font-bold md:text-7xl text-4xl">Bienvenido a <span className="text-green-600">Bibliotek</span></h2>
          <p className="font-semibold leading-4 hidden md:block">Explora, comparte y administra tus libros en un solo lugar, manten tu bilbioteca siempre organizada y descubre nuevas lecturas al alcance de un clic</p>
        </div>
        <div className="col-span-2 flex flex-col justify-center md:py-0 py-24 bg-black/40 backdrop-blur px-10 gap-y-10 text-white">
          <div className="flex flex-col gap-y-2 ">
            <div className="flex flex-col gap-y-1">
              <h1 className="font-bold xl:text-5xl text-4xl text-left">Registrate ahora</h1>
              <p>Por favor ingresa sus datos basicos o accede al Demo</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
              <input className={`w-full bg-transparent border-0 border-b-2 ${error ? "border-red-800" : "border-white"} focus:border-green-500 focus:ring-0 p-2 focus:outline-none transition-colors text-lg font-semibold`} type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombres"/>
              <input className={`w-full bg-transparent border-0 border-b-2 ${error ? "border-red-800" : "border-white"} focus:border-green-500 focus:ring-0 p-2 focus:outline-none transition-colors text-lg font-semibold`} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
              <input className={`w-full bg-transparent border-0 border-b-2 ${error || validate ? "border-red-800" : "border-white"} focus:border-green-500 focus:ring-0 p-2 focus:outline-none transition-colors text-lg font-semibold`} type="password" value={password} onChange={(e) => validateConditionsPassword(e.target.value)} placeholder="Contraseña" />
              <p className={`${validate ? "block" : "hidden"} text-red-800 font-semibold text-sm -mt-2`}>La contraseña debe contener al menos 6 caracteres</p>
              <input className={`w-full bg-transparent border-0 border-b-2 ${error ? "border-red-800" : "border-white"} focus:border-green-500 focus:ring-0 p-2 focus:outline-none transition-colors text-lg font-semibold`} type="password" value={passwordConfirm} onChange={(e) => validatePassword(e.target.value)} placeholder="Confirmar Contraseña" />
              <p className={`${errorPassword ? "block" : "hidden"} text-red-800 font-semibold text-sm -mt-2`}>Las contraseñas no coinciden</p>
              <button className="font-semibold bg-green-800 rounded-sm h-10 text-lg cursor-pointer hover:bg-green-900 transition-all flex justify-center items-center" type="submit">
                {loading ? <img className="w-[24px]" src="/loading.svg" alt="Cargando..." /> : "Registrate Ahora!"}
              </button>
            </form>
            <button onClick={handleDemoLogin} className="font-semibold bg-white text-black rounded-sm py-1 text-lg cursor-pointer flex justify-center items-center hover:bg-green-800 hover:text-white transition-all">
              {loadingDemo ? <img className="w-[24px]" src="/loading-black.svg" alt="Cargando..." /> : "Live Demo"}
            </button>
          </div>
          <div className="w-full text-center font-semibold flex flex-col gap-y-2">
            <a href="/login" className="cursor-pointer transition-color hover:text-green-800">¿Ya estas registrado? Ingresa aqui</a>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Register
