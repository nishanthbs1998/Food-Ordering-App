import { IMG_CDN_URL } from "../../constants";
const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="w-64 rounded-lg shadow-lg min-h-[270px] p-2 bg-purple-200">
      <img
        className="shadow-sm rounded-lg  mb-2"
        src={`${IMG_CDN_URL}/${cloudinaryImageId}`}
        alt="restaurant-image"
      />
      <h3 className="font-bold">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard