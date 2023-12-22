import { FooterData } from "../../Constants";

const Contact = () => {
  return (
    <div className="contact">
      {FooterData.map((d, i) => (
        <div className="infoData" key={i}>
          <h3>{d.title}</h3>
          <ul className="contactLists">
            {d.list.map((item, i) => (
              <li key={i} className="contactList">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Contact;
