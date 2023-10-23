import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BrandMovie = () => {
  const loadedMovies = useLoaderData();

  const [showMovies, setShowMovies] = useState([]);

  console.log(loadedMovies);

  const { brandName } = useParams();

  useEffect(() => {
    const findMovies = loadedMovies?.filter(
      (movie) => movie.brand === brandName
    );
    // console.log(findMovies);
    setShowMovies(findMovies);
  }, [brandName]);

  console.log("Movies to show", showMovies);

  return (
    <div>
      <h2>Total: {loadedMovies.length} </h2>
      <h2>Brand Name : {brandName}</h2>
      <h2>Movies to show: {showMovies.length}</h2>
    </div>
  );
};

export default BrandMovie;
