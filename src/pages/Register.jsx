import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const passwordRegex =
      /^(?=.*[!@#$%^&*()\-_=+[\]{};:'",.<>/?])(?=.*[A-Z])(?=.*\d).{6,}$/;
    setEmailError("");
    setPasswordError("");
    if (!emailRegex.test(email)) {
      return setEmailError("Email must end with @gmail.com");
    }
    if (!passwordRegex.test(password)) {
      return setPasswordError("Password is invalid");
    }

    createUser(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="py-10">
      <Navbar></Navbar>
      <div className="card bg-base-100 w-full max-w-lg mx-auto shrink-0 shadow-2xl py-5">
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset ">
            <label className="label">Your Name</label>
            <input
              name="name"
              type="text"
              className="input w-full"
              placeholder="name"
            />

            <label className="label">Photo URL</label>
            <input
              name="photoURL"
              type="text"
              className="input w-full"
              placeholder="Photo URL"
            />
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
            />
            <p className="text-sm text-red-600">{emailError}</p>
            <div className="relative">
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input w-full"
                placeholder="Password"
              />
              <div className="absolute text-xl right-4 top-7">
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => setShowPassword(false)}
                  ></FaEyeSlash>
                ) : (
                  <FaEye onClick={() => setShowPassword(true)}></FaEye>
                )}
              </div>
            </div>
            <p className="text-sm text-red-600">{passwordError}</p>
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
          </fieldset>
        </form>
        <p className="text-center">
          Already have an account ?
          <Link to="/login" className="ml-2 text-red-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
