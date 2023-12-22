import "./CategoryCard.scss";
import Img from "./../LazyLoadImage/Img";
const CategoryCard = ({ item }) => {
  const { name, img } = item;
  return (
    <div className="categoryCard">
      <Img src={img} className="catImg" />
      <span className="title">{name}</span>
    </div>
  );
};

export default CategoryCard;
