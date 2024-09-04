import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";

const RestuarantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestuarantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

  return (
    <div className="p-4 m-4">
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
