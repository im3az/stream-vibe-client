import { useLoaderData } from "react-router-dom";
import CartCard from "../components/cartCard";
import { useState } from "react";

const Cart = () => {
  const loadedCart = useLoaderData();
  const [cartItems, setCartItems] = useState(loadedCart);
  //   console.log(loadedCart);

  const handleDelete = (id) => {
    // Filter out the deleted item and update the state
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
  };

  return (
    <div className="my-10 flex justify-evenly">
      {loadedCart ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cartItems?.map((item) => (
            <CartCard
              key={item._id}
              item={item}
              onDelete={handleDelete}
            ></CartCard>
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
