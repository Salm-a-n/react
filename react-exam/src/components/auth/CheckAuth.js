
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const checkAuth = (Component) => {
  function Wrapper(props) {
    const user = useSelector(store => store.auth.user);
    const navigate = useNavigate();

    useEffect(() => {
      if (!user) {
        navigate("/login");
      }
    }, [user, navigate]);

    return user ? <Component {...props} /> : null;
  }

  return Wrapper;
};

export default checkAuth;