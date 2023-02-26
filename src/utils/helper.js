export const filterFunction=(text,RestaurantData)=>{

 return RestaurantData.filter((res)=>res.data.data.name?.toLowerCase().includes(text))

}