import FooterLogo from "./FooterLogo";
import Contact from "./Contact";
import MobileFooter from "./MobileFooter";
import "./Footer.scss";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="wrapper">
        <MobileFooter/>
        <FooterLogo />
        <Contact />
      </div>
      <div className="copyright">
        Copyright © {currentYear} Tech Market, All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
