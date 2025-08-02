import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'

const Dashboard = () => {
  const { user, logout } = useAuth()

  return (
    <>
      <Navbar />
      <h1>Bienvenido, {user.name}</h1>
      <p>Rol: {user.id_role}</p>
      <button onClick={logout}>Cerrar Sesión</button>
    </>
  )
}

export default Dashboard
