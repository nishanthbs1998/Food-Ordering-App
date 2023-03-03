import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnline from "../utils/custom-hooks/useOnline";
import { filterFunction } from "../utils/helper";
import UserContext from "../utils/contexts/UserContext";
const Body = () => {
    const [text,setText]=useState("")
    const [RestaurantData,setRestaurantData]=useState([])
    const [filteredRestaurantList,setFilteredRestarauntList]=useState([])
    const onlineStatus=useOnline()
    
   // console.log("onlineStatus: ",onlineStatus)
    useEffect(()=>{
      // fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.36548488436243&lng=75.12987278401853&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING")
      // .then(res=>res.json())
      // .then(jsonData=>(setRestaurantData(jsonData.data.cards?.filter(card=>card.cardType==="restaurant")),setFilteredRestarauntList(jsonData.data.cards?.filter(card=>card.cardType==="restaurant"))))
      //.then(data=>console.log(data.data.cards))
      
      try{
        loadData()
      }catch(e){
        return <h1>Something went wrong..please refresh</h1>
      }
      
   // console.log("RestaurantData:", RestaurantData)
    },[])

    async function loadData(){
      try{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.36548488436243&lng=75.12987278401853&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING")
        const jsonData=await data.json()
        console.log("json return: ",jsonData)
        setRestaurantData(jsonData.data.cards?.filter(card=>card.cardType==="restaurant"))
        
        setFilteredRestarauntList(jsonData.data.cards?.filter(card=>card.cardType==="restaurant"))
      }catch(e){
        return <h1>Some error occured, please refresh.</h1>
      }
        
 
      }


    if(!onlineStatus)
      return <h1>You are offline!!</h1>

  return RestaurantData.length===0?<Shimmer />: (
    <>
    
    <div className="bg-violet-300 p-2 mt-2 mb-2 shadow-md max-sm:flex max-sm:justify-center">
        <input  data-testid="search-input" className="mr-2 p-1  rounded-md" type="text" placeholder="Search" value={text} onChange={(e)=>setText(e.target.value)} />
        <button data-testid="search-btn" className="bg-blue-400 rounded-md  hover:text-white px-2 py-1" onClick={()=> setFilteredRestarauntList( filterFunction(text,RestaurantData))}>Search</button>
    </div>
    <div data-testid="restaurant-list" className="flex flex-wrap gap-5 justify-center">
      {filteredRestaurantList.length===0?<h1>No results found</h1>:filteredRestaurantList.map((restaurant) => (
     <Link to={`/restaurant-menu/${restaurant?.data?.data?.id}`} key={restaurant?.data?.data?.id} >   <RestaurantCard {...restaurant?.data.data} /></Link>
      ))}
    </div>
  </>
  );
};

export default Body