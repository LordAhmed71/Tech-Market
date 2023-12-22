import Offer from "./../Offer/Offer";
import Carousel from "./../Carousel/Carousel";
import { DealsData } from "../../Constants/index";
import "./Deals.scss";
import ProductCard from "../ProductCard/ProductCard";
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Deals = () => {
  return (
    <div className="dealsContainer">
      <div className="heading">
        <h3>Our Featured Offers</h3>
        <span className="underline">See All</span>
      </div>
      {DealsData.map((d, i) => (
        <div className="deals">
          <Offer offer={d} />
          <Carousel>
            {data.map((item, i) => (
              <ProductCard key={i} />
            ))}
          </Carousel>
        </div>
      ))}
    </div>
  );
};

export default Deals;
