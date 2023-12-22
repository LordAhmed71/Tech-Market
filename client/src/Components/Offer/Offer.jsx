import Img from "../LazyLoadImage/Img";
import "./Offer.scss";
const Offer = ({ offer }) => {
  return (
    <div className="offer">
      <Img src={offer.img} className="img" />
      <div className="desc">{offer.desc}</div>
      <button className="btn">See All</button>
    </div>
  );
};

export default Offer;
