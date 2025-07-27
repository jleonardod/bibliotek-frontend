import axios from "axios"

export const login = (username, password) => 
  axios.post("http://localhost:8000/token", {username, password})

export const getMe = (token) =>
  axios.get("http://localhost:8000/users/me", {headers: {Authorization: `Bearer ${token}`}})
