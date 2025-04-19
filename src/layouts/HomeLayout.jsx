import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Category from "../components/Category";
import Social from "../components/Social";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Navbar></Navbar>
      <div className="my-10 grid grid-cols-12 gap-5 ">
        <div className=" col-span-3">
          <Category></Category>
        </div>
        <div className="col-span-6">
          <Outlet></Outlet>
        </div>
        <div className="col-span-3">
          <Social></Social>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
