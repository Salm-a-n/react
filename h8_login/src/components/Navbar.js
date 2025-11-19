import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-3">
            
            <NavLink to="/" className="navbar-brand  navbar-brand-custom">
                <h4 className="m-0 text-white  navbar-brand-custom">My App</h4>
            </NavLink>

           
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarMenu"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            
            <div className="collapse navbar-collapse" id="navbarMenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink 
                            to="/register" 
                            className="nav-link nav-custom"
                        >
                            Register
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink 
                            to="/login" 
                            className="nav-link nav-custom"
                        >
                            Login
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
