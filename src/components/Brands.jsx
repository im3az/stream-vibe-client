import { useEffect, useState } from "react";
import Brand from "./Brand";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("/brand.json")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="py-5 mx-auto  max-w-[1600px]">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-3">
          Explore our wide variety of categories
        </h2>
        <p className="text-lg">
          Whether you&apos;re looking for a comedy to make you laugh, a drama to
          make you think, or a documentary to learn something new
        </p>
      </div>

      <div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 mt-10">
          {brands.map((brand) => (
            <Brand brand={brand} key={brand.id}></Brand>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
