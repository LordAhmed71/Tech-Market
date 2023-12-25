import Img from "../LazyLoadImage/Img";
import Photo from "../../Assets/photo.png";
import { Brand } from "../../Assets";

const Slider = () => {
  return (
    <div className="slider">
      <div className="left">
        <Img src={Brand} className="brand" />
        <span className="name">Galaxy S21 Ultra</span>
        <span className="desc">
          The highest resolution photos and video on a smartphone
        </span>
        <div className="buttons">
          <button className="btn">Shop Now</button>
          <button className="underline">Learn More</button>
        </div>
      </div>
      <div className="right">
        <Img src={Photo} className="rightImg" />
      </div>
    </div>
  );
};

export default Slider;
