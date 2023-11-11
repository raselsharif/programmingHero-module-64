import { Helmet } from "react-helmet-async";
import PageCover from "../../components/PageCover/PageCover";
import menuPageCover from "/menu/banner3.jpg";
import dessertCover from "/menu/dessert-bg.jpeg";

import SectionHeader from "../../components/SectionHeader/SectionHeader";
import MenuCard from "../../components/MenusCard/MenuCard";
import useMenuAPI from "../../hooks/useMenuAPI";

const Menu = () => {
  const menus = useMenuAPI();
  const offered = menus.filter((item) => item.category === "offered");
  const dessert = menus.filter((item) => item.category === "dessert");

  console.log(offered);
  return (
    <div>
      <Helmet>
        <title>MENU | Bistro Boss</title>
      </Helmet>
      <div>
        <PageCover
          coverBG={menuPageCover}
          coverTitle={"OUR MENU"}
          coverDesc={"Would you like to try a dish?"}
        />
        <div className="mt-20">
          <SectionHeader header={"Don't miss"} subHeader={"TODAY'S OFFER"} />
          <div className="flex flex-wrap gap-4 max-w-[1320px] mx-auto mt-10">
            {offered.map((items) => (
              <MenuCard key={items._id} items={items} />
            ))}
          </div>
        </div>
        <div className="mt-20">
          <PageCover
            coverBG={dessertCover}
            coverTitle={"DESSERTS"}
            coverDesc={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
          <div className="flex flex-wrap gap-4 max-w-[1320px] mx-auto mt-10">
            {dessert.map((items) => (
              <MenuCard key={items._id} items={items} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
