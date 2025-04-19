import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Navbar></Navbar>
    </div>
  );
};

export default HomeLayout;
