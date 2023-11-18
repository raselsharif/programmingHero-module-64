import { NavLink } from "react-router-dom";
import useUsers from "../../../hooks/useUsers";

const DashboardMenu = () => {
  const userLength = useUsers().length;
  return (
    <div className="flex flex-col gap-4 px-4 pt-20">
      <div className="flex flex-col border-b-2 pb-4">
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) =>
            isActive ? " text-white shadow-md p-2" : "p-2"
          }
        >
          Admin Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? " text-white shadow-md p-2" : "p-2"
          }
          to={"/dashboard/add-item"}
        >
          Add Item
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? " text-white shadow-md p-2" : "p-2"
          }
          to={"/dashboard/manage-item"}
        >
          Manage Item
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? " text-white shadow-md p-2" : "p-2"
          }
          to={"/dashboard/manage-booking"}
        >
          Manage Bookings
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? " text-white shadow-md p-2" : "p-2"
          }
          to={"/dashboard/all-users"}
        >
          All Users ({userLength})
        </NavLink>
      </div>
      <div className="flex flex-col">
        <NavLink>Home</NavLink>
        <NavLink>Menu</NavLink>
        <NavLink>Shop</NavLink>
        <NavLink>Contact</NavLink>
      </div>
    </div>
  );
};

export default DashboardMenu;
