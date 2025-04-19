import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa6";

const Social = () => {
  return (
    <div>
      <h3 className="font-bold">Login With</h3>
      <div className="space-y-5 my-5">
        <button className="btn bg-slate-300 w-full space-x-2">
          <FaGoogle></FaGoogle> Login with Facebook
        </button>
        <button className="btn bg-slate-300 w-full space-x-2">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
      <h3 className="font-bold">Find Us On</h3>
      <div className="space-y-5 mt-5">
        <button className="btn bg-slate-300 w-full space-x-2">
          <FaFacebook></FaFacebook> Login with Google
        </button>
        <button className="btn bg-slate-300 w-full space-x-2">
          <FaTwitter></FaTwitter> Login with Twitter
        </button>
      </div>
    </div>
  );
};

export default Social;
