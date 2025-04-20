import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then((result) => console.log(result.user))
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
              <a className="link link-hover">Forgot password?</a>
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
