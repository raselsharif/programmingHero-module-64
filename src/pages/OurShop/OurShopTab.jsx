import OurShopCard from "./OurShopCard";

const OurShopTab = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item) => (
        <OurShopCard key={item._id} items={item} />
      ))}
    </div>
  );
};

export default OurShopTab;
