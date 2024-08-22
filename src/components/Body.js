import RestuarantCard from "./RestuarantCard";
import { useState } from "react";
import { restuarantList } from "../utils/mockData";
const Body = () => {
  const [listofRestuarants, setListofRestuarants] = useState(restuarantList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestuarants.filter(
              (list) => list.info.avgRating < 4
            );
            setListofRestuarants(filteredList);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listofRestuarants.map((list) => (
          <RestuarantCard key={list.info.id} resData={list} />
        ))}
      </div>
    </div>
  );
};
module.exports = Body;
