import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConf, setPasswordConf] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    function registerUser() {

        if (password !== passwordConf) {
            setErrorMessage("Passwords do not match");
            return;
        }

        axios.post("https://worksheet-auth.mashupstack.com/register", {
            user_name: name,
            email: email,
            password: password
        })
        .then(() => {
            alert("Registration Successful");
            navigate("/login");
        })
        .catch(error => {
            if (error.response && error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage("Registration failed");
            }
        });
    }

    return (
        <div>
            <Navbar />

            <div className="container col-6 mt-4">
                <h2>Register</h2>

                {errorMessage && (
                    <div className="alert alert-danger">{errorMessage}</div>
                )}

                <div className="form-group mt-2">
                    <label>Name</label>
                    <input 
                        type="text"
                        className="form-control"
                        onInput={(e) => setName(e.target.value)}
                    />
                </div>

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

                <div className="form-group mt-2">
                    <label>Confirm Password</label>
                    <input 
                        type="password"
                        className="form-control"
                        onInput={(e) => setPasswordConf(e.target.value)}
                    />
                </div>

                <button 
                    className="btn btn-primary mt-3"
                    onClick={registerUser}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default Register;
