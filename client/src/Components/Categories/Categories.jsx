import Carousel from "../../Components/Carousel/Carousel";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import { CategoriesData } from "../../Constants";

import "./Categories.scss";
const Categories = () => {
  return (
    <div className="categories">
      <div className="heading">
        <h3>Explore More Categories</h3>
        <span className="underline">See All</span>
      </div>
      <Carousel cat={true}>
        {CategoriesData.map((cat, i) => (
          <CategoryCard item={cat} key={i} />
        ))}
      </Carousel>
    </div>
  );
};

export default Categories;
