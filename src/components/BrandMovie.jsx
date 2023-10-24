import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandMovieCard from "./BrandMovieCard";
import Slider from "./Slider";

const BrandMovie = () => {
  const loadedMovies = useLoaderData();

  const [showMovies, setShowMovies] = useState([]);

  const [loadedSlider, setLoadedSlider] = useState([]);

  const [slider, setSlider] = useState(loadedSlider);

  // console.log(loadedMovies);

  const { brandName } = useParams();

  useEffect(() => {
    const findMovies = loadedMovies?.filter(
      (movie) => movie.brand === brandName
    );
    // console.log(findMovies);
    setShowMovies(findMovies);
  }, [brandName, loadedMovies]);

  // console.log("Movies to show", showMovies);

  // Slider
  useEffect(() => {
    fetch("/slider.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const showSliders = data?.filter(
          (showSlider) => showSlider.brand === brandName
        );
        // console.log(showSliders);
        setLoadedSlider(data);
        setSlider(showSliders);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [brandName]);

  // console.log(slider);
  // console.log(loadedSlider);

  return (
    <div className="mx-auto text-center ">
      <div className="pt-5">
        {slider?.map((slide) => (
          <Slider key={slide.brand} slide={slide}></Slider>
        ))}
      </div>

      <div className="py-10">
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
    </div>
  );
};

export default BrandMovie;
