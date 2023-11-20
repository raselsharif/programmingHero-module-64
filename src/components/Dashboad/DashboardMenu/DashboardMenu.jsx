import { NavLink } from "react-router-dom";
import useUsers from "../../../hooks/useUsers";
import useMenuAPI from "../../../hooks/useMenuAPI";

const DashboardMenu = () => {
  const userLength = useUsers().length;
  const menuLength = useMenuAPI().length;
  return (
    <div className="flex flex-col gap-4 px-4 pt-20">
      <div className="flex flex-col border-b-2 pb-4">
        {/* user routes */}
        <NavLink
          to={"/dashboard/user-home"}
          className={({ isActive }) =>
            isActive ? " text-white shadow-md p-2" : "p-2"
          }
        >
          User Home
        </NavLink>
        <NavLink
          to={"/dashboard/reservation"}
          className={({ isActive }) =>
            isActive ? " text-white shadow-md p-2" : "p-2"
          }
        >
          Reservation
        </NavLink>
        <NavLink
          to={"/dashboard/payment-history"}
          className={({ isActive }) =>
            isActive ? " text-white shadow-md p-2" : "p-2"
          }
        >
          Payment History
        </NavLink>
        <NavLink
          to={"/dashboard/cart"}
          className={({ isActive }) =>
            isActive ? " text-white shadow-md p-2" : "p-2"
          }
        >
          My Cart
        </NavLink>
        <NavLink
          to={"/dashboard/review"}
          className={({ isActive }) =>
            isActive ? " text-white shadow-md p-2" : "p-2"
          }
        >
          Add Review
        </NavLink>
        <NavLink
          to={"/dashboard/booking"}
          className={({ isActive }) =>
            isActive ? " text-white shadow-md p-2" : "p-2"
          }
        >
          My Booking
        </NavLink>
        <div className="border-b-2 pb-3 mb-5"></div>
        {/* admin routes */}
        <NavLink
          to={"/dashboard/home"}
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
          Manage Item ({menuLength})
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
        <NavLink to={"/"}>Home</NavLink>
        <NavLink>Menu</NavLink>
        <NavLink>Shop</NavLink>
        <NavLink>Contact</NavLink>
      </div>
    </div>
  );
};

export default DashboardMenu;
