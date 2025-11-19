import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function Register() {
    var [name, setName] = useState('');
    var [email, setEmail] = useState('');
    var [password, setPassword] = useState('');
    var [passwordConf, setPasswordConf] = useState('');
    var [errorMessage, setErrorMessage] = useState('');
    var navigate = useNavigate();

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
        .then(response => {
            setErrorMessage("");
            alert("Registration Successful");

            navigate("/login"); 
        })
        .catch(error => {
            if (error.response && error.response.data) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage("Failed to register user");
            }
        });
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Register</h1>

                {errorMessage ? <div className="alert alert-danger">{errorMessage}</div> : null}

                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control"
                        value={name} onInput={(e) => setName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input type="text" className="form-control"
                        value={email} onInput={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control"
                        value={password} onInput={(e) => setPassword(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input type="password" className="form-control"
                        value={passwordConf} onInput={(e) => setPasswordConf(e.target.value)} />
                </div>

                <button className="btn btn-primary mt-3" onClick={registerUser}>Register</button>
            </div>
        </div>
    );
}

export default Register;
