import Banner from "../components/Banner";
import Brands from "../components/Brands";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="mx-auto">
        <Brands></Brands>
      </div>
    </div>
  );
};

export default Home;
