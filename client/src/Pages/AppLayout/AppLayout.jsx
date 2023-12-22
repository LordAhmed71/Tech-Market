import Header from "./../../Components/Header/Header";
import Footer from "./../../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "./AppLayout.scss";
const AppLayout = () => {
  return (
    <div className="appLayout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
