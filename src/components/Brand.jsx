import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { name, logo_url, brandName } = brand || {};
  return (
    <div className="mx-auto group">
      <div className="relative mx-auto w-80 lg:w-[400px] overflow-hidden rounded-lg bg-white shadow">
        <div>
          <img src={logo_url} className="w-full object-cover " alt="" />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
        <div className="absolute flex justify-between items-center inset-x-0 bottom-0 z-20 p-4">
          <h3 className="text-xl font-medium text-white">{name}</h3>
          <Link to={`/movie/${brandName}`}>
            <button className=" text-white text-opacity-80  opacity-0 group-hover:opacity-100 transition-opacity  btn btn-primary">
              Watch
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Brand;
