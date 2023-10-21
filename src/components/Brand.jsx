const Brand = ({ brand }) => {
  const { name, logo_url } = brand || {};
  return (
    <div className="mx-auto">
      <div className="relative mx-auto  max-w-md overflow-hidden rounded-lg bg-white shadow">
        <div>
          <img src={logo_url} className="w-full object-cover" alt="" />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
        <div className="absolute inset-x-0 bottom-0 z-20 p-4">
          <h3 className="text-xl font-medium text-white">{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Brand;
