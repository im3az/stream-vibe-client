import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../page/Home";
import AddMovies from "../page/AddMovies";
import Error from "../page/Error";
import BrandMovie from "../components/brandMovie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addMovies",
        element: <AddMovies></AddMovies>,
      },
      {
        path: "/movie/:brandName",
        element: <BrandMovie></BrandMovie>,
        loader: () => fetch("http://localhost:5000/movie"),
      },
    ],
  },
]);

export default router;
