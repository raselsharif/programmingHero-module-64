import { Button, FileInput, Label, TextInput, Textarea } from "flowbite-react";
import useAxiosPublic from "../../../hooks/useAxiosPublic.jsx";
const AddItem = () => {
  const axiosPublic = useAxiosPublic();
  const handleRecipeAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.recipe.value;
    const category = form.category.value;
    const price = parseFloat(form.price.value);
    const recipe = form.details.value;
    const image = form.image.files[0];
    const imageAPI = import.meta.env.VITE_imageBB;
    axiosPublic
      .post(
        `https://api.imgbb.com/1/upload?key=${imageAPI}`,
        { image: image },
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        if (res.data.success) {
          const item = {
            name,
            category,
            price,
            recipe,
            image: res.data.data.display_url,
          };
          axiosPublic.post("/add-item", item).then((res) => {
            console.log("add item successfully");
          });
        }
      });
    console.log(imageAPI);
    console.log(name, category, price, recipe, image);
  };
  return (
    <div>
      <h2 className="text-center font-semibold text-2xl capitalize border-b-2 pb-2">
        add item
      </h2>
      <div className="flex flex-col justify-center items-center mt-10">
        <form
          onSubmit={handleRecipeAdd}
          className="flex max-w-md flex-col gap-4"
        >
          <div>
            <div className="mb-2 block">
              <Label value="Recipe Name" />
            </div>
            <TextInput
              type="text"
              name="recipe"
              placeholder="Recipe Name"
              required
              shadow
            />
          </div>
          <div className="flex justify-between gap-4">
            <div className="w-full">
              <div className="mb-2 block">
                <Label value="Category" />
              </div>
              <TextInput
                type="text"
                name="category"
                placeholder="Category"
                required
                shadow
              />
            </div>
            <div className="w-full">
              <div className="mb-2 block">
                <Label value="Price" />
              </div>
              <TextInput
                type="text"
                name="price"
                placeholder="Price"
                required
                shadow
              />
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Recipe Details" />
            </div>
            <Textarea
              name="details"
              rows={10}
              type="text"
              placeholder="Recipe details"
              required
              shadow
            />
          </div>
          <FileInput type="file" name="image" />
          <Button type="submit">Add item</Button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
