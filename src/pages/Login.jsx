import React, { useContext, useRef } from "react";
import Navbar from "../components/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { logIn, resetPassword } = useContext(AuthContext);
  const emailRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logIn(email, password)
      .then(() => navigate(`${location?.state ? location.state : "/"}`))
      .catch((error) => console.log(error.message));
  };
  const handleResetPassword = () => {
    const email = emailRef.current.value;

    resetPassword(email)
      .then(() => {
        alert("Password reset email sent");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="py-10">
      <Navbar></Navbar>
      <div className="card bg-base-100 w-full max-w-lg mx-auto shrink-0 shadow-2xl py-5">
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset ">
            <label className="label">Email</label>
            <input
              ref={emailRef}
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full"
              placeholder="Password"
            />
            <div>
              <button
                onClick={handleResetPassword}
                type="button"
                className="link link-hover"
              >
                Forgot password?
              </button>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <p className="text-center">
          Don't have an account ?
          <Link to="/register" className="ml-2 text-red-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
