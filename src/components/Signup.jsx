import { useState } from "react";

function Signup({ setShowSignup }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[email]) {
      alert("User already exists");
      return;
    }

    users[email] = {
      name: name,
      password: password,
    };

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");
    setShowSignup(false);
  };

  return (
    <div className="auth-container">
      <div className="card">
        <h2>Signup</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <p>
          Already have an account?
          <button
            className="small-btn"
            onClick={() => setShowSignup(false)}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default Signup;