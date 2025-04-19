import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const authInfo = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photoURL, email, password);
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
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full"
              placeholder="Password"
            />
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
