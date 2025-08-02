import { NavLink } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Navbar = () => {
  const { user } = useAuth()

  const menuItems = {
    1: [
      { path: "/dashboard", label: "Dashboard" },
      { path: "/libros", label: "Libros" },
      { path: "/estudiantes", label: "Estudiantes" },
      { path: "/informes", label: "Informes" },
      { path: "/prestamos", label: "Prestamos" },
      { path: "/usuarios", label: "Usuarios" },
      { path: "/configuracion", label: "Configuración" }
    ],
    2: [
      { path: "/dashboard", label: "Dashboard" },
      { path: "/libros", label: "Libros" },
      { path: "/prestamos", label: "Prestamos" },
      { path: "/usuarios", label: "Usuarios" },
      { path: "/perfil", label: "Mi Perfil" }
    ]
  }

  const items = menuItems[user?.id_role] || []

  return (
    <nav>
      <ul>
        {items.map((item) => (
          <li key={item.path}>
            <NavLink
              to = {item.path}
              style={({ isActive }) => ({
                fontWeight: isActive ? 'bold' : 'normal'
              })}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
