import HorizontalItem from "./HorizontalItem";
import VerticalItem from "./VerticalItem";
import {
  TodayBestDealsVertical,
  TodayBestDealsHorizontal,
} from "../../Constants/index";
import "./TodayDeals.scss";
const TodayDeals = () => {
  return (
    <div className="todayDeals">
      <div className="headingContainer">
        <h3 className="heading">Today's Best Deals</h3>
        <button className="underline">See All Deals</button>
      </div>
      <div className="offers">
        {TodayBestDealsVertical.map((item, i) => (
          <VerticalItem item={item} key={i} />
        ))}
        <div className="right">
          {TodayBestDealsHorizontal.map((item, i) => (
            <HorizontalItem item={item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodayDeals;
