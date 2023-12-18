import "./AppLayout.scss";
import Header from "./../../Components/Header/Header";
import Footer from "./../../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <div className="appLayout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
