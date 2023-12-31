import { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import MenuCard from "../../MenusCard/MenuCard";
import SectionHeader from "../../SectionHeader/SectionHeader";
import useMenuAPI from "../../../hooks/useMenuAPI";
import { Link } from "react-router-dom";

const OurMenu = () => {
  const menus = useMenuAPI();
  return (
    <div className="my-20">
      <SectionHeader header={"FROM OUR MENU"} subHeader={"Check out"} />
      <div className="flex flex-wrap gap-4">
        {menus.splice(0, 6).map((menu) => (
          <MenuCard key={menu._id} items={menu} />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link to={"/menu"}>
          <Button>Show All</Button>
        </Link>
      </div>
    </div>
  );
};

export default OurMenu;
