import { navLinks } from "../../Constants";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <nav className="menu">
      {navLinks.map((navLink) => (
        <Link to={navLink.to} className="link">
          <div className="item">
            <img src={navLink.icon} alt="" className="img" />
            {/* {(navLink.name === "Wishlist" || navLink.name === "Cart") && (
              <span className="count">1</span>
            )}{" "} */}
            <span className="iconTitle">{navLink.name}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default Menu;
