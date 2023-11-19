import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useMenuAPI = () => {
  const [menus, setMenus] = useState([]);
  // console.log(menus);
  // axios.get("http://localhost:5000/menus").then((res) => {
  //   setMenus(res.data);
  // });
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic
      .get("/menus")
      .then((res) => {
        setMenus(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [axiosPublic]);
  return menus;
};

export default useMenuAPI;
