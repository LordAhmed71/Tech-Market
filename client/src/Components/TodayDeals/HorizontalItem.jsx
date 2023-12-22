import Img from "../LazyLoadImage/Img";

const HorizontalItem = ({ item }) => {
  return (
    <div className="horizontalItem">
      <div className="top">
        <span className="tOffer">{item.offer}</span>
        <span className="name">{item.name}</span>
        <span className="desc">{item.desc}</span>
        <button className="underline">Shop Now</button>
      </div>
      <div className="bottom">
        <Img src={item.img} alt="" className="img" />
      </div>
    </div>
  );
};

export default HorizontalItem;
