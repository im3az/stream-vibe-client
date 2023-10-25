import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../page/Home";
import AddMovies from "../page/AddMovies";
import Error from "../page/Error";
import BrandMovie from "../components/brandMovie";
import MovieDetails from "../page/MovieDetails";
import UpdatePage from "../page/UpdatePage";
import Cart from "../page/Cart";

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
        path: "/movies/:brandName",
        element: <BrandMovie></BrandMovie>,
        loader: () => fetch("http://localhost:5000/movies"),
      },
      {
        // path: "updateMovie",
        // element: <UpdatePage></UpdatePage>,
      },
      {
        path: "/details/:_id",
        element: <MovieDetails></MovieDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params._id}`),
      },
      {
        path: "cart",
        element: <Cart></Cart>,
        loader: () => fetch("http://localhost:5000/cart"),
      },
    ],
  },
]);

export default router;
