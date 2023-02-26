import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../constants";
import Shimmer from "./shimmer";
import useRestaurant from "../utils/custom-hooks/useRestaurant";
const RestaurantMenu = () => {
  
  const params = useParams();
  const { id } = params;

  const restaruantMenu=useRestaurant(id)

  
  return restaruantMenu.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>id:{id}</h1>
        <h2>{restaruantMenu.name}</h2>
        <img
          src={`${IMG_CDN_URL}/${restaruantMenu.cloudinaryImageId}`}
          alt="Restaruant Logo"
        />
      </div>

      <div>
        <h2>Menu</h2>
        <ul>
          {console.log(Object.values(restaruantMenu?.menu?.items)[0].name)}
          {Object.values(restaruantMenu?.menu?.items).map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
