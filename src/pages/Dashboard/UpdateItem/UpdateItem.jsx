import { Button, FileInput, Label, TextInput, Textarea } from "flowbite-react";
import useAxiosPublic from "../../../hooks/useAxiosPublic.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const ManageItem = () => {
  const axiosPublic = useAxiosPublic();
  const params = useParams();
  // console.log(params.id);
  const [menu, setMenu] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axiosPublic.get(`/menu/${params.id}`).then((res) => setMenu(res.data));
  }, [axiosPublic, params.id]);
  const handleRecipeUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const recipe = form.recipe.value;
    const category = form.category.value;
    const price = parseFloat(form.price.value);
    const details = form.details.value;
    const image = form.image?.files[0] || menu?.image;
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
            recipe,
            category,
            price,
            details,
            image: res.data.data.display_url,
          };
          axiosPublic.patch(`/update-item/${params.id}`, item).then((res) => {
            console.log("Update item successfully");
            navigate("/dashboard/manage-item");
          });
        }
      });
    console.log(imageAPI);
    console.log(recipe, category, price, details, image);
  };
  return (
    <div>
      <h2 className="text-center font-semibold text-2xl capitalize border-b-2 pb-2">
        Update Item
      </h2>
      <div className="flex flex-col justify-center items-center mt-10">
        <form
          onSubmit={handleRecipeUpdate}
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
              defaultValue={menu?.name}
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
                defaultValue={menu?.category}
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
                defaultValue={menu?.price}
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
              defaultValue={menu?.recipe}
            />
          </div>
          <FileInput type="file" defaultValue={menu?.image} name="image" />
          <Button type="submit">Update item</Button>
        </form>
      </div>
    </div>
  );
};

export default ManageItem;
