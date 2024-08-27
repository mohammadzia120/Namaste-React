import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";

const RestuarantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  console.log("resId ", resId);
  useEffect(() => {
    console.log("hi");
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

  return (
    <div>
      <h2>{name}</h2>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}{" "}
      </p>
      {itemCards.map((item) => (
        <li key={item.card.info.id}>
          {item.card.info.name} - {"Rs"}{" "}
          {item.card.info.price / 100 || item.card.info.defaultPrice}
        </li>
      ))}
    </div>
  );
};

module.exports = RestuarantMenu;
