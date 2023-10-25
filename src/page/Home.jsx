import Banner from "../components/Banner";
import Brands from "../components/Brands";
import Faq from "../components/FAQ";
import PriceChart from "../components/PriceChart";

const Home = () => {
  return (
    <div className="bg-stone-200 dark:bg-stone-600 pb-16">
      <Banner></Banner>
      <div className="max-w-[1600px] mx-auto">
        <Brands></Brands>
        <PriceChart></PriceChart>
        <div className="max-w-7xl mx-auto">
        <Faq></Faq>
        </div>
      </div>
    </div>
  );
};

export default Home;
