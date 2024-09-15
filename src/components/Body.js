import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestuarantCard, { withPromotedLabel } from "./RestuarantCard";
import Shimmer from "./Shimmer";
import { RES_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestuarants from "../utils/useRestuarants";
import UserContext from "../utils/UserContext";

const Body = () => {
  const restuarantList = useRestuarants();
  const [filteredRestuarants, setFilteredRestuarants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);

  const RestuarantCardPromoted = withPromotedLabel(RestuarantCard);

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
      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className=" border border-solid-border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="m-4 px-4 py-2 bg-green-100 rounded-lg"
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
        <div className="m-4 p-4 flex items-center">
          <button
            className="m-4 px-4 py-2 bg-gray-100 rounded-lg"
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
        <div className="m-4 p-4 flex items-center">
          UserName:{" "}
          <input
            className="m-4 px-4 py-2 border border-black rounded-lg"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap">
        {console.log("filteredRestu ", filteredRestuarants)}
        {filteredRestuarants.map((list) => (
          <Link
            to={"restuarants/" + list.info.id}
            key={list.info.id}
            style={{ textDecoration: "none" }}
          >
            {list.info.isOpen ? (
              <RestuarantCardPromoted resData={list} />
            ) : (
              <RestuarantCard resData={list} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
module.exports = Body;
