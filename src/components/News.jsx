import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const News = () => {
  const news = useLoaderData();
  const newsCollection = news.data;
  return (
    <div>
      <h3 className="font-bold">Dragon News Home</h3>
      <div className="space-y-5">
        {newsCollection.map((news) => (
          <NewsCard key={news._id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default News;
