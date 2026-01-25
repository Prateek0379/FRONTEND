import axios from "axios";

const API_BASE = "https://placementmatrixbackend.onrender.com/api";

/* ================= SIGNUP ================= */
export async function signup(name, email, password) {
  const res = await axios.post(`${API_BASE}/auth/signup`, {
    name,
    email,
    password,
  });
  return res.data;
}

/* ================= LOGIN ================= */
export async function login(email, password) {
  const res = await axios.post(`${API_BASE}/auth/login`, {
    email,
    password,
  });

  console.log("LOGIN RESPONSE:", res.data); // 🔍 DEBUG (IMPORTANT)

  // 🔐 FORCE SAVE TOKEN
  if (res.data?.token) {
    localStorage.setItem("token", res.data.token);
  } else {
    throw new Error("Token missing in login response");
  }

  return res.data.user;
}

/* ================= CURRENT USER ================= */
export async function getCurrentUser() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  const res = await axios.get(`${API_BASE}/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data.user;
}

/* ================= LOGOUT ================= */
export function logout() {
  localStorage.removeItem("token");
}
