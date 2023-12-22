import { Compare, Wishlist, Vendor } from "../../Assets/index";
import Photo from "../../Assets/photo.png";
import "./ProductCard.scss";
import Img from './../LazyLoadImage/Img';
const ProductCard = () => {
  return (
    <div className="productCard">
      <div className="offerDetails">
        <span className="offer">sale</span>
        <div className="icons">
          <img src={Compare} alt="" className="icon" />
          <img src={Wishlist} alt="" className="icon" />
        </div>
      </div>
      <div className="poster">
        <Img src={Photo} alt="" className="img" />
      </div>
      <div className="details">
        <span className="desc">
          The highest resolution photos and video on a smartphone
        </span>
        <div className="vendor">
          <img src={Vendor} alt="" className="vendorIcon" />
          <span className="vendorName">Sanvo</span>
        </div>
        <div className="prices">
          <span className="price">$1220.00</span>
          <span className="oldPrice">$1500.00</span>
        </div>
      </div>
      <div className="button">
        <button className="btn">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
