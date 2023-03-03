import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../constants";
import Shimmer from "./shimmer";
import useRestaurant from "../utils/custom-hooks/useRestaurant";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";
const RestaurantMenu = () => {
  const dispatch=useDispatch()
  const cartItems=useSelector(store=>store.cart.items)
  console.log("cartItems: ",cartItems)
  
  const params = useParams();
  const { id } = params;
  
  const restaruantMenu=useRestaurant(id)

  
  return restaruantMenu.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex gap-5">
      <div>
        <h1>id:{id}</h1>
        <h2>{restaruantMenu.name}</h2>
        <img
          src={`${IMG_CDN_URL}/${restaruantMenu.cloudinaryImageId}`}
          alt="Restaruant Logo"
        />
      </div>

      <div>
        <h2 className="font-bold mt-2">Menu</h2>
        <ul data-testid="menu">
          
          {Object.values(restaruantMenu?.menu?.items).map((item) => {
            return (<li key={item.id} className="flex gap-2 p-2">
              <h1 key={item.id}>{item.name}</h1>
              <button data-testid="add-btn" onClick={()=>dispatch(addItem(item))} className="bg-green-100 p-1">
                Add item
              </button>
            </li>) 
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
