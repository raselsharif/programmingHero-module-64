import { Button, Table } from "flowbite-react";
import useUsers from "../../../hooks/useUsers";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AllUser = () => {
  const users = useUsers();
  const axiosPublic = useAxiosPublic();
  const handleUserDelete = (id) => {
    axiosPublic
      .delete(`/user/${id}`)
      .then((res) => {
        // console.log(res.data);
        location.reload();
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  const handleUpdateRole = (id) => {
    axiosPublic
      .put(`/user/${id}`)
      .then((res) => {
        console.log(res.data);
        location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h2 className="text-center font-semibold text-2xl capitalize">
        all user
      </h2>
      <Table striped>
        <Table.Head>
          <Table.HeadCell>#</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Role</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {users?.map((user, idx) => (
            <Table.Row
              key={user._id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {idx + 1}
              </Table.Cell>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>
                <Button
                  className="cursor-pointer"
                  onClick={() => handleUpdateRole(user._id)}
                >
                  {user.role ? user.role : "User"}
                </Button>
              </Table.Cell>
              <Table.Cell>
                {user?.role == "admin" ? (
                  <Button disabled>Admin</Button>
                ) : (
                  <Button
                    onClick={() => handleUserDelete(user._id)}
                    color="failure"
                  >
                    Delete
                  </Button>
                )}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default AllUser;
