import { Link } from "react-router-dom";
import { useState } from "react";
import "../style/Header.css";
import { auth } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import Lesco from "./Lesco";
const Header = () => {
  const [user, loading] = useAuthState(auth);  
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

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
          <li>
            <Link to="/">Contact Us</Link>
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
      <nav className={`headerNavSmallScreen ${isChecked ? 'expanded' : ''}`}>
        {/* <ul className="navUl">
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
        </ul> */}
        <label>
          <input type="checkbox"         
          checked={isChecked}
          onChange={handleCheckboxChange}/>
          <span className="menu">
            <span className="hamburger"></span>
          </span>
          <ul>
            <li>
            <Link to="/" onClick={handleCheckboxChange}>Home</Link>
            </li>
            <li>
            <Link to="/Dashboard" onClick={handleCheckboxChange}>Dashboard</Link>
            </li>
            {user !== null ? (
            <li>
              <button
                className="navButton"
                onClick={() => {
                  auth.signOut();
                  handleCheckboxChange();
                }}
              >
                SignOut
              </button>
            </li>
          ) : (
            <li>
              <Link className="navButton" to={"/GetStarted"} onClick={handleCheckboxChange}>
                Get Started
              </Link>
            </li>
          )}
          </ul>
        </label>
      </nav>
    </header>
  );
};

export default Header;
