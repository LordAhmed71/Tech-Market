import { useState } from "react";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";

import "./Header.scss";
import SearchBar from "./SearchBar";

const Header = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="headerContainer">
      <header className="header">
        <Logo />
        <SearchInput className="desktop" />
        <MobileMenu toggleShow={toggleShow} />
        <Menu />
        <SearchBar show={show} toggleShow={toggleShow} />
      </header>
    </div>
  );
};

export default Header;
