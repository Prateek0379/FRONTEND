import api from "./api";

/* 🔐 LOGIN */
export async function login(email, password) {
  const res = await api.post("/api/auth/login", {
    email,
    password,
  });

  if (res.data?.token) {
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
  }

  return res.data;
}

/* 🆕 SIGNUP */
export async function signup(name, email, password) {
  const res = await api.post("/api/auth/signup", {
    name,
    email,
    password,
  });

  return res.data;
}

/* 🔄 RESTORE SESSION */
export async function getCurrentUser() {
  const res = await api.get("/api/auth/me");
  return res.data.user;
}

/* 🚪 LOGOUT */
export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}
