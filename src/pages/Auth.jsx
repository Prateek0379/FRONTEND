import { useNavigate } from "react-router-dom";
import "../ui/styles/auth.css";

function Auth() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/app");
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Welcome back</h2>
        <p className="auth-subtitle">
          Sign in to access your dashboard
        </p>

        <div className="auth-form">
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />

          <button className="auth-btn" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
