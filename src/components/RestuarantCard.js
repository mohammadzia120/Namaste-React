import { CDN_URL } from "../utils/constants";
const RestuarantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cloudinaryImageId, cuisines } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="res-card">
      <img
        alt="food"
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}start</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};
module.exports = RestuarantCard;
