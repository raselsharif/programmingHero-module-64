import { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import OurMenuCard from "./OurMenuCard";
import { Button } from "flowbite-react";

const OurMenu = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);
  return (
    <div className="my-20">
      <SectionHeader header={"FROM OUR MENU"} subHeader={"Check out"} />
      <div className="flex flex-wrap gap-4">
        {menus.splice(0, 6).map((menu) => (
          <OurMenuCard key={menu._id} menu={menu} />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button>Show All</Button>
      </div>
    </div>
  );
};

export default OurMenu;
