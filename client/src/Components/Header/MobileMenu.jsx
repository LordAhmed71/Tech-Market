import { Cart, SearchBold, Wishlist } from "../../Assets";
import { Link } from "react-router-dom";
const MobileMenu = ({toggleShow}) => {

  return (
    <div className="mobileMenu">
      <Link to="/cart" className="link">
        <img src={Cart} alt="" />
      </Link>
      <Link to="/wishlist" className="link">
        <img src={Wishlist} alt="" />
      </Link>
      <img src={SearchBold} alt="" className="icon" onClick={toggleShow} />
    </div>
  );
};

export default MobileMenu;
