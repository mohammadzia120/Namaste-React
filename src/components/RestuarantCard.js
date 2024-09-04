import { CDN_URL } from "../utils/constants";
const RestuarantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cloudinaryImageId, cuisines } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-300">
      <img
        alt="food"
        className="res-logo rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} star</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};
module.exports = RestuarantCard;
