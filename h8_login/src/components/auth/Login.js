import axios from "axios";
import { useState } from "react";
import Navbar from "../Navbar";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function attemptLogin() {
        axios.post("https://worksheet-auth.mashupstack.com/login", {
            email: email,
            password: password
        })
        .then(response => {
            alert("Successfully Logged In");
            console.log("TOKEN:", response.data.token);
            setErrorMessage("");
        })
        .catch(error => {
            if (error.response && error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage("Login failed");
            }
        });
    }

    return (
        <div>
            <Navbar />

            <div className="container col-6 mt-4">
                <h2>Login</h2>

                {errorMessage && (
                    <div className="alert alert-danger">{errorMessage}</div>
                )}

                <div className="form-group mt-2">
                    <label>Email</label>
                    <input 
                        type="email"
                        className="form-control"
                        onInput={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group mt-2">
                    <label>Password</label>
                    <input 
                        type="password"
                        className="form-control"
                        onInput={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button 
                    className="btn btn-primary mt-3"
                    onClick={attemptLogin}
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;
