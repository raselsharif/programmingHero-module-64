import PageCover from "../../components/PageCover/PageCover";
import useMenuAPI from "../../hooks/useMenuAPI";
import OurShopCard from "./OurShopCard";
import shopBG from "/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OurShopTab from "./OurShopTab";
import { useParams } from "react-router-dom";
import { useState } from "react";

const OurShop = () => {
  const menus = useMenuAPI();
  const categories = ["salads", "desserts", "pizzas", "soups"];
  const { category } = useParams();
  // console.log(category);
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const dessert = menus.filter((item) => item.category === "dessert");
  const pizza = menus.filter((item) => item.category === "pizza");
  const salads = menus.filter((item) => item.category === "salad");
  const soups = menus.filter((item) => item.category === "soup");

  return (
    <div>
      <PageCover
        coverBG={shopBG}
        coverDesc={"Would you like to try a dish?"}
        coverTitle={"OUR SHOP"}
      />
      <div className="max-w-[1320px] mx-auto mt-20 mb-10">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="flex justify-center mb-6">
            <Tab>Salads</Tab>
            <Tab>Desserts</Tab>
            <Tab>Pizzas</Tab>
            <Tab>Soups</Tab>
          </TabList>
          <TabPanel>
            <OurShopTab items={salads} />
          </TabPanel>
          <TabPanel>
            <OurShopTab items={dessert} />
          </TabPanel>
          <TabPanel>
            <OurShopTab items={pizza} />
          </TabPanel>
          <TabPanel>
            <OurShopTab items={soups} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
