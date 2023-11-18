import { Outlet } from "react-router-dom";
import DashboardMenu from "../../components/Dashboad/DashboardMenu/DashboardMenu";

const Dashboard = () => {
  return (
    <div className="max-w-[1320px] mx-auto grid grid-cols-12">
      <div className="col-span-3 bg-yellow-400 h-screen">
        <DashboardMenu />
      </div>
      <div className="col-span-9 pt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
