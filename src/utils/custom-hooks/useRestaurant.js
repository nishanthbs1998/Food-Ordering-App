import { useEffect,useState } from "react";

const useRestaurant=(id)=>{
    const [restaruantMenu, setRestaurantMenu] = useState([]);
    useEffect(() => {
    try{
        loadRestaurant(id);
    }catch(e){
        return <h1>Some error occured, please refresh</h1>
    }
    
  }, []);

  async function loadRestaurant(id) {
    try{
        const fetchData = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=15.36548488436243&lng=75.12987278401853&menuId=" +
        id
    );
    const jsonData = await fetchData.json();
    setRestaurantMenu(jsonData?.data);
    }catch(e){
        return <h2>{e}</h2>
    }
    
  }

  return restaruantMenu

}

export default useRestaurant