import { useState, useEffect } from "react";
import { RES_URL } from "./constants";

const useRestuarants = () => {
  const [restuarants, setRestuarants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  //  whenever state variable changes, react triggers a reconciliation cylcle(re-render the component)
  const fetchData = async () => {
    const data = await fetch(RES_URL);
    const jsonData = await data.json();
    console.log("jsonData ", jsonData);
    setRestuarants(
      jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return restuarants;
};

export default useRestuarants;
