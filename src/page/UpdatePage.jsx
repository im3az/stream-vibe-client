const UpdatePage = () => {
  return (
    <div className="bg-[#F4F3F0] min-h-screen p-24 text-center">
      <h2 className="text-4xl text-[#1D232A] font-extrabold">Add a Movie</h2>
      <form>
        {/* form name and brand name row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Movie Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Movie Name"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <select
                name="brand"
                className="input input-bordered w-full"
                required
              >
                <option value="">Select a Brand</option>
                <option value="netflix">netflix</option>
                <option value="prime">prime</option>
                <option value="hulu">hulu</option>
                <option value="hbo">hbo</option>
                <option value="disney">disney</option>
                <option value="apple">apple</option>
              </select>
            </label>
          </div>
        </div>

        {/* form type and price row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <label className="input-group">
              <select
                name="type"
                className="input input-bordered w-full"
                required
              >
                <option value="">Select a Movie Type</option>
                <option value="action">action</option>
                <option value="comedy">comedy</option>
                <option value="drama">drama</option>
                <option value="horror">science Fiction</option>
              </select>
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="price"
                placeholder="Price"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* form Rating and description row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <select
                name="rating"
                className="input input-bordered w-full"
                required
              >
                <option value="">Select a Movie Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Short description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="Short description"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* form Image url row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Movie image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Add Movie"
          className="btn btn-primary w-1/2"
        />
      </form>
    </div>
  );
};

export default UpdatePage;
