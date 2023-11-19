import { Button, Table } from "flowbite-react";
import useAxiosPublic from "../../../hooks/useAxiosPublic.jsx";
import useMenuAPI from "../../../hooks/useMenuAPI.jsx";
import { Link } from "react-router-dom";
const ManageItem = () => {
  const axiosPublic = useAxiosPublic();
  const menus = useMenuAPI();
  const handleItemDelete = (id) => {
    axiosPublic.delete(`/delete-item/${id}`).then((res) => {
      console.log(res);
      window.location.reload();
    });
  };
  return (
    <div>
      <h2 className="text-center font-semibold text-2xl capitalize border-b-2 pb-2">
        manage item
      </h2>
      <div className="h-[calc(100vh-130px)] overflow-y-auto">
        <Table striped>
          <Table.Head>
            <Table.HeadCell>#</Table.HeadCell>
            <Table.HeadCell>Image</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {menus?.map((item, idx) => (
              <Table.Row
                key={item?._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {idx + 1}
                </Table.Cell>
                <Table.Cell>
                  <img className="h-16" src={item?.image} alt="recipe image" />
                </Table.Cell>
                <Table.Cell>{item?.name}</Table.Cell>
                <Table.Cell>$ {item?.price}</Table.Cell>
                <Table.Cell>
                  <Link to={`/dashboard/update-item/${item._id}`}>
                    <Button className="cursor-pointer">Update</Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    onClick={() => handleItemDelete(item._id)}
                    color="failure"
                  >
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default ManageItem;
