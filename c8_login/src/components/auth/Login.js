import axios from "axios";
import { useState } from "react";
import Navbar from "../Navbar";

function Login() {
    var [email, setEmail] = useState('');
    var [password, setPassword] = useState('');
    var [errorMessage, setErrorMessage] = useState('');

    function attemptLogin() {

        axios.post("https://worksheet-auth.mashupstack.com/login", {
            email: email,
            password: password
        })
        .then(response => {
            setErrorMessage("");
            console.log("TOKEN:", response.data.token);

            alert("Successfully Logged In");
        })
        .catch(error => {
            if (error.response && error.response.data) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage("Failed to login user");
            }
        });
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Login</h1>

                {errorMessage ? <div className="alert alert-danger">{errorMessage}</div> : null}

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

                <button className="btn btn-primary mt-3" onClick={attemptLogin}>Login</button>
            </div>
        </div>
    );
}

export default Login;
