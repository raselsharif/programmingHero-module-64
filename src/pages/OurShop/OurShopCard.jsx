import { Button, Card } from "flowbite-react";

const OurShopCard = ({ items }) => {
  const { _id, image, price, recipe, category, name } = items;

  return (
    <div>
      <Card
        className="max-w-sm"
        renderImage={() => (
          <img width={500} height={500} src={image} alt="image 1" />
        )}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{recipe}</p>
        <p className="py-2 px-3 bg-black bg-opacity-70 text-white my-2">
          {price}
        </p>
        <Button className="uppercase">add to cart</Button>
      </Card>
    </div>
  );
};

export default OurShopCard;
