import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayouts/MainLayout";
import Home from "../components/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import OurShop from "../pages/OurShop/OurShop";

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
    ],
  },
]);

export default Routers;
