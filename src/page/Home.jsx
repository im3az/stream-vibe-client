import Banner from "../components/Banner";
import Brands from "../components/Brands";

const Home = () => {
  return (
    <div className="bg-[#EBE8E2]">
      <Banner></Banner>
      <div className="mx-auto ">
        <Brands></Brands>
      </div>
    </div>
  );
};

export default Home;
