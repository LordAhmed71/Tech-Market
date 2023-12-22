import Carousel from "../Carousel/Carousel";
import ProductCard from "../ProductCard/ProductCard";
import "./FeaturedProducts.scss";
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const FeaturedProducts = () => {
  return (
    <div className="featuredProducts">
      <div className="heading">
        <h3>Featured Products</h3>
        <span className="underline">See All</span>
      </div>
      <Carousel cat={true}>
        {data.map((item, i) => (
          <ProductCard item={item} key={i} />
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;
