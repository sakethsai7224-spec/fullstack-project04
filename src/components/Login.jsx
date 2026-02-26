import { useState } from "react";

function Login({ setIsAuth, setShowSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || {};

    if (
      users[email] &&
      users[email].password === password
    ) {
      localStorage.setItem("currentUser", users[email].name);
      setIsAuth(true);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="auth-container">
      <div className="card">

        {/* Brand Heading */}
        <div className="brand-heading">
          <span className="brand-relief">Relief </span>
          <span className="brand-connection">Connection</span>
        </div>

        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>

        <p style={{ marginTop: "15px" }}>
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