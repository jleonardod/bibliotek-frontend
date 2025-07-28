import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard"
import NotAuthorized from "../pages/NotAuthorized"
import PrivateRoute from "./PrivateRoute"

const AppRouter = () => {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<h1>Inicio</h1>}/>
        <Route path='/login' element={<Login />}/>
        <Route 
          path='/dashboard' 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } 
        />
        <Route path='/not-authorized' element={<NotAuthorized />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
