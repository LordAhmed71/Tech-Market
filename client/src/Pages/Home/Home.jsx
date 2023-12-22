import Hero from "../../Components/Hero/Hero";
import "./Home.scss";
import Deals from "./../../Components/Deals/Deals";
import TodayDeals from "../../Components/TodayDeals/TodayDeals";
import Categories from "../../Components/Categories/Categories";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <Deals />
      <TodayDeals />
      <Categories />
      <FeaturedProducts />
    </section>
  );
};

export default Home;
