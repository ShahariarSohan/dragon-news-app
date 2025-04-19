import moment from "moment";
import logo from "../assets/logo.png";
import React from "react";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className=" flex flex-col items-center space-y-5 py-10">
      <img className="" src={logo} alt="" />
      <h2 className="text-gray-400 text-lg">
        Journalism Without Fear or Favour
      </h2>
      <h2 className="font-bold text-gray-400">
        {moment().format("dddd, MMMM D, YYYY")}
      </h2>
      <div className=" w-full flex justify-start items-center  gap-5 p-3 bg-slate-300 font-semibold">
        <div className="bg-[#D72050] p-2 px-4">
          <p className="text-white">Latest</p>
        </div>
        <Marquee className="space-x-5" direction="right">
          <p>
            I can be a React component, multiple React components, or just some
            text.
          </p>
          <p>
            I can be a React component, multiple React components, or just some
            text.
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
