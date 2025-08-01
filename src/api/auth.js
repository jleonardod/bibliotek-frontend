export const loginRequest = async (credentials) => {
  const frmData = new FormData()
  frmData.append("username", credentials.username)
  frmData.append("password", credentials.password)

  const response = await fetch("http://localhost:8000/token", {
    method: "POST",
    body: frmData,
    redirect: "follow"
  })

  if (!response.ok) throw new Error("Login Erroneo")
  return response.json()
}

export const registerRequest = async (userData) => {
  const user = JSON.stringify(userData)
  const headers = new Headers()
  headers.append("Content-Type", "application/json")
  const response = await fetch("http://localhost:8000/register", {
    method: "POST",
    headers: headers,
    body: user
  })

  if (!response.ok) throw new Error("No se pudo registrar el usuario")
  return response.json()
}

export const getMeRequest = async(token) => {
  const response = await fetch("http://localhost:8000/users/me", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  if(!response.ok) throw new Error("No se pudo obtener el usuario")
  return response.json()
}

export const loginDemoRequest = async() => {
  const response = await fetch("http://localhost:8000/demo", {
    method: "POST",
    redirect: "follow"
  })

  return response.json()
}

export const recoveryPasswordRequest = async(email) => {
  const frmData = new FormData()
  frmData.append("email", email.username)
  const response = await fetch("http://localhost:8000/forgot-password", {
    method: "POST",
    body: frmData,
    redirect: "follow"
  })
  
  if (!response.ok) throw new Error("Error al intentar recuperar la contraseña")
  return response.json()
}
