import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import checkGuest from "./CheckGuest";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function loginUser() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      alert("Invalid credentials");
      navigate("/register");
      return;
    }

    dispatch(setUser(user));
  }

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2 className="mb-4">Login</h2>

        <form className="card p-4 shadow-sm">
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={loginUser}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default checkGuest(Login);