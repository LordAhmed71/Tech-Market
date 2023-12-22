import { FooterData } from "../../Constants";

const MobileFooter = () => {
  return (
    <div className="mobileFooter">
      {FooterData.map((d, i) => (
        <div className="item" key={i}>
          <details className="main">
            <summary className="s">{d.title}</summary>
            <div className="menu">
              {d.list.map((l, i) => (
                <p key={i}>{l}</p>
              ))}
            </div>
          </details>
          <span className="open">+</span>
        </div>
      ))}
    </div>
  );
};

export default MobileFooter;
