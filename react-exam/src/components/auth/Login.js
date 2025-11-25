import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import checkGuest from "./CheckGuest";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function loginUser() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      alert("Invalid credentials");
      return;
    }
    dispatch(setUser(user));
    navigate("/medicines");
  }

  return (
    <div>
      <Navbar />
      <h2>Login</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={loginUser}>Login</button>
    </div>
  );
}

export default checkGuest(Login);