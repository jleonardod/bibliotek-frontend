import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client"
import { AuthProvider } from './context/AuthContext.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
)
