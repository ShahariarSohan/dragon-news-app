import React, { useContext } from "react";
import userImg from "../assets/user.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="container flex justify-between items-center">
      <div className="w-2/12"></div>
      <div className=" space-x-5">
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
        <img
          className="w-10 h-10 rounded-full"
          src={user?.photoURL ? user.photoURL : userImg}
          alt=""
        />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-neutral">
            SignOut
          </button>
        ) : (
          <Link to="/login" className="btn btn-neutral">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
