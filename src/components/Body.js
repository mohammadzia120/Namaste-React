import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestuarantCard from "./RestuarantCard";
import Shimmer from "./Shimmer";
import { RES_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestuarants from "../utils/useRestuarants";

const Body = () => {
  const restuarantList = useRestuarants();
  const [filteredRestuarants, setFilteredRestuarants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    setFilteredRestuarants(restuarantList);
  }, [restuarantList]);

  if (onlineStatus !== true)
    return (
      <h1>Look like you are offline!! Please Check you internet connection</h1>
    );

  return restuarantList.length === 0 ? (
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
              const filteredData = restuarantList.filter((list) =>
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
            const filteredList = restuarantList.filter(
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
          <Link
            to={"restuarants/" + list.info.id}
            key={list.info.id}
            style={{ textDecoration: "none" }}
          >
            <RestuarantCard resData={list} />
          </Link>
        ))}
      </div>
    </div>
  );
};
module.exports = Body;
