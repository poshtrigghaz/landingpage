import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="">
      <div className="app navbar">
        <div className="logo">logo</div>
        <div className="links">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Voluteer Now</a>
          <a href="">Contact Us</a>
        </div>
        <div className="btn-div">
          <button>Join Us</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
