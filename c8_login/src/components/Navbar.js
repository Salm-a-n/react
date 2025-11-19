import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="navbar-brand">
                <h4>My App</h4>
            </div>

            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse mr-auto" id="navbarNav">
                <ul className="navbar-nav ml-auto" style={{ color: "#ffffff" }}>
                    
                    {/* Home */}
                    <li className="nav-item">
                        <NavLink 
                            to="/" 
                            className={({ isActive }) =>
                                "nav-link " + (isActive ? "active" : "")
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink 
                            to="/register" 
                            className={({ isActive }) =>
                                "nav-link " + (isActive ? "active" : "")
                            }
                        >
                            Register
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink 
                            to="/login" 
                            className={({ isActive }) =>
                                "nav-link " + (isActive ? "active" : "")
                            }
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
