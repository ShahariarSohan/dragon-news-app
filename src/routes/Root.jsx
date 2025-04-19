import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
import News from "../components/News";
import NewsDetails from "../layouts/NewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Navigate to="/news/01"></Navigate>,
      },
      {
        path: "/news/:id",
        element: <News></News>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/newsDetails/:id",
    element: <NewsDetails></NewsDetails>,
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
  },
]);

export default router;
