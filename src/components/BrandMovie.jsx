import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandMovieCard from "./BrandMovieCard";

const BrandMovie = () => {
  const loadedMovies = useLoaderData();

  const [showMovies, setShowMovies] = useState([]);

  // console.log(loadedMovies);

  const { brandName } = useParams();

  useEffect(() => {
    const findMovies = loadedMovies?.filter(
      (movie) => movie.brand === brandName
    );
    // console.log(findMovies);
    setShowMovies(findMovies);
  }, [brandName]);

  // console.log("Movies to show", showMovies);

  return (
    <div>
      {showMovies.length > 0 ? (
        <div className="flex flex-wrap gap-10 justify-center  mt-10 items-center mx-auto ">
          {showMovies.map((movies) => (
            <BrandMovieCard key={movies._id} movies={movies}></BrandMovieCard>
          ))}
        </div>
      ) : (
        <div className="flex mt-10 items-center justify-center">
          <img src="https://i.ibb.co/p6DQPBy/no-products.jpg" alt="" />
        </div>
      )}
    </div>
  );
};

export default BrandMovie;
