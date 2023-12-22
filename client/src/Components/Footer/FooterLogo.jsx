import { SocialsIcons } from "../../Constants";
import Img from "./../LazyLoadImage/Img";
const FooterLogo = () => {
  return (
    <div className="footerLogo">
      <h2>Tech Market</h2>
      <p>Best For Shopping</p>
      <span className="slo">Sed do eiusmod tempor incididuntut labore dolore magna.</span>
      <div className="socials">
        {SocialsIcons.map((icon, i) => (
          <Img src={icon} alt="" key={i} className="socialIcon" />
        ))}
      </div>
    </div>
  );
};

export default FooterLogo;
