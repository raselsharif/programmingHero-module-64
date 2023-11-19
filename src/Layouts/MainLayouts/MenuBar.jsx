import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import Login from "../../pages/Login/Login";
import useAuth from "../../hooks/useAuth";

const MenuBar = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  const handleLogOut = () => {
    console.log("log out");
    logOut();
  };
  Login;
  return (
    <Navbar fluid rounded>
      <Navbar.Brand className="flex flex-col gap-1">
        <img
          src="/logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Bistro Boss Restaurant
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {user ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" img={user?.photoURL} rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">{user?.displayName}</span>
              <span className="block truncate text-sm font-medium">
                {user?.email}
              </span>
            </Dropdown.Header>
            <Link to={"/dashboard"}>
              <Dropdown.Item>Dashboard</Dropdown.Item>
            </Link>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogOut}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              isActive ? "border-b-2 border-blue-500" : ""
            }
          >
            Login/Register
          </NavLink>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "border-b-2 border-blue-500" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/menu"}
          className={({ isActive }) =>
            isActive ? "border-b-2 border-blue-500" : ""
          }
        >
          Menu
        </NavLink>
        <NavLink
          to={"/shop/salads"}
          className={({ isActive }) =>
            isActive ? "border-b-2 border-blue-500" : ""
          }
        >
          Our Shop
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MenuBar;
