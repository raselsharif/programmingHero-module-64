import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";

const MenuBar = () => {
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
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
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
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MenuBar;
