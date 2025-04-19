import React from "react";
import { Link } from "react-router-dom";

const NewsDetailCard = ({ newsDetail }) => {
  const { image_url, title, details } = newsDetail;
  return (
    <div>
      <h3 className="font-bold">Dragon News</h3>
      <div className="flex flex-col  p-5 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div>
          <img
            src={image_url}
            alt=""
            className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
          />
          <h2 className="mb-1 text-xl font-semibold">{title}</h2>
          <p className="text-sm dark:text-gray-600">{details}</p>
        </div>
        <Link to="/" className="w-2/6 btn btn-secondary">
          All Category News Here
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailCard;
