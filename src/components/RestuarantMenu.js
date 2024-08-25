import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestuarantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    console.log("hi");
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=150591&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  console.log("resInfo ", resInfo);
  const { name, cuisines } = resInfo?.cards[2]?.card?.card?.info;

  return resInfo === null || !name || !cuisines ? (
    <Shimmer />
  ) : (
    <div>
      <h2>{name}</h2>
      <h2>{cuisines}</h2>
    </div>
  );
};

module.exports = RestuarantMenu;
