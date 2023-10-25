import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const BrandMovieCard = ({ movies }) => {
  const { name, brand, type, price, rating, details, image, _id } = movies;
  // console.log(name);
  // console.log(_id);

  const generateStars = (rating) => {
    const maxRating = 5; // Assuming a maximum rating of 5 stars

    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      const starClass =
        i <= rating ? "text-yellow-300" : "text-gray-300 dark:text-gray-500";

      stars.push(
        <svg
          key={i}
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path
            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
            className={starClass}
          />
        </svg>
      );
    }

    return stars;
  };

  const stars = generateStars(rating);

  return (
    <div className="border ">
      <div className="w-[380px] md:w-[360px] lg:w-96  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-center">
          <img
            className="p-8 h-96  bg-cover rounded-t-lg"
            src={image}
            alt="product image"
          />
        </div>
        <div className=" pb-5 text-center ">
          <div className="py-2">
            <h5 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {name}
            </h5>
          </div>

          <div className="px-7 font-normal my-2 text-gray-900 dark:text-white flex justify-around">
            <div>
              <h2>Brand: {brand}</h2>
            </div>
            <div>
              <h2>Type: {type}</h2>
            </div>
          </div>

          <div className="flex items-center justify-around py-2">
            {/* rating */}
            <div className="flex items-center   mb-5">
              {stars}

              <div>
                <span className="bg-blue-100 text-blue-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-1">
                  {rating}
                </span>
              </div>

              <div className="ml-5 ">
                <span className="text-xl font-medium text-gray-900 dark:text-white">
                  ${price}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-evenly">
            <Link to={`/movie/${_id}`}>
              <button className="btn btn-primary">Update</button>
            </Link>
            <Link to={`/details/${_id}`} className="">
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandMovieCard;
