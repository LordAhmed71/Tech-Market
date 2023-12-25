import { SearchBold, Menu } from "../../Assets";

const MobileMenu = ({ toggleShow }) => {
  return (
    <div className="mobileMenu">
      <img src={SearchBold} alt="" className="icon" onClick={toggleShow} />
      <img src={Menu} alt="" />
    </div>
  );
};

export default MobileMenu;
