import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import NotAuthorized from "./pages/NotAuthorized"
import PrivateRoute from "./routes/PrivateRoute"

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
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

export default App
