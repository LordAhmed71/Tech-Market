import Categories from "./Categories";
import Heading from "./Heading";
import Menu from "./Menu";
import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <aside className="wrapper">
        <Heading />
        <Menu />
        <Categories />
      </aside>
    </div>
  );
};

export default Sidebar;
