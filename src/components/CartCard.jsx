const CartCard = ({ item }) => {
  const { name, brand, type, price, rating, details, image } = item;
  return (
    <div>
      <div className="card w-96 h-[700px] bg-base-100 shadow-xl">
        <figure className="px-5 mt-1 pt-5">
          <img src={image} alt="Shoes" className=" object-contain" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <div className="">
            <p className="mb-2 italic">
            If you have a coupon code, please enter it in the box below
            </p>
            <textarea className="w-full h-10p-2 bg-gray-100 rounded"></textarea>
          </div>
          <div className="card-actions">
            <button className="btn btn-warning">Delete</button>
            <button className="btn btn-primary">Check Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
