import { useLoaderData } from "react-router-dom";

const MovieDetails = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);

  return (
    <div>
      <div className="hero min-h-screen bg-[#EBE8E2] ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={loadedData.image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className=" text-center">
            <h1 className="text-5xl font-bold">{loadedData.name}</h1>
            <p className="py-6 text-lg  text-justify">{loadedData.details}</p>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
