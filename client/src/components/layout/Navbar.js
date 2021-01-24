import React, { useRef } from "react";
import "../../styles/layout/navbar.scss";
const Navbar = () => {
  const navbarUserOptionsRef = useRef();
  const focusNavbarUserAccount = () => {
    console.log(navbarUserOptionsRef);
    navbarUserOptionsRef.current.style.top == "-39vh"
      ? (navbarUserOptionsRef.current.style.top = "9vh")
      : (navbarUserOptionsRef.current.style.top = "-39vh");
  };

  return (
    <div className="navbar">
      <span className="navbar-logo" />
      <span className="navbar-brand" />
      <span className="navbar-user-account" onClick={focusNavbarUserAccount} />
      <div ref={navbarUserOptionsRef} className="navbar-user-options">
        <span className="item">Login</span>
        <span className="item">Register</span>
        <span className="item">Help</span>
      </div>
    </div>
  );
};

export default Navbar;
