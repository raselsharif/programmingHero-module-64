import { useEffect, useState } from "react";

const useMenuAPI = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);
  return menus;
};

export default useMenuAPI;
