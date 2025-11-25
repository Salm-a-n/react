import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const navigate = useNavigate();

  function registerUser() {
    const users = JSON.parse(localStorage.getItem("users")) || [];

   
    if (users.find(u => u.email === email)) {
      alert("User already exists");
      return;
    }

    
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

   
    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! Please login.");
    navigate("/login");
  }

  return (
    <div>
      <Navbar />
      <h2>Register</h2>

      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <input
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
        type="password"
      />

      <button onClick={registerUser}>Register</button>
    </div>
  );
}

export default Register;