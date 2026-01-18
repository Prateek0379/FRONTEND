import api from "./api";

export async function signup(name, email, password) {
  const res = await api.post("/api/auth/signup", {
    name,
    email,
    password,
  });

  return res.data;
}

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
