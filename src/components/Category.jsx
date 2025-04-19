import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
          <NavLink
            className={({ isActive }) =>
              isActive ? "btn bg-slate-200 w-full " : "btn w-full"
            }
            to={`/news/${category.category_id}`}
            key={category.category_id}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Category;
