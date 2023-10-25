import { useLoaderData } from "react-router-dom";
import CartCard from "../components/cartCard";

const Cart = () => {
  const loadedCart = useLoaderData();
//   console.log(loadedCart);
  return (
    <div className="my-10 flex justify-evenly">
      {loadedCart ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {loadedCart?.map((item) => (
            <CartCard key={item._id} item={item}></CartCard>
          ))}
        </div>
      ) : (
        <div>
          <h2>No item added</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
