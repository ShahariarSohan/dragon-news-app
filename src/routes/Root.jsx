import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
import News from "../components/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
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
]);

export default router;
