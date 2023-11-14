import PageCover from "../../components/PageCover/PageCover";
import MenuCard from "../../components/MenusCard/MenuCard";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const MenuCategory = ({ item, coverImg, coverTitle }) => {
  return (
    <div className="mt-20">
      {coverTitle && (
        <PageCover
          coverBG={coverImg}
          coverTitle={coverTitle}
          coverDesc={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      )}
      <div className="flex flex-wrap gap-4 max-w-[1320px] mx-auto mt-10">
        {item.map((items) => (
          <MenuCard key={items._id} items={items} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link to={`/shop`}>
          <Button>Order Your Favorite Food</Button>
        </Link>
      </div>{" "}
    </div>
  );
};

export default MenuCategory;
