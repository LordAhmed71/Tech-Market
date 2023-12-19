import { sidebarHeaderLinks } from "./../../Constants/index";
const Menu = () => {
  return (
    <ul className="menu">
      {sidebarHeaderLinks.map((link, i) => (
        <li key={i} className="item">
          <div className="right">
            <img src={link.icon} alt="" />
            <span>{link.name}</span>
          </div>
          <span>1</span>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
