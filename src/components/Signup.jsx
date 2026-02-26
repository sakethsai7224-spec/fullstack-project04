import { useState } from "react";

function Signup({ setShowSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[email]) {
      alert("User already exists");
      return;
    }

    users[email] = password;

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");
    setShowSignup(false);
  };

  return (
    <div className="auth-container">
      <div className="card">
        <h2>Signup</h2>

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

        <button onClick={handleSignup}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Signup;