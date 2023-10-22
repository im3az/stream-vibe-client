import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../page/Home";
import AddMovies from "../page/AddMovies";
import Error from "../page/Error";

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
    ],
  },
]);

export default router;
