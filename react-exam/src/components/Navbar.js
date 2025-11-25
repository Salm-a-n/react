import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { removeUser } from "../store/authSlice";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.auth.user);

  function logout() {
    if (user) {
      dispatch(removeUser());
      localStorage.removeItem("user");
      navigate("/login");
    }
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="navbar-brand d-flex align-items-center">
        <h4 className="mb-0">Medical Store</h4>
        {user && (
          <span className="ml-2 text-light">
            {user.username}
          </span>
        )}
      </div>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>

          {!user && (
            <>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">Register</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">Login</NavLink>
              </li>
            </>
          )}

          {user && (
            <>
              <li className="nav-item">
                <NavLink to="/medicines" className="nav-link">Medicines</NavLink>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={logout}
                >
                  Logout
                </span>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;