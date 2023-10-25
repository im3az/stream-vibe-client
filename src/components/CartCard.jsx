import Swal from "sweetalert2";

const CartCard = ({ item, onDelete }) => {
  const { _id, name, brand, type, price, rating, details, image } = item;

  const handleDelete = (id) => {
    // console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(`https://stream-vibe-server.vercel.app/cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Removed!", "Movie has been remove.", "success");
              onDelete(id);
            }
          });
      }
    });
  };
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
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-warning"
            >
              Remove
            </button>
            <button className="btn btn-primary">Check Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
