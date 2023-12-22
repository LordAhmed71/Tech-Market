import Img from './../LazyLoadImage/Img';
const VerticalItem = ({ item }) => {
  return (
    <div className="verticalItem">
      <div className="top">
        <span className="tOffer">{item.offer}</span>
        <span className="name">{item.name}</span>
        <span className="desc">{item.desc}</span>
        <div className="buttons">
          <button className="buy">Buy Now</button>
          <button className="underline">Learn More</button>
        </div>
      </div>
      <div className="bottom">
        <Img src={item.img} alt="" className="img" />
      </div>
    </div>
  );
};

export default VerticalItem;
