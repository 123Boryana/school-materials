import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";

export default function Main() {
  // Context
  const [auth, setAuth] = useAuth();
  // Hooks
  const navigate = useNavigate();

  // Logout function
  const logout = () => {
    setAuth({ user: null, token: "", refreshToken: "" });
    localStorage.removeItem("auth");
    navigate("/login");
  };

  // Check if user is logged in
  const loggedIn =
    auth.user !== null && auth.token !== "" && auth.refreshToken !== "";

  return (
    <nav className="nav d-flex justify-content-between lead">
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>

      {loggedIn ? (
        <>
          <NavLink className="nav-link" to="/dashboard">
            Dashboard
          </NavLink>

          <div className="dropdown">
            <li>
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                {auth?.user?.name ? auth.user.name : auth.user.username}
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="nav-link" to="/dashboard">
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <a onClick={logout} className="nav-link">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </div>
        </>
      ) : (
        <>
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
          <NavLink className="nav-link" to="/register">
            Register
          </NavLink>
        </>
      )}
    </nav>
  );
}
