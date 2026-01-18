import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth";

import "../ui/styles/auth.css";

function Auth() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      navigate("/app");
    } catch {
      setError("Invalid email or password");
    }
  }

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleLogin}>
        <h2>Welcome back</h2>
        <p className="auth-subtitle">Sign in to access your dashboard</p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p style={{ color: "#ef4444" }}>{error}</p>}

        <button className="auth-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Auth;
