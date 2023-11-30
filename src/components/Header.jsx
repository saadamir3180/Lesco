import { Link } from "react-router-dom";
import "../style/Header.css";
import { auth } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import Lesco from "./Lesco";
const Header = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <header className="header">
      <Lesco />
      <nav className="headerNavLargeScreen">
        <ul className="navUl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          {user !== null ? (
            <li>
              <button
                className="navButton"
                onClick={() => {
                  auth.signOut();
                }}
              >
                Sign Out
              </button>
            </li>
          ) : (
            <li>
              <Link className="navLink navButton" to={"/GetStarted"}>
                Get Started
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <nav className="headerNavSmallScreen">
        <ul className="navUl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>

          {user !== null ? (
            <li>
              <button
                className="navButton"
                onClick={() => {
                  auth.signOut();
                }}
              >
                SignOut
              </button>
            </li>
          ) : (
            <li>
              <Link className="navButton" to={"/GetStarted"}>
                Get Started
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
