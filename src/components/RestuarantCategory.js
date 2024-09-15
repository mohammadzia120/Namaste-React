import { useState } from "react";
import ItemList from "./ItemList";

const RestuarantCategory = ({ data, showItem, setShowIndex }) => {
  handleClick = () => {
    console.log("handleClick");
    setShowIndex();
  };
  return (
    <div>
      <div className="p-4 mx-auto my-4  w-9/12 bg-gray-50 shadow-lg items-center">
        {/* accordian Header */}
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>∨</span>
        </div>
        {/* accordian body */}
        <div>{showItem && <ItemList items={data.itemCards} />}</div>
      </div>
    </div>
  );
};
export default RestuarantCategory;
