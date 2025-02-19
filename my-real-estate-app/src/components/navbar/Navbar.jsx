import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const user = true;

  return (
    <nav className="navbar">
      <div className="left">
        <a href="/" className="logo">
          <img src="/assets/logo.png" alt="" />
          <span>SGWEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/list">Properties</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/oscar_boy-512.png"
              alt=""
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            <span>Saiganeshwaran</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
            {dropdownOpen && (
              <div className="dropdown">
                <Link to="/login">Sign in</Link>
                <Link to="/register">Sign out</Link>
              </div>
            )}
          </div>
        ) : (
          <>
            <a href="/login">Sign in</a>
            <a href="/register" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
           
            src="/assets/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/list">Properties</a>
          <a href="/login">Sign in</a>
          <a href="/register">Sign up</a>
          <a href="/profile">Profile</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
