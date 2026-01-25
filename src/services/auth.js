import axios from "axios";

const api = axios.create({
  baseURL: "https://placementmatrixbackend.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

/* SIGNUP */
export async function signup(name, email, password) {
  const res = await api.post("/auth/signup", {
    name,
    email,
    password,
  });
  return res.data;
}

/* LOGIN */
export async function login(email, password) {
  const res = await api.post("/auth/login", {
    email,
    password,
  });

  localStorage.setItem("token", res.data.token);
  return res.data.user;
}

/* CURRENT USER */
export async function getCurrentUser() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  const res = await api.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data.user;
}

export function logout() {
  localStorage.removeItem("token");
}
