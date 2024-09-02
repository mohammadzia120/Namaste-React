import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestuarantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  return resInfo;
};

module.exports = useRestuarantMenu;
