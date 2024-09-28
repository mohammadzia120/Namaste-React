import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  console.log("item ", items);
  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item?.card?.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item?.card?.info?.name}</span>
                <span>
                  - ₹{" "}
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}{" "}
                </span>
              </div>

              <p className="text-xs ">{item?.card?.info?.description}</p>
            </div>
            <div className="p-4 w-3/12">
              <div className="absolute inline-block">
                <button
                  className=" -bottom-10 bg-white left-0 font-bold text-green-700 px-4 py-2 rounded shadow-lg"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
