import Hero from "../../Components/Hero/Hero";
import "./Home.scss";
import Deals from "./../../Components/Deals/Deals";
import TodayDeals from "../../Components/TodayDeals/TodayDeals";
import Categories from "../../Components/Categories/Categories";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";


const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Deals />
      <TodayDeals />
      <Categories />
      <FeaturedProducts/>
      <div style={{ height: "1000px" }}></div>
    </div>
  );
};

export default Home;
