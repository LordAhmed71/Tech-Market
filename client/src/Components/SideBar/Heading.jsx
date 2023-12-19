import { Account, CloseLight } from "../../Assets";
const Heading = () => {
  return (
    <div className="heading">
      <div className="right">
        <img src={Account} alt="" />
        <span>Hello, Sign in</span>
      </div>
      <img src={CloseLight} alt="" className="icon" />
    </div>
  );
};

export default Heading;
