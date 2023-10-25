import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MovieDetails = () => {
  const loadedData = useLoaderData();
  //   console.log(loadedData);
  const handleAddToCart = () => {
// sending data to server
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loadedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged === true) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Added to cart",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

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
            <button onClick={handleAddToCart} className="btn btn-primary">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
