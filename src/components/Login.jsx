import { useState } from "react";

function Login({ setIsAuth, setShowSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[email] && users[email] === password) {
      localStorage.setItem("currentUser", email);
      setIsAuth(true);
    } else {
      alert("Wrong credentials");
    }
  };

  return (
    <div className="auth-container">
      
      {/* 🔥 Heading */}
      <div className="login-heading">
        Relief Connect
      </div>

      <div className="card">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>

        <p className="switch-text">
          Don't have an account?
          <button
            className="small-btn"
            onClick={() => setShowSignup(true)}
          >
            Signup
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;