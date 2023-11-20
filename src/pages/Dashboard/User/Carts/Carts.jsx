import { Button, Table } from "flowbite-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const Carts = () => {
  const [carts, setCarts] = useState([]);
  const totalPrice = carts.reduce((total, item) => total + item.price, 0);
  const totalPriceToFixed = totalPrice.toFixed(2);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic
      .get("/carts")
      .then((res) => setCarts(res.data))
      .catch((err) => console.log(err));
  }, [axiosPublic]);
  const handleCartDelete = (id) => {
    axiosPublic
      .delete(`/cart-delete/${id}`)
      .then((res) => {
        console.log(res.data);
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="border-b-2 pb-2 mb-3 flex justify-between px-5">
        <h2 className="text-center font-semibold text-2xl capitalize ">
          My Cart
        </h2>
        <p className="font-semibold text-xl">
          Total Price: {totalPriceToFixed}
        </p>
        {carts?.length ? (
          <Link to={"/dashboard/payment"}>
            <Button>Pay</Button>
          </Link>
        ) : (
          <Button disabled>Pay</Button>
        )}
      </div>
      <div className="h-[calc(100vh-130px)] overflow-y-auto">
        <Table striped>
          <Table.Head>
            <Table.HeadCell>#</Table.HeadCell>
            <Table.HeadCell>Image</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {carts?.map((item, idx) => (
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
                  <Button
                    onClick={() => handleCartDelete(item._id)}
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

export default Carts;
