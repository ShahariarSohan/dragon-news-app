import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  return (
    <div>
      <h3 className="font-bold">All Category</h3>
      <div className="space-y-2 my-5">
        {categories.map((category) => (
          <Link
            to={`/news/${category.category_id}`}
            key={category.category_id}
            className="btn bg-slate-200 w-full "
          >
            {category.category_name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
