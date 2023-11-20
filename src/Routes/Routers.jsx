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
import UserHome from "../pages/Dashboard/User/UserHome/UserHome";
import Reservation from "../pages/Dashboard/User/Reservation/Reservation";
import Carts from "../pages/Dashboard/User/Carts/Carts";
import Review from "../pages/Dashboard/User/Review/Review";
import Booking from "../pages/Dashboard/User/Booking/Booking";
import PaymentHistory from "../pages/Dashboard/User/PaymentHistory/PaymentHistory";
import Payment from "../pages/Dashboard/User/Payment/Payment";

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
      // admin routes
      {
        path: "/dashboard/home",
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
      // user routes
      {
        path: "/dashboard/user-home",
        element: <UserHome />,
      },
      {
        path: "/dashboard/reservation",
        element: <Reservation />,
      },
      {
        path: "/dashboard/payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "/dashboard/payment",
        element: <Payment />,
      },
      {
        path: "/dashboard/cart",
        element: <Carts />,
      },
      {
        path: "/dashboard/review",
        element: <Review />,
      },
      {
        path: "/dashboard/booking",
        element: <Booking />,
      },
    ],
  },
]);

export default Routers;
