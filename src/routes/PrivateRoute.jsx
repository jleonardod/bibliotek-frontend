import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const PrivateRoute = ({ children, roles }) => {
  const { user, loading } = useAuth()

  if(loading){
    return <h1>Cargando...</h1>
  }

  if(!user){
    return <Navigate to="/login" />
  }

  if(roles && !roles.includes(user.role)){
    return <Navigate to="/not-authorized" />
  }

  return children
}

export default PrivateRoute
