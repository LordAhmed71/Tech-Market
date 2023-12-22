import { heroCategories } from "../../Constants";
import "./Hero.scss";
const Arrow = (
  <svg viewBox="0 0 32 32">
    <path d="M11.42 29.42l-2.84-2.84 10.6-10.58-10.6-10.58 2.84-2.84 13.4 13.42z"></path>
  </svg>
);
const ListItems = () => {
  return (
    <ul className="listItems">
      {heroCategories.map((category, i) => (
        <li key={i} className="listItem">
          <div className="right">
            <img src={category.icon} alt="" />
            <span className="title">{category.name}</span>
            <div className="subCategory">
              <ul className="details">
                <li className="subCatHeader">New Arrival</li>
                <li className="subCatHeader">Sale</li>
                {category.list.map((item, i) => (
                  <li key={i} className="subItem">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="trend">
                <img src={category.img} alt="" />
                <span className="title">{category.imgTitle}</span>
                <span className="head">Explore Now</span>
              </div>
            </div>
          </div>
          <span className="arrow">{Arrow}</span>
        </li>
      ))}
    </ul>
  );
};

export default ListItems;
