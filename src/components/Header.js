import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" style={{ textDecoration: "none" }}>
              About
            </Link>
          </li>
          <li>
            <Link to="/ContactUs" style={{ textDecoration: "none" }}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }}>Cart</Link>
          </li>
          <li>
            <Link to="/Grocery" style={{ textDecoration: "none" }}>
              Grocery
            </Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

module.exports = Header;
