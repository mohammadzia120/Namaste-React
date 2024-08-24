import { useEffect, useState } from "react";
import RestuarantCard from "./RestuarantCard";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listofRestuarants, setListofRestuarants] = useState([]);
  const [filteredRestuarants, setFilteredRestuarants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  //  whenever state variable changes, react triggers a reconciliation cylcle(re-render the component)
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setListofRestuarants(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestuarants(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return listofRestuarants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="btn-search"
            onClick={() => {
              const filteredData = listofRestuarants.filter((list) =>
                list.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestuarants(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestuarants.filter(
              (list) => list.info.avgRating < 4
            );
            setFilteredRestuarants(filteredList);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestuarants.map((list) => (
          <RestuarantCard key={list.info.id} resData={list} />
        ))}
      </div>
    </div>
  );
};
module.exports = Body;
