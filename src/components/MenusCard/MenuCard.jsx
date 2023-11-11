const MenuCard = ({ items }) => {
  const { _id, image, price, recipe, category, name } = items;
  return (
    <div className="max-w-[45%] flex gap-3">
      <img
        style={{
          width: "118px",
          height: "104px",
          borderRadius: "0px 200px 200px 200px",
        }}
        src={image}
        alt="menu image"
      />
      <div>
        <h3 className="mb-3">{name}</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-600">${price}</p>
    </div>
  );
};

export default MenuCard;
