import Hero from "../../Components/Hero/Hero";
import { DealsData } from "../../Constants";
import "./Home.scss";
import Deals from "./../../Components/Deals/Deals";
import TodayDeals from "../../Components/TodayDeals/TodayDeals";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Deals />
      <TodayDeals/>
      <div style={{ height: "1000px" }}></div>
    </div>
  );
};

export default Home;
