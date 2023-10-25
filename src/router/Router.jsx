import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../page/Home";
import AddMovies from "../page/AddMovies";
import Error from "../page/Error";
import BrandMovie from "../components/brandMovie";
import MovieDetails from "../page/MovieDetails";
import UpdatePage from "../page/UpdatePage";
import Cart from "../page/Cart";
import Login from "../page/Login";
import SignUp from "../page/SignUp";
import PrivateRout from "../Providers/PrivateRout";

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
        element: (
          <PrivateRout>
            <AddMovies></AddMovies>
          </PrivateRout>
        ),
      },
      {
        path: "/movies/:brandName",
        element: <BrandMovie></BrandMovie>,
        loader: () => fetch("https://stream-vibe-server.vercel.app/movies"),
      },
      {
        path: "/movie/:_id",
        element: <UpdatePage></UpdatePage>,
        loader: ({ params }) =>
          fetch(`https://stream-vibe-server.vercel.app/movie/${params._id}`),
      },
      {
        path: "/details/:_id",
        element: (
          <PrivateRout>
            <MovieDetails></MovieDetails>
          </PrivateRout>
        ),
        loader: ({ params }) =>
          fetch(`https://stream-vibe-server.vercel.app/details/${params._id}`),
      },
      {
        path: "cart",
        element: (
          <PrivateRout>
            <Cart></Cart>
          </PrivateRout>
        ),
        loader: () => fetch("https://stream-vibe-server.vercel.app/cart"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
