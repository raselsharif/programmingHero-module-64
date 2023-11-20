import { Outlet } from "react-router-dom";
import DashboardMenu from "../../components/Dashboad/DashboardMenu/DashboardMenu";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard-Bistro Boss</title>
      </Helmet>
      <div className="max-w-[1320px] mx-auto grid grid-cols-12">
        <div className="col-span-3 bg-yellow-400 h-screen">
          <DashboardMenu />
        </div>
        <div className="col-span-9 pt-20">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
