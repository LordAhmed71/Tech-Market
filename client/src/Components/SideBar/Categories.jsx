import { sidebarLinks ,heroCategories } from "./../../Constants/index";
import { Tv } from "../../Assets";
const Categories = () => {
  console.log();

  return (
    <div className="categories">
      <img src={sidebarLinks[0].icon} alt="test" />
      <div className="head">
        <span>Shop by Category</span>
        <span>See All</span>
      </div>
      <ul className="listItems">
        {sidebarLinks.map((link, i) => (
          <li key={i} className="listItem">
            <div className="right">
              <img src={link.icon} alt="" />
              <span>{link.name}</span>
            </div>
            <img src={link.icon2} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
