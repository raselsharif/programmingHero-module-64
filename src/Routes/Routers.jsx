import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayouts/MainLayout";
import Home from "../components/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import OurShop from "../pages/OurShop/OurShop";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import ManageItem from "../pages/Dashboard/ManageItem/ManageItem";
import MangeBooking from "../pages/Dashboard/MangeBooking/MangeBooking";
import AllUser from "../pages/Dashboard/AllUser/AllUser";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/shop/:category",
        element: <OurShop />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  // dashboard layout
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <AdminHome />,
      },
      {
        path: "/dashboard/add-item",
        element: <AddItem />,
      },
      {
        path: "/dashboard/manage-item",
        element: <ManageItem />,
      },
      {
        path: "/dashboard/manage-booking",
        element: <MangeBooking />,
      },
      {
        path: "/dashboard/all-users",
        element: <AllUser />,
      },
      {
        path: "/dashboard/update-item/:id",
        element: <UpdateItem />,
      },
    ],
  },
]);

export default Routers;
