import PageCover from "../../components/PageCover/PageCover";
import OurShopCard from "./OurShopCard";
import shopBG from "/shop/banner2.jpg";

const OurShop = () => {
  return (
    <div>
      <PageCover
        coverBG={shopBG}
        coverDesc={"Would you like to try a dish?"}
        coverTitle={"OUR SHOP"}
      />
      <OurShopCard />
    </div>
  );
};

export default OurShop;
