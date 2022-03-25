import React from "react";
import isaglogo from "../img/isaglogo.png";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <div>
      <img src={isaglogo} alt="" className="w-32" />
    </div>
  );
};

const NavLists = () => {
  return (
    <div className="flex items-center text-white">
      <div className="mx-3">
        <Link to="/">Home</Link>
      </div>
      <div className="mx-3">
        <Link to="/about">About</Link>
      </div>
      <div className="mx-3">
        <Link to="/achievement">Achievement</Link>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="flex justify-around items-center bg-black">
      <NavLogo />
      <NavLists />
      <LoginModal />
    </div>
  );
};

export default Navbar;
