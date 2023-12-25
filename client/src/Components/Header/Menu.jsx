import { navLinks } from "../../Constants";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <nav className="menu">
      {navLinks.map((navLink, i) => (
        <Link to={navLink.to} className="link" key={i}>
          <div className="item">
            <img src={navLink.icon} alt="" className="img" />
            <span className="iconTitle">{navLink.name}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default Menu;
