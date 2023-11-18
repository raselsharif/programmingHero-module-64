import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic
      .get("/users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axiosPublic]);
  return users;
};

export default useUsers;
