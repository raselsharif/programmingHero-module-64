import { Helmet } from "react-helmet-async";
import PageCover from "../../components/PageCover/PageCover";
import menuPageCover from "/menu/banner3.jpg";
import dessertCover from "/menu/dessert-bg.jpeg";
import pizzaCover from "/menu/pizza-bg.jpg";
import saladCover from "/menu/salad-bg.jpg";
import soupCover from "/menu/soup-bg.jpg";

import SectionHeader from "../../components/SectionHeader/SectionHeader";
import useMenuAPI from "../../hooks/useMenuAPI";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const menus = useMenuAPI();
  const offered = menus.filter((item) => item.category === "offered");
  const dessert = menus.filter((item) => item.category === "dessert");
  const pizza = menus.filter((item) => item.category === "pizza");
  const salads = menus.filter((item) => item.category === "salad");
  const soups = menus.filter((item) => item.category === "soup");

  // console.log(offered);
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
        </div>
        <MenuCategory item={offered} />
        <MenuCategory
          item={dessert}
          coverImg={dessertCover}
          coverTitle={"desserts"}
        />
        <MenuCategory
          item={pizza}
          coverImg={pizzaCover}
          coverTitle={"pizzas"}
        />
        <MenuCategory
          item={salads}
          coverImg={saladCover}
          coverTitle={"salads"}
        />
        <MenuCategory item={soups} coverImg={soupCover} coverTitle={"soups"} />
      </div>
    </div>
  );
};

export default Menu;
