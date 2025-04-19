import React from "react";
import userImg from "../assets/user.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container  flex justify-end items-center">
      <div className="w-1/2 flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-bold text-red-600" : "font-bold"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "font-bold text-red-600" : "font-bold"
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? "font-bold text-red-600" : "font-bold"
            }
          >
            register
          </NavLink>
        </div>
        <div className="flex gap-5 items-center">
          <img src={userImg} alt="" />
          <button className="btn btn-neutral">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
