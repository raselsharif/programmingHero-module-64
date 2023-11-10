import { Outlet } from "react-router-dom";
import MenuBar from "./MenuBar";
import FooterMy from "./FooterMy";

const MainLayout = () => {
  return (
    <div>
      <MenuBar />
      <Outlet />
      <FooterMy />
    </div>
  );
};

export default MainLayout;
