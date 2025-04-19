import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import NewsDetailCard from "../components/NewsDetailCard";
import Social from "../components/Social";

const NewsDetails = () => {
  const { data } = useLoaderData();
  const newsDetail = data[0];

  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className="my-10 grid grid-cols-12 gap-5 ">
        <div className="col-span-9">
          <NewsDetailCard newsDetail={newsDetail}></NewsDetailCard>
        </div>
        <div className="col-span-3">
          <Social></Social>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
